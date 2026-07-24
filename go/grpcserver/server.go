// Package grpcserver は PortfolioService の gRPC 実装です。
//
// REST 版のハンドラ(handler パッケージ)と「同じ data パッケージ」を参照し、
// model の構造体を .proto から生成された pb の型へ詰め替えて返します。
// つまりデータの中身は REST と完全に同一で、「配り方(転送方式)」だけが違います。
package grpcserver

import (
	"context"
	"time"

	"github.com/shinguakira/portfolio-api-go/data"
	pb "github.com/shinguakira/portfolio-api-go/gen/portfolio/v1"
	"github.com/shinguakira/portfolio-api-go/model"
	"github.com/shinguakira/portfolio-api-go/service"
)

// Server は生成インタフェース PortfolioServiceServer を実装します。
// UnimplementedPortfolioServiceServer を埋め込むのは gRPC の作法で、
// 将来 .proto に rpc を足しても、未実装メソッドが自動で補われてビルドが壊れません
// (前方互換のための仕組み)。
type Server struct {
	pb.UnimplementedPortfolioServiceServer
}

// New はサーバ実装のインスタンスを返します。
func New() *Server {
	return &Server{}
}

// isEN は lang クエリの解釈を REST 版(handler)と揃えるヘルパ。
// "en" のときだけ英語、それ以外(空含む)は日本語。
func isEN(lang string) bool {
	return lang == "en"
}

// =============================================================================
// 変換ヘルパ: model.*(REST と共有)-> pb.*(gRPC 送信用)
// =============================================================================

func toPBSocialLinks(in []model.SocialLink) []*pb.SocialLink {
	out := make([]*pb.SocialLink, 0, len(in))
	for _, s := range in {
		out = append(out, &pb.SocialLink{
			Platform: s.Platform,
			Url:      s.URL,
			Icon:     s.Icon,
		})
	}
	return out
}

func toPBProfile(p model.ProfileResponse) *pb.Profile {
	return &pb.Profile{
		Name:        p.Name,
		Location:    p.Location,
		AvatarUrl:   p.AvatarURL,
		SocialLinks: toPBSocialLinks(p.SocialLinks),
		Title:       p.Title,
		Summary:     p.Summary,
		Bio:         p.Bio,
	}
}

func toPBExperiences(in []model.WorkExperience) []*pb.WorkExperience {
	out := make([]*pb.WorkExperience, 0, len(in))
	for _, e := range in {
		out = append(out, &pb.WorkExperience{
			Company:         e.Company,
			ProjectOverview: e.ProjectOverview,
			Period:          e.Period,
			TeamSize:        e.TeamSize,
			Role:            e.Role,
			ManMonth:        e.ManMonth,
			Description:     e.Description,
			Archivement:     e.Archivement,
			Technologies:    e.Technologies,
		})
	}
	return out
}

func toPBProjects(in []model.Project) []*pb.Project {
	out := make([]*pb.Project, 0, len(in))
	for _, p := range in {
		out = append(out, &pb.Project{
			Title:        p.Title,
			Description:  p.Description,
			Image:        p.Image,
			Technologies: p.Technologies,
			GithubUrl:    p.GithubURL,
			LiveUrl:      p.LiveURL,
		})
	}
	return out
}

func toPBSkills(in []model.SkillItem) []*pb.Skill {
	out := make([]*pb.Skill, 0, len(in))
	for _, s := range in {
		out = append(out, &pb.Skill{
			Name:         s.Name,
			Category:     s.Category,
			Years:        s.Years,
			Proficiency:  s.Proficiency,
			Picture:      s.Picture,
			PictureColor: s.PictureColor,
		})
	}
	return out
}

func toPBEducation(in []model.EducationHistory) []*pb.Education {
	out := make([]*pb.Education, 0, len(in))
	for _, e := range in {
		out = append(out, &pb.Education{
			StartYear:   e.StartYear,
			EndYear:     e.EndYear,
			School:      e.School,
			Department:  e.Department,
			Description: e.Description,
		})
	}
	return out
}

