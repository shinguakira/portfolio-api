# Portfolio API Quick Test Script
# Tests core endpoints on deployed environments

Write-Host "Portfolio API Testing Suite" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Deployment URLs - Testing latest changes
$deployments = @(
    @{
        Name = "Vercel (Production)"
        BaseUrl = "https://portfolio-api-ten-delta.vercel.app"
        Note = "Testing after develop->main merge"
    }
    # Note: Create PR to test against preview deployment
)

$endpoints = @("/health", "/api/profile", "/api/skills", "/api/projects")

$totalTests = 0
$passedTests = 0

foreach ($deployment in $deployments) {
    Write-Host "`nTesting: $($deployment.Name)" -ForegroundColor Green
    Write-Host "URL: $($deployment.BaseUrl)" -ForegroundColor Gray
    Write-Host "----------------------------------------" -ForegroundColor Gray
    
    foreach ($endpoint in $endpoints) {
        $totalTests++
        $url = "$($deployment.BaseUrl)$endpoint"
        
        try {
            $response = Invoke-WebRequest -Uri $url -ErrorAction Stop -TimeoutSec 10
            Write-Host "  $endpoint - Status: $($response.StatusCode)" -ForegroundColor Green
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
