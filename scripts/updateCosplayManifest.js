const fs = require('fs');
const path = require('path');

// Cấu hình
const cosplayFolder = path.resolve(__dirname, '../assets/images/cosplay');
const manifestPath = path.resolve(cosplayFolder, 'manifest.json');
const relativePath = '../assets/images/cosplay/';

// Hàm kiểm tra xem file có tồn tại không
function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// Hàm tạo manifest
function generateManifest() {
  console.log('Đang quét hình ảnh cosplay...');
  
  const images = [];
  
  // Kiểm tra các file cosplay đánh số
  for (let i = 1; i <= 900; i++) { // Điều chỉnh giới hạn trên nếu cần
    const filename = `cosplay-${i}.webp`;
    const fullPath = path.join(cosplayFolder, filename);
    
    if (fileExists(fullPath)) {
      // Lưu đường dẫn tương đối như được sử dụng trong website
      images.push(`${relativePath}${filename}`);
    }
  }
  
  // Sắp xếp hình ảnh theo thứ tự giảm dần (mới nhất trước)
  images.sort((a, b) => {
    const getNumber = (path) => {
      const match = path.match(/cosplay-(\d+)\.webp/i);
      return match ? parseInt(match[1], 10) : 0;
    };
    
    return getNumber(b) - getNumber(a);
  });
  
  // Tạo đối tượng manifest
  const manifest = {
    lastUpdated: new Date().toISOString(),
    totalCount: images.length,
    images: images
  };
  
  // Ghi file manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`Manifest đã được cập nhật với ${images.length} hình ảnh.`);
  console.log(`Manifest đã được lưu tại: ${manifestPath}`);
}

// Chạy script
try {
  generateManifest();
} catch (error) {
  console.error('Lỗi khi tạo manifest:', error);
}