func toPBContact(c model.Contact) *pb.Contact {
	return &pb.Contact{
		Email:   c.Email,
		Phone:   c.Phone,
		Address: c.Address,
		SocialMedia: &pb.SocialMedia{
			Github: c.SocialMedia.Github,
		},
		PreferredMethod: c.PreferredMethod,
		AvailableFor:    c.AvailableFor,
		Response: &pb.ResponseInfo{
			TimeFrame: c.Response.TimeFrame,
			Languages: c.Response.Languages,
		},
	}
}

func toPBCertifications(in []model.CertificationItem) []*pb.Certification {
	out := make([]*pb.Certification, 0, len(in))
	for _, c := range in {
		out = append(out, &pb.Certification{
			Id:           int32(c.ID),
			Name:         c.Name,
			Organization: c.Organization,
			Date:         c.Date,
			VerifyLink:   c.VerifyLink,
		})
	}
	return out
}

func toPBChangelogs(in []model.ChangelogItem) []*pb.Changelog {
	out := make([]*pb.Changelog, 0, len(in))
	for _, cl := range in {
		changes := make([]*pb.ChangelogChange, 0, len(cl.Changes))
		for _, ch := range cl.Changes {
			changes = append(changes, &pb.ChangelogChange{
				Type:        ch.Type,
				Description: ch.Description,
			})
		}
		out = append(out, &pb.Changelog{
			Version: cl.Version,
			Date:    cl.Date,
			Changes: changes,
		})
	}
	return out
}

func toPBFaqs(in []model.Faq) []*pb.Faq {
	out := make([]*pb.Faq, 0, len(in))
	for _, f := range in {
		out = append(out, &pb.Faq{
			Question: f.Question,
			Answer:   f.Answer,
			Size:     f.Size,
			Category: f.Category,
		})
	}
	return out
}

func toPBStrongPoints(in []model.StrongPoint) []*pb.StrongPoint {
	out := make([]*pb.StrongPoint, 0, len(in))
	for _, s := range in {
		out = append(out, &pb.StrongPoint{
			Size:     s.Size,
			Question: s.Question,
			Answer:   s.Answer,
		})
	}
	return out
}

// =============================================================================
// RPC 実装。各メソッドは REST の同名ハンドラと 1:1 対応します。
// 第 1 引数の context.Context は、gRPC ではキャンセル/タイムアウト/メタデータ
// (HTTP ヘッダ相当)を運ぶ標準の器です。
// =============================================================================

func (s *Server) HealthCheck(_ context.Context, _ *pb.HealthCheckRequest) (*pb.HealthCheckResponse, error) {
	return &pb.HealthCheckResponse{
		Status:    "OK",
		Timestamp: time.Now().UTC().Format(time.RFC3339Nano),
	}, nil
}

func (s *Server) GetProfile(_ context.Context, req *pb.GetProfileRequest) (*pb.GetProfileResponse, error) {
	p := data.ProfileJA
	if isEN(req.GetLang()) {
		p = data.ProfileEN
	}
	return &pb.GetProfileResponse{
		Message: "Profile data fetched successfully",
		Data:    toPBProfile(p),
	}, nil
}

func (s *Server) GetExperience(_ context.Context, req *pb.GetExperienceRequest) (*pb.GetExperienceResponse, error) {
	src := data.WorkExperiencesJA
	if isEN(req.GetLang()) {
		src = data.WorkExperiencesEN
	}
	return &pb.GetExperienceResponse{
		Message: "Experience data fetched successfully",
		Data:    toPBExperiences(src),
	}, nil
}

func (s *Server) GetProjects(_ context.Context, req *pb.GetProjectsRequest) (*pb.GetProjectsResponse, error) {
	src := data.ProjectsJA
	if isEN(req.GetLang()) {
		src = data.ProjectsEN
	}
	return &pb.GetProjectsResponse{
		Message: "Projects data fetched successfully",
		Data:    toPBProjects(src),
	}, nil
}

func (s *Server) GetSkills(_ context.Context, _ *pb.GetSkillsRequest) (*pb.GetSkillsResponse, error) {
	return &pb.GetSkillsResponse{
		Message: "Skills data fetched successfully",
		Data:    toPBSkills(data.Skills),
	}, nil
}

func (s *Server) GetOtherSkills(_ context.Context, _ *pb.GetOtherSkillsRequest) (*pb.GetOtherSkillsResponse, error) {
	return &pb.GetOtherSkillsResponse{
		Message: "Other skills data fetched successfully",
		Data:    toPBSkills(data.OtherSkills),
	}, nil
}

