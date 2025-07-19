# API Testing Guide

This guide provides comprehensive testing instructions for the Portfolio API across different deployment environments.

## 🔧 Prerequisites

### Install Testing Tools
```bash
# Install Newman (Postman CLI) globally
npm install -g newman

# Verify installation
newman --version
```

## 🚀 Deployment Environments

### Production URLs
- **Vercel**: `https://portfolio-api-ten-delta.vercel.app`
- **AWS Lambda**: ~~`https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev`~~ (Skipped for now)

## 🧪 Testing Methods

### 1. Manual GitHub Actions Testing
```bash
# Navigate to your GitHub repository
# Go to: Actions → API Endpoint Tests → Run workflow
# Click "Run workflow" button to trigger manual test
```

### 2. Extract and Run Postman Collection

#### Extract Collection from Workflow
```javascript
// Create test-extract.js
const fs = require('fs');

const workflowContent = fs.readFileSync('.github/workflows/api-tests.yml', 'utf8');
const startMarker = "cat > portfolio-api-tests.json << 'EOL'";
const endMarker = 'EOL';

const startIndex = workflowContent.indexOf(startMarker) + startMarker.length;
const endIndex = workflowContent.indexOf(endMarker, startIndex);
const collectionJson = workflowContent.substring(startIndex, endIndex).trim();

fs.writeFileSync('portfolio-api-tests.json', collectionJson);
console.log('✅ Postman collection extracted successfully');
```

```bash
# Run extraction
node test-extract.js
```

#### Test Against Vercel Deployment
```bash
# Test all endpoints on Vercel
newman run portfolio-api-tests.json --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app"

# Test with detailed output
newman run portfolio-api-tests.json \
  --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app" \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export test-report-vercel.html

# Test with JSON output for CI/CD
newman run portfolio-api-tests.json \
  --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app" \
  --reporters cli,json \
  --reporter-json-export test-results-vercel.json
```

#### Test Against AWS Lambda Deployment (Skipped)
```bash
# AWS testing temporarily disabled
# newman run portfolio-api-tests.json --env-var "baseUrl=https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev"
```

### 3. Individual Endpoint Testing

#### Health Check
```bash
# Vercel
curl -X GET "https://portfolio-api-ten-delta.vercel.app/health"

# PowerShell (Windows)
Invoke-WebRequest -Uri "https://portfolio-api-ten-delta.vercel.app/health" | Select-Object -ExpandProperty Content
```

#### Profile Endpoint
```bash
# Test default (Japanese)
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/profile"

# Test English version
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/profile?lang=en"

# PowerShell
Invoke-WebRequest -Uri "https://portfolio-api-ten-delta.vercel.app/api/profile" | Select-Object -ExpandProperty Content
Invoke-WebRequest -Uri "https://portfolio-api-ten-delta.vercel.app/api/profile?lang=en" | Select-Object -ExpandProperty Content
```

#### All API Endpoints
```bash
# Core endpoints
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/skills"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/projects"  
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/experience"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/education"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/certifications"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/faqs"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/links"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/strong-points"
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/changelogs"

# PDF download endpoint
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/download-pdf" -o portfolio.pdf
curl -X GET "https://portfolio-api-ten-delta.vercel.app/api/download-pdf?lang=en&format=compact" -o portfolio-en-compact.pdf
```

### 4. Automated Testing Scripts

#### Quick Test Script
```bash
# Create quick-test.sh (Linux/Mac) or quick-test.ps1 (Windows)

# PowerShell version (quick-test.ps1)
$baseUrls = @(
    "https://portfolio-api-ten-delta.vercel.app",
    "https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev"
)

$endpoints = @("/health", "/", "/api/profile", "/api/skills", "/api/projects")

foreach ($baseUrl in $baseUrls) {
    Write-Host "Testing $baseUrl" -ForegroundColor Green
    foreach ($endpoint in $endpoints) {
        try {
            $response = Invoke-WebRequest -Uri "$baseUrl$endpoint" -ErrorAction Stop
            Write-Host "  ✅ $endpoint - Status: $($response.StatusCode)" -ForegroundColor Green
        }
        catch {
            Write-Host "  ❌ $endpoint - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    Write-Host ""
}
```

