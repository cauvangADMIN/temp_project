const fs = require('fs');
const path = require('path');

// Configuration
const memeFolder = path.resolve(__dirname, '../assets/images/meme');
const manifestPath = path.resolve(memeFolder, 'manifest.json');
const relativePath = '../assets/images/meme/';

// Function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// Function to generate the manifest
function generateManifest() {
  console.log('Scanning for meme images...');
  
  const images = [];
  
  // Check for numbered meme files
  for (let i = 1; i <= 600; i++) { // Adjust the upper limit as needed
    const filename = `meme${i}.webp`;
    const fullPath = path.join(memeFolder, filename);
    
    if (fileExists(fullPath)) {
      // Store the relative path as used in the website
      images.push(`${relativePath}${filename}`);
    }
  }
  
  // Sort images in descending order (newest first)
  images.sort((a, b) => {
    const getNumber = (path) => {
      const match = path.match(/meme(\d+)\.webp/i);
      return match ? parseInt(match[1], 10) : 0;
    };
    
    return getNumber(b) - getNumber(a);
  });
  
  // Create the manifest object
  const manifest = {
    lastUpdated: new Date().toISOString(),
    totalCount: images.length,
    images: images
  };
  
  // Write the manifest file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`Manifest updated with ${images.length} images.`);
  console.log(`Manifest saved to: ${manifestPath}`);
}

// Run the script
try {
  generateManifest();
} catch (error) {
  console.error('Error generating manifest:', error);
}