# Portfolio API Quick Test Script
Write-Host "Portfolio API Testing Suite" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

$deployments = @(
    "https://portfolio-api-ten-delta.vercel.app"
)

$endpoints = @("/health", "/api/profile", "/api/skills", "/api/projects")

$totalTests = 0
$passedTests = 0

foreach ($baseUrl in $deployments) {
    Write-Host "`nTesting: $baseUrl" -ForegroundColor Green
    Write-Host "----------------------------------------" -ForegroundColor Gray
    
    foreach ($endpoint in $endpoints) {
        $totalTests++
        $fullUrl = "$baseUrl$endpoint"
        
        try {
            $response = Invoke-WebRequest -Uri $fullUrl -ErrorAction Stop -TimeoutSec 10
            Write-Host "  ✅ $endpoint - Status: $($response.StatusCode)" -ForegroundColor Green
            $passedTests++
        } catch {
            Write-Host "  ❌ $endpoint - Failed" -ForegroundColor Red
        }
    }
}

Write-Host "`nResults: $passedTests/$totalTests passed" -ForegroundColor Yellow

if ($passedTests -eq $totalTests) {
    Write-Host "All tests passed! API is healthy." -ForegroundColor Green
} else {
    Write-Host "Some tests failed. Check deployment status." -ForegroundColor Yellow
}
