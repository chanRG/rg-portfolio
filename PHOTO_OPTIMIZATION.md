# Photo Optimization for Vercel Deployment

## Problem
The gallery was exceeding Vercel's 250 MB serverless function limit because:
1. Runtime file system scanning (`fs.readdirSync`) forced Next.js to include all photos in the function bundle
2. 290 MB of photos in `public/photos/` were being bundled into the serverless function

## Solution

### 1. Build-time Photo Discovery
- Photos are now scanned at **build time** using `scripts/generate-photos-list.js`
- Generates `app/gallery/photos-list.json` with all photo metadata
- Gallery page imports this JSON instead of scanning the filesystem at runtime
- Photos stay in `public/` and are served via CDN, not bundled in the function

### 2. Exclusion from Function Bundle
- Added `public/photos/**` to `outputFileTracingExcludes` in `next.config.ts`
- This prevents Next.js from including photos in the serverless function

### 3. Optional Image Compression
To further reduce size, compress images before deployment:

```bash
COMPRESS_IMAGES=true npm run build
```

This will:
- Resize images larger than 2400px width (maintains aspect ratio)
- Apply 85% JPEG quality with mozjpeg optimization
- Preserve original filenames

## Quality Maintained
- **2400px width** provides excellent quality for 4K displays
- **85% JPEG quality** is virtually indistinguishable from original
- Images under 2400px are not modified
- Photos are still served at full quality via CDN

## Usage

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
# Standard build (no compression)
npm run build

# With image compression
COMPRESS_IMAGES=true npm run build
```

### Adding New Photos
1. Drop new photos into `public/photos/`
2. Run `npm run build` - photos are automatically discovered
3. Deploy

## File Structure
```
public/photos/          # Your photos (served via CDN)
  ├── oman/
  ├── lofoten/
  └── ...
scripts/
  └── generate-photos-list.js    # Build-time photo scanner
app/gallery/
  ├── photos-list.json           # Generated photo index
  └── page.tsx                   # Gallery page (static)
```

## Benefits
✅ No serverless function size issues  
✅ Photos served directly from CDN (faster)  
✅ No runtime filesystem operations  
✅ Optional compression maintains great quality  
✅ Automatic photo discovery at build time  