func (s *Server) GetEducation(_ context.Context, req *pb.GetEducationRequest) (*pb.GetEducationResponse, error) {
	src := data.EducationJA
	if isEN(req.GetLang()) {
		src = data.EducationEN
	}
	return &pb.GetEducationResponse{
		Message: "Education data fetched successfully",
		Data:    toPBEducation(src),
	}, nil
}

func (s *Server) GetContact(_ context.Context, _ *pb.GetContactRequest) (*pb.GetContactResponse, error) {
	return &pb.GetContactResponse{
		Message: "Contact data fetched successfully",
		Data:    toPBContact(data.ContactData),
	}, nil
}

func (s *Server) GetCertifications(_ context.Context, req *pb.GetCertificationsRequest) (*pb.GetCertificationsResponse, error) {
	src := data.CertificationsJA
	if isEN(req.GetLang()) {
		src = data.CertificationsEN
	}
	return &pb.GetCertificationsResponse{
		Message: "Certifications data fetched successfully",
		Data:    toPBCertifications(src),
	}, nil
}

func (s *Server) GetChangelogs(_ context.Context, req *pb.GetChangelogsRequest) (*pb.GetChangelogsResponse, error) {
	src := data.ChangelogsJA
	if isEN(req.GetLang()) {
		src = data.ChangelogsEN
	}
	return &pb.GetChangelogsResponse{
		Message: "Changelogs data fetched successfully",
		Data:    toPBChangelogs(src),
	}, nil
}

func (s *Server) GetFaqs(_ context.Context, req *pb.GetFaqsRequest) (*pb.GetFaqsResponse, error) {
	src := data.FaqsJA
	if isEN(req.GetLang()) {
		src = data.FaqsEN
	}
	return &pb.GetFaqsResponse{
		Message: "FAQs data fetched successfully",
		Data:    toPBFaqs(src),
	}, nil
}

func (s *Server) GetLinks(_ context.Context, _ *pb.GetLinksRequest) (*pb.GetLinksResponse, error) {
	return &pb.GetLinksResponse{
		Message: "Links data fetched successfully",
		Data: &pb.Links{
			CreadlyLink:                 data.LinksData.CreadlyLink,
			RestaurantAroundStationLink: data.LinksData.RestaurantAroundStationLink,
			AdvancedSearchYoutubeLink:   data.LinksData.AdvancedSearchYoutubeLink,
		},
	}, nil
}

func (s *Server) GetStrongPoints(_ context.Context, req *pb.GetStrongPointsRequest) (*pb.GetStrongPointsResponse, error) {
	src := data.StrongPointsJA
	if isEN(req.GetLang()) {
		src = data.StrongPointsEN
	}
	return &pb.GetStrongPointsResponse{
		Message: "Strong points data fetched successfully",
		Data:    toPBStrongPoints(src),
	}, nil
}

func (s *Server) DownloadPortfolioPDF(_ context.Context, req *pb.DownloadPortfolioPDFRequest) (*pb.DownloadPortfolioPDFResponse, error) {
	lang := req.GetLang()
	if lang == "" {
		lang = "en"
	}
	format := req.GetFormat()
	if format == "" {
		format = "standard"
	}

	pdfBytes, err := service.GeneratePortfolioPDF(service.PDFOptions{
		Lang:                  lang,
		Format:                format,
		IncludeProjects:       req.GetIncludeProjects(),
		IncludeExperience:     req.GetIncludeExperience(),
		IncludeCertifications: req.GetIncludeCertifications(),
		IncludeEducation:      req.GetIncludeEducation(),
	})
	if err != nil {
		// gRPC ではエラーは status コードで返すのが作法。
		// ここは呼び出し側にそのまま透過させる(main 側の interceptor でも良い)。
		return nil, err
	}

	langLabel := "english"
	if lang != "en" {
		langLabel = "japanese"
	}
	filename := "portfolio_" + langLabel + "_" + time.Now().Format("2006-01-02") + ".pdf"

	return &pb.DownloadPortfolioPDFResponse{
		Pdf:         pdfBytes,
		Filename:    filename,
		ContentType: "application/pdf",
	}, nil
}
