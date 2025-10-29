const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const photosDir = path.join(__dirname, '..', 'public', 'photos');
const outputJsonPath = path.join(__dirname, '..', 'app', 'gallery', 'photos-list.json');
const MAX_WIDTH = 2400; // Max width for high quality display
const QUALITY = 85; // JPEG quality

async function compressImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      return false;
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Only compress if larger than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      console.log(`Compressing ${imagePath} from ${metadata.width}px to ${MAX_WIDTH}px`);
      await image
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(imagePath.replace(ext, '.compressed' + ext));
      
      // Replace original with compressed
      fs.renameSync(imagePath.replace(ext, '.compressed' + ext), imagePath);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error compressing ${imagePath}:`, error.message);
    return false;
  }
}

async function getAllPhotos() {
  const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF']);
  const results = [];

  function walk(dir, baseUrl) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === '.DS_Store') continue;
      
      const abs = path.join(dir, entry.name);
      const url = path.posix.join(baseUrl, entry.name);
      
      if (entry.isDirectory()) {
        walk(abs, url);
      } else {
        const ext = path.extname(entry.name);
        if (allowed.has(ext)) {
          results.push({ 
            src: url, 
            alt: entry.name.replace(ext, ''),
            path: abs
          });
        }
      }
    }
  }

  if (fs.existsSync(photosDir)) {
    walk(photosDir, '/photos');
  }

  results.sort((a, b) => a.src.localeCompare(b.src));
  return results;
}

async function main() {
  console.log('🔍 Scanning photos directory...');
  const photos = await getAllPhotos();
  console.log(`✅ Found ${photos.length} photos`);

  // Check if sharp is available for compression
  let compressEnabled = true;
  try {
    require.resolve('sharp');
  } catch (e) {
    console.warn('⚠️  sharp not installed, skipping image compression');
    console.warn('   Run: npm install --save-dev sharp');
    compressEnabled = false;
  }

  // Optionally compress images
  if (compressEnabled && process.env.COMPRESS_IMAGES === 'False') {
    console.log('🗜️  Compressing images...');
    let compressed = 0;
    for (const photo of photos) {
      if (await compressImage(photo.path)) {
        compressed++;
      }
    }
    console.log(`✅ Compressed ${compressed} images`);
  }

  // Remove path from output JSON
  const outputList = photos.map(({ src, alt }) => ({ src, alt }));

  // Write photos list
  const outputDir = path.dirname(outputJsonPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputJsonPath, JSON.stringify(outputList, null, 2));
  console.log(`✅ Generated ${outputJsonPath}`);
  console.log(`📦 Total photos in gallery: ${outputList.length}`);
}

main().catch(console.error);
