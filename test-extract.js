import fs from 'fs';

console.log('🔧 Extracting Postman collection from GitHub Actions workflow...');

try {
    const workflowContent = fs.readFileSync('.github/workflows/api-tests.yml', 'utf8');
    const startMarker = "cat > portfolio-api-tests.json << 'EOL'";
    const endMarker = 'EOL';

    const startIndex = workflowContent.indexOf(startMarker);
    if (startIndex === -1) {
        throw new Error('Start marker not found in workflow file');
    }

    const actualStart = startIndex + startMarker.length;
    const endIndex = workflowContent.indexOf(endMarker, actualStart);
    if (endIndex === -1) {
        throw new Error('End marker not found in workflow file');
    }

    const collectionJson = workflowContent.substring(actualStart, endIndex).trim();
    
    // Validate JSON
    JSON.parse(collectionJson);
    
    fs.writeFileSync('portfolio-api-tests.json', collectionJson);
    console.log('✅ Postman collection extracted successfully');
    console.log('📁 File saved: portfolio-api-tests.json');
    
    // Parse and display collection info
    const collection = JSON.parse(collectionJson);
    console.log(`📊 Collection: ${collection.info.name}`);
    console.log(`🧪 Total requests: ${collection.item ? collection.item.length : 0}`);
    
} catch (error) {
    console.error('❌ Error extracting collection:', error.message);
    process.exit(1);
}
