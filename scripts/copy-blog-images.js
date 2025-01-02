const fs = require('fs');
const path = require('path');

const oldBlogPostsDir = path.join(process.cwd(), 'src/db/old-blog-posts');
const publicImagesDir = path.join(process.cwd(), 'public/old-blog-posts');

// Create the public images directory if it doesn't exist
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Function to normalize filename (convert to lowercase)
function normalizeFilename(filename) {
  return filename.toLowerCase();
}

// Function to copy images from a directory
function copyImagesFromDir(dir) {
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      copyImagesFromDir(fullPath);
    } else if (/\.(png|jpg|jpeg|gif|webp)$/i.test(item)) {
      const relativePath = path.relative(oldBlogPostsDir, dir);
      const targetDir = path.join(publicImagesDir, relativePath);
      const normalizedFilename = normalizeFilename(item);

      // Create target directory if it doesn't exist
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Copy the image file with normalized filename
      fs.copyFileSync(fullPath, path.join(targetDir, normalizedFilename));
      console.log(`Copied: ${item} to ${relativePath} as ${normalizedFilename}`);
    }
  });
}

// Clean up the public images directory before copying
if (fs.existsSync(publicImagesDir)) {
  fs.rmSync(publicImagesDir, { recursive: true });
  console.log('Cleaned up existing public images directory');
}

// Create fresh public images directory
fs.mkdirSync(publicImagesDir, { recursive: true });

// Start copying images
copyImagesFromDir(oldBlogPostsDir);
console.log('All images copied successfully!');
