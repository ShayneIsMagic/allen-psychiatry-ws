const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

// Image optimization settings
const settings = {
  jpeg: {
    quality: 80,
    mozjpeg: true
  },
  webp: {
    quality: 80
  },
  avif: {
    quality: 75
  }
};

// Images to optimize with their specific settings
const imagesToOptimize = [
  // Critical - Hero images (larger, higher quality)
  { file: 'index-hero.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'adhd2.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'Provo Utah.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'Rural Sevier County Sunset.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'ptsd.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'telehealth snowy-winter-landscape.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  
  // Service images (medium quality)
  { file: 'anxiety2.jpg', jpegQuality: 85, webpQuality: 85, avifQuality: 80 },
  { file: 'depression.jpg', jpegQuality: 85, webpQuality: 85, avifQuality: 80 },
  { file: 'anxiety.jpg', jpegQuality: 85, webpQuality: 85, avifQuality: 80 },
  
  // Office photos
  { file: 'Provo Office 1.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'Provo Office 2.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'Provo Office 3.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  
  // Doctor photos
  { file: 'Dr Todd Allen.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'todd-allen.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  
  // Other images
  { file: 'adhd.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'shutterstock_1853535748.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'shutterstock_2265984319.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
  { file: 'Downtown_Provo.jpg', jpegQuality: 80, webpQuality: 80, avifQuality: 75 },
];

// PNG images to optimize
const pngImages = [
  { file: 'ap-new-color-logo.png', jpegQuality: 90, webpQuality: 90, avifQuality: 85 },
  { file: 'AP_logo_color.png', jpegQuality: 90, webpQuality: 90, avifQuality: 85 },
  { file: 'Allen P Logo.jpg', jpegQuality: 90, webpQuality: 90, avifQuality: 85 },
];

async function getFileSize(filePath) {
  try {
    const stats = await fs.promises.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(imageConfig) {
  const inputPath = path.join(assetsDir, imageConfig.file);
  const baseName = path.parse(imageConfig.file).name;
  const ext = path.parse(imageConfig.file).ext.toLowerCase();
  
  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${imageConfig.file} - file not found`);
    return null;
  }
  
  const originalSize = await getFileSize(inputPath);
  console.log(`\n📸 Processing: ${imageConfig.file} (${formatBytes(originalSize)})`);
  
  try {
    let image = sharp(inputPath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // 1. Optimize JPEG (if it's a JPEG)
    if (ext === '.jpg' || ext === '.jpeg') {
      const optimizedJpegPath = path.join(assetsDir, `${baseName}_optimized.jpg`);
      await image
        .jpeg({ 
          quality: imageConfig.jpegQuality || 80,
          mozjpeg: true 
        })
        .toFile(optimizedJpegPath);
      
      const optimizedSize = await getFileSize(optimizedJpegPath);
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`  ✅ JPEG optimized: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% reduction)`);
      
      // Replace original with optimized
      await fs.promises.rename(optimizedJpegPath, inputPath);
      image = sharp(inputPath);
    }
    
    // 2. Create WebP version
    const webpPath = path.join(assetsDir, `${baseName}.webp`);
    await image
      .webp({ quality: imageConfig.webpQuality || 80 })
      .toFile(webpPath);
    
    const webpSize = await getFileSize(webpPath);
    console.log(`  ✅ WebP created: ${formatBytes(webpSize)}`);
    
    // 3. Create AVIF version
    const avifPath = path.join(assetsDir, `${baseName}.avif`);
    await image
      .avif({ quality: imageConfig.avifQuality || 75 })
      .toFile(avifPath);
    
    const avifSize = await getFileSize(avifPath);
    console.log(`  ✅ AVIF created: ${formatBytes(avifSize)}`);
    
    return {
      original: originalSize,
      optimized: await getFileSize(inputPath),
      webp: webpSize,
      avif: avifSize
    };
    
  } catch (error) {
    console.error(`  ❌ Error processing ${imageConfig.file}:`, error.message);
    return null;
  }
}

async function optimizePng(imageConfig) {
  const inputPath = path.join(assetsDir, imageConfig.file);
  const baseName = path.parse(imageConfig.file).name;
  const ext = path.parse(imageConfig.file).ext.toLowerCase();
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${imageConfig.file} - file not found`);
    return null;
  }
  
  const originalSize = await getFileSize(inputPath);
  console.log(`\n📸 Processing PNG: ${imageConfig.file} (${formatBytes(originalSize)})`);
  
  try {
    let image = sharp(inputPath);
    
    // Optimize PNG
    if (ext === '.png') {
      const optimizedPngPath = path.join(assetsDir, `${baseName}_optimized.png`);
      await image
        .png({ 
          quality: imageConfig.jpegQuality || 90,
          compressionLevel: 9
        })
        .toFile(optimizedPngPath);
      
      const optimizedSize = await getFileSize(optimizedPngPath);
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`  ✅ PNG optimized: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% reduction)`);
      
      await fs.promises.rename(optimizedPngPath, inputPath);
      image = sharp(inputPath);
    }
    
    // Create WebP version
    const webpPath = path.join(assetsDir, `${baseName}.webp`);
    await image
      .webp({ quality: imageConfig.webpQuality || 90 })
      .toFile(webpPath);
    
    const webpSize = await getFileSize(webpPath);
    console.log(`  ✅ WebP created: ${formatBytes(webpSize)}`);
    
    // Create AVIF version
    const avifPath = path.join(assetsDir, `${baseName}.avif`);
    await image
      .avif({ quality: imageConfig.avifQuality || 85 })
      .toFile(avifPath);
    
    const avifSize = await getFileSize(avifPath);
    console.log(`  ✅ AVIF created: ${formatBytes(avifSize)}`);
    
    return {
      original: originalSize,
      optimized: await getFileSize(inputPath),
      webp: webpSize,
      avif: avifSize
    };
    
  } catch (error) {
    console.error(`  ❌ Error processing ${imageConfig.file}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('This will:');
  console.log('  1. Compress JPEG/PNG images');
  console.log('  2. Create WebP versions');
  console.log('  3. Create AVIF versions\n');
  
  const results = [];
  
  // Optimize JPEG images
  for (const image of imagesToOptimize) {
    const result = await optimizeImage(image);
    if (result) results.push(result);
  }
  
  // Optimize PNG images
  for (const image of pngImages) {
    const result = await optimizePng(image);
    if (result) results.push(result);
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  
  const totalOriginal = results.reduce((sum, r) => sum + r.original, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimized, 0);
  const totalWebp = results.reduce((sum, r) => sum + r.webp, 0);
  const totalAvif = results.reduce((sum, r) => sum + r.avif, 0);
  
  console.log(`\nOriginal total: ${formatBytes(totalOriginal)}`);
  console.log(`Optimized JPEG/PNG: ${formatBytes(totalOptimized)}`);
  console.log(`WebP total: ${formatBytes(totalWebp)}`);
  console.log(`AVIF total: ${formatBytes(totalAvif)}`);
  console.log(`\nSavings: ${formatBytes(totalOriginal - totalOptimized)} (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}% reduction)`);
  console.log(`\n✅ Optimization complete! ${results.length} images processed.`);
  console.log('\nNext step: Update HTML files with <picture> elements.');
}

main().catch(console.error);

