const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to your memes folder
const memesFolder = path.join(__dirname, '..', 'assets/images/meme');
const cosplayFolder = path.join(__dirname, '..', 'assets/images/cosplay');
const image2DFolder = path.join(__dirname, '..', 'assets/images/2D');
const imageEcchiFolder = path.join(__dirname, '..', 'assets/images/2D-ecchi');
const imageCommicFolder = path.join(__dirname, '..', 'assets/images/comics');
const cosplay2DFolder = path.join(__dirname, '..', 'assets/images/cosplay-2D');
const outputFolder = memesFolder; // Save in the same folder
const outputFolderCosplay = cosplayFolder; // Save in the same folder
const outputFolderImage2D = image2DFolder; // Save in the same folder
const outputFolderEcchi2D = imageEcchiFolder; // Save in the same folder
const outputFolderComic = imageCommicFolder; // Save in the same folder
const outputFolderCosplay2D = cosplay2DFolder; // Save in the same folder

console.log(`Looking for JPG files in: ${memesFolder}`);
console.log(`Looking for JPG files in: ${cosplayFolder}`);
console.log(`Looking for JPG files in: ${image2DFolder}`);
console.log(`Looking for JPG files in: ${imageEcchiFolder}`);
console.log(`Looking for JPG files in: ${imageCommicFolder}`);
console.log(`Looking for JPG files in: ${cosplay2DFolder}`);

// Get all jpg files in Meme folder
const jpgFiles = fs.readdirSync(memesFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgFiles.length} JPG files to convert`);

if (jpgFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the meme folder.');
} else {
  // Convert each file
  jpgFiles.forEach(file => {
    const inputPath = path.join(memesFolder, file);
    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}

// Get all jpg files in cosplay-2D folder
const jpgCosplay2DFiles = fs.readdirSync(cosplay2DFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgFiles.length} JPG files to convert`);

if (jpgCosplay2DFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the meme folder.');
} else {
  // Convert each file
  jpgCosplay2DFiles.forEach(file => {
    const inputPath = path.join(cosplay2DFolder, file);
    const outputPath = path.join(outputFolderCosplay2D, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}

// Get all jpg files in Comics folder
const jpgComicFiles = fs.readdirSync(imageCommicFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgComicFiles.length} JPG files to convert`);

if (jpgComicFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the meme folder.');
} else {
  // Convert each file
  jpgComicFiles.forEach(file => {
    const inputPath = path.join(imageCommicFolder, file);
    const outputPath = path.join(outputFolderComic, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}

// Get all jpg files in Cosplay folder
const jpgCosplayFiles = fs.readdirSync(cosplayFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgCosplayFiles.length} JPG files to convert`);

if (jpgCosplayFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the cosplay folder.');
} else {
  // Convert each file
  jpgCosplayFiles.forEach(file => {
    const inputPath = path.join(cosplayFolder, file);
    const outputPath = path.join(outputFolderCosplay, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}

// Get all jpg files in 2D Ecchi folder
const jpgEcchiFiles = fs.readdirSync(imageEcchiFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpgEcchiFiles.length} JPG files to convert`);

if (jpgEcchiFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the cosplay folder.');
} else {
  // Convert each file
  jpgEcchiFiles.forEach(file => {
    const inputPath = path.join(imageEcchiFolder, file);
    const outputPath = path.join(outputFolderEcchi2D, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}

// Get all jpg files in 2D folder
const jpg2DFiles = fs.readdirSync(image2DFolder).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${jpg2DFiles.length} JPG files to convert`);

if (jpg2DFiles.length === 0) {
  console.log('No JPG files found. Please add some JPG files to the 2D folder.');
} else {
  // Convert each file
  jpg2DFiles.forEach(file => {
    const inputPath = path.join(image2DFolder, file);
    const outputPath = path.join(outputFolderImage2D, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
}