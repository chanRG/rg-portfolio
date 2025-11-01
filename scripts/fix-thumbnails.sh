#!/bin/bash

# Script to regenerate thumbnails with proper EXIF orientation
# This will auto-rotate images based on their EXIF data

PHOTOS_DIR="public/photos"

# Find all JPG/jpg files (not thumbnails)
find "$PHOTOS_DIR" -type f \( -iname "*.JPG" -o -iname "*.jpg" \) ! -name "*-thumb.jpg" | while read -r img; do
    # Get the directory and filename
    dir=$(dirname "$img")
    filename=$(basename "$img")
    name="${filename%.*}"
    ext="${filename##*.}"
    
    # Create thumbnail path
    thumb="$dir/${name}-thumb.jpg"
    
    # Check if thumbnail already exists
    if [ -f "$thumb" ]; then
        echo "Regenerating: $thumb"
        
        # Use ImageMagick to create thumbnail with auto-orient
        # -auto-orient: automatically rotate based on EXIF orientation
        # -thumbnail 400x400^: resize to fit within 400x400, maintaining aspect ratio
        # -quality 85: good quality for web
        convert "$img" -auto-orient -thumbnail 400x400^ -quality 85 "$thumb"
        
        if [ $? -eq 0 ]; then
            echo "✓ Fixed: $thumb"
        else
            echo "✗ Failed: $thumb"
        fi
    fi
done

echo ""
echo "Done! All thumbnails have been regenerated with proper orientation."

