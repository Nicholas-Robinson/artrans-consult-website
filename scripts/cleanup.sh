#!/usr/bin/env bash
set -e

# Move top-level static assets into public/ (idomatic Astro layout)
mkdir -p public/css public/js public/images

if [ -d "css" ]; then
  echo "Moving css/ -> public/css/"
  mv css/* public/css/ 2>/dev/null || true
fi

if [ -d "js" ]; then
  echo "Moving js/ -> public/js/"
  mv js/* public/js/ 2>/dev/null || true
fi

if [ -d "images" ]; then
  echo "Moving images/ -> public/images/"
  mv images/* public/images/ 2>/dev/null || true
fi

# Attempt to remove now-empty legacy directories (will only remove if empty)
rmdir css 2>/dev/null || true
rmdir js 2>/dev/null || true
rmdir images 2>/dev/null || true

# Remove old compiled cache if present
if [ -d ".astro" ]; then
  echo "Removing .astro cache"
  rm -rf .astro
fi

# Remove legacy top-level HTML pages that are now handled by Astro routes
LEGACY_HTML=(index.html about.html contact.html projects.html profile.html insights.html services.html coming-soon.html 7f39a.html)
for f in "${LEGACY_HTML[@]}"; do
  if [ -f "$f" ]; then
    echo "Removing legacy file: $f"
    rm -f "$f"
  fi
done

# Remove leftover legacy public component folder and top-level images placeholder
if [ -d "public/js/components" ]; then
  echo "Removing legacy public/js/components/"
  rm -rf public/js/components
fi

if [ -f "images/.keep" ]; then
  echo "Removing top-level images/.keep"
  rm -f images/.keep
fi

# Remove top-level images directory if empty
rmdir images 2>/dev/null || true

# Done
echo "Cleanup complete. Static assets are in public/. Legacy HTML files removed. You can now run 'npm run build' or 'npm run dev'."
