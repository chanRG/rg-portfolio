const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const photosDir = path.join(__dirname, '..', 'public', 'photos');
const outputJsonPath = path.join(__dirname, '..', 'app', 'gallery', 'photos-list.json');
const MAX_WIDTH = 2400; // Max width for high quality display
const THUMB_WIDTH = 400; // Thumbnail width for gallery dome
const QUALITY = 85; // JPEG quality
const THUMB_QUALITY = 80; // Thumbnail quality

async function generateThumbnail(imagePath) {
  try {
    const ext = path.extname(imagePath);
    const lowerExt = ext.toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(lowerExt)) {
      return null;
    }

    const dir = path.dirname(imagePath);
    const basename = path.basename(imagePath, ext);
    const thumbPath = path.join(dir, `${basename}-thumb.jpg`);
    
    // Skip if thumbnail already exists and is newer than original
    if (fs.existsSync(thumbPath)) {
      const origStat = fs.statSync(imagePath);
      const thumbStat = fs.statSync(thumbPath);
      if (thumbStat.mtime > origStat.mtime) {
        return thumbPath;
      }
    }

    await sharp(imagePath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(THUMB_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
      .toFile(thumbPath);
    
    return thumbPath;
  } catch (error) {
    console.error(`Error generating thumbnail for ${imagePath}:`, error.message);
    return null;
  }
}

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
      // Skip thumbnail files
      if (entry.name.includes('-thumb.')) continue;
      
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

  // Check if sharp is available
  let sharpEnabled = true;
  try {
    require.resolve('sharp');
  } catch (e) {
    console.warn('⚠️  sharp not installed, skipping image optimization');
    console.warn('   Run: npm install --save-dev sharp');
    sharpEnabled = false;
  }

  // Generate thumbnails
  if (sharpEnabled) {
    console.log('📸 Generating thumbnails...');
    let generated = 0;
    for (const photo of photos) {
      const thumbPath = await generateThumbnail(photo.path);
      if (thumbPath) {
        // Convert file path to URL path
        const relativePath = path.relative(path.join(__dirname, '..', 'public'), thumbPath);
        photo.thumbSrc = '/' + relativePath.split(path.sep).join('/');
        generated++;
      } else {
        // Fallback to original if thumbnail generation fails
        photo.thumbSrc = photo.src;
      }
    }
    console.log(`✅ Generated ${generated} thumbnails`);
  } else {
    // If sharp not available, use original images
    photos.forEach(photo => {
      photo.thumbSrc = photo.src;
    });
  }

  // Optionally compress original images
  if (sharpEnabled && process.env.COMPRESS_IMAGES === 'true') {
    console.log('🗜️  Compressing images...');
    let compressed = 0;
    for (const photo of photos) {
      if (await compressImage(photo.path)) {
        compressed++;
      }
    }
    console.log(`✅ Compressed ${compressed} images`);
  }

  // Prepare output JSON with thumbnail paths
  const outputList = photos.map(({ src, thumbSrc, alt }) => ({ src, thumbSrc, alt }));

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
