package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/reflection"

	pb "github.com/shinguakira/portfolio-api-go/gen/portfolio/v1"
	"github.com/shinguakira/portfolio-api-go/grpcserver"
	"github.com/shinguakira/portfolio-api-go/handler"
)

func main() {
	// REST(HTTP/1.1)と gRPC(HTTP/2)を、それぞれ別ポートで同時に起動します。
	// 中身のデータ(data パッケージ)は両者で共有しており、配り方だけが異なります。
	go startGRPCServer()
	startRESTServer()
}

// startRESTServer は従来どおり chi による REST API を起動します(ブロッキング)。
func startRESTServer() {
	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: false,
		MaxAge:           86400,
	}))

	// Health check
	r.Get("/health", handler.Health)

	// Root
	r.Get("/", handler.Root)

	// API routes
	r.Route("/api", func(r chi.Router) {
		r.Get("/profile", handler.GetProfile)
		r.Get("/experience", handler.GetExperience)
		r.Get("/projects", handler.GetProjects)
		r.Get("/skills", handler.GetSkills)
		r.Get("/other-skills", handler.GetOtherSkills)
		r.Get("/education", handler.GetEducation)
		r.Get("/contact", handler.GetContact)
		r.Get("/certifications", handler.GetCertifications)
		r.Get("/changelogs", handler.GetChangelogs)
		r.Get("/faqs", handler.GetFaqs)
		r.Get("/links", handler.GetLinks)
		r.Get("/strong-points", handler.GetStrongPoints)
		r.Get("/download-pdf", handler.DownloadPortfolioPDF)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3005"
	}

	fmt.Printf("Portfolio API Server (Go / REST) running on port %s\n", port)
	fmt.Printf("Local:  http://localhost:%s\n", port)
	fmt.Printf("Health: http://localhost:%s/health\n", port)

	log.Fatal(http.ListenAndServe(":"+port, r))
}

// startGRPCServer は gRPC サーバを起動します。
func startGRPCServer() {
	port := os.Getenv("GRPC_PORT")
	if port == "" {
		port = "50051" // gRPC の慣習的なポート
	}

	lis, err := net.Listen("tcp", ":"+port)
	if err != nil {
		log.Fatalf("gRPC: failed to listen on %s: %v", port, err)
	}

	// gRPC サーバ本体を作り、生成コード経由で自作サービスを登録します。
	s := grpc.NewServer()
	pb.RegisterPortfolioServiceServer(s, grpcserver.New())

	// 標準ヘルスチェックサービス(grpc.health.v1.Health)。
	// Kubernetes などのヘルスプローブや grpcurl から利用できます。
	hs := health.NewServer()
	hs.SetServingStatus("portfolio.v1.PortfolioService", healthpb.HealthCheckResponse_SERVING)
	healthpb.RegisterHealthServer(s, hs)

	// サーバリフレクション。これを登録しておくと、クライアント側に .proto が無くても
	// grpcurl などがサービス定義を自動発見でき、開発時のデバッグが楽になります。
	reflection.Register(s)

	fmt.Printf("Portfolio API Server (Go / gRPC) running on port %s\n", port)
	fmt.Printf("gRPC:   localhost:%s (reflection + health enabled)\n", port)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("gRPC: failed to serve: %v", err)
	}
}