#### Performance Testing
```bash
# Using Apache Bench (if available)
ab -n 100 -c 10 https://portfolio-api-ten-delta.vercel.app/health

# Using curl for response time
curl -w "@curl-format.txt" -o /dev/null -s "https://portfolio-api-ten-delta.vercel.app/api/profile"

# Create curl-format.txt:
#      time_namelookup:  %{time_namelookup}\n
#         time_connect:  %{time_connect}\n
#      time_appconnect:  %{time_appconnect}\n
#     time_pretransfer:  %{time_pretransfer}\n
#        time_redirect:  %{time_redirect}\n
#   time_starttransfer:  %{time_starttransfer}\n
#                      ----------\n
#           time_total:  %{time_total}\n
```

### 5. Continuous Integration Testing

#### GitHub Actions Manual Trigger
```yaml
# In your GitHub repository:
# 1. Go to Actions tab
# 2. Select "API Endpoint Tests" workflow  
# 3. Click "Run workflow"
# 4. Select branch (usually main)
# 5. Click "Run workflow" button
```

#### Local CI Simulation
```bash
# Simulate the exact GitHub Actions test
newman run portfolio-api-tests.json \
  --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app" \
  --reporters cli,json \
  --reporter-json-export test-results.json

# Check results using jq (if available)
echo "Total Tests: $(jq '.run.stats.tests // 0' test-results.json)"
echo "Failed Tests: $(jq '.run.stats.failures // 0' test-results.json)"  
echo "Passed Tests: $(jq '(.run.stats.tests // 0) - (.run.stats.failures // 0)' test-results.json)"
```

## 📊 Test Results Analysis

### Expected Test Results
- **Total Tests**: ~36 assertions across 12 endpoints
- **Expected Failures**: 0 (after profile fix deployment)
- **Response Time**: < 500ms per endpoint
- **Success Rate**: 100%

### Common Issues & Solutions

#### 1. Profile Test Failure
```
Error: expected response to have property 'name'
Solution: Deploy updated profile controller (fixed in latest code)
```

#### 2. Connection Timeouts
```
Error: connect ECONNREFUSED or timeout
Solution: Check deployment status, wait for cold start
```

#### 3. jq Command Errors  
```
Error: object and null cannot be subtracted
Solution: Fixed with null coalescing in GitHub Actions workflow
```

## 🔍 Debugging

### Verbose Newman Output
```bash
# Maximum verbosity
newman run portfolio-api-tests.json \
  --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app" \
  --verbose

# Debug SSL issues
newman run portfolio-api-tests.json \
  --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app" \
  --insecure
```

### Network Debugging
```bash
# Check DNS resolution
nslookup portfolio-api-ten-delta.vercel.app

# Check connectivity
ping portfolio-api-ten-delta.vercel.app

# Check HTTP headers
curl -I https://portfolio-api-ten-delta.vercel.app/health
```

## 📝 Cleanup Commands

```bash
# Remove generated test files
rm portfolio-api-tests.json
rm test-results*.json  
rm test-report*.html
rm test-extract.js
rm quick-test.ps1
```

---

## 🎯 Quick Start

For immediate testing, run these commands:

```bash
# 1. Install newman
npm install -g newman

# 2. Test Vercel deployment  
newman run portfolio-api-tests.json --env-var "baseUrl=https://portfolio-api-ten-delta.vercel.app"

# 3. Test AWS deployment (skipped for now)
# newman run portfolio-api-tests.json --env-var "baseUrl=https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev"
```

That's it! Your API testing is now fully automated and documented. 🚀
