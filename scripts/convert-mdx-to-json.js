const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const OLD_POSTS_DIR = path.join(process.cwd(), 'src/db/old-blog-posts');

// Helper function to convert MDX content to JSON blocks
function convertMdxToBlocks(content) {
  const blocks = [];
  const lines = content.split('\n');
  let currentBlock = null;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Handle images
    if (line.startsWith('![')) {
      const altMatch = line.match(/!\[(.*?)\]/);
      const srcMatch = line.match(/\((.*?)\)/);
      if (srcMatch) {
        blocks.push({
          type: 'image',
          src: srcMatch[1],
          alt: altMatch ? altMatch[1] : '',
          width: 800,
          height: 600,
          priority: false,
        });
      }
      continue;
    }

    // Handle headings
    if (line.startsWith('#')) {
      const headingContent = line.replace(/^#+\s/, '');
      blocks.push({
        type: 'heading',
        content: headingContent,
      });
      continue;
    }

    // Handle links
    if (line.includes('[') && line.includes('](')) {
      const textMatch = line.match(/\[(.*?)\]/);
      const urlMatch = line.match(/\((.*?)\)/);
      if (textMatch && urlMatch) {
        blocks.push({
          type: 'link',
          href: urlMatch[1],
          content: textMatch[1],
        });
      }
      continue;
    }

    // Handle lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!currentBlock || currentBlock.type !== 'list') {
        currentBlock = {
          type: 'list',
          items: [],
        };
        blocks.push(currentBlock);
      }
      currentBlock.items.push(line.replace(/^[-*]\s/, ''));
      continue;
    }

    // Handle paragraphs
    if (currentBlock && currentBlock.type === 'list') {
      currentBlock = null;
    }
    blocks.push({
      type: 'paragraph',
      content: line,
    });
  }

  return blocks;
}

// Convert a single MDX file to JSON
function convertMdxFileToJson(dirPath) {
  const mdxPath = path.join(dirPath, 'index.mdx');
  const jsonPath = path.join(dirPath, 'post.json');

  if (!fs.existsSync(mdxPath)) {
    console.log(`No MDX file found in ${dirPath}`);
    return;
  }

  try {
    const mdxContent = fs.readFileSync(mdxPath, 'utf8');
    const { data: frontmatter, content } = matter(mdxContent);

    const jsonContent = {
      title: frontmatter.title || '',
      date: frontmatter.date
        ? new Date(frontmatter.date).toISOString()
        : new Date().toISOString(),
      dateModified: frontmatter.dateModified
        ? new Date(frontmatter.dateModified).toISOString()
        : null,
      author: frontmatter.author || 'Rishit Patel',
      description: frontmatter.description || '',
      tags: frontmatter.tags || [],
      featureImage: frontmatter.featureImage || null,
      content: convertMdxToBlocks(content),
    };

    fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
    console.log(`Converted ${mdxPath} to JSON`);

    // Optionally backup and remove the MDX file
    const backupPath = path.join(dirPath, 'index.mdx.bak');
    fs.renameSync(mdxPath, backupPath);
    console.log(`Backed up MDX file to ${backupPath}`);
  } catch (error) {
    console.error(`Error converting ${mdxPath}:`, error);
  }
}

// Process all directories
const dirs = fs.readdirSync(OLD_POSTS_DIR);
dirs.forEach(dir => {
  const dirPath = path.join(OLD_POSTS_DIR, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    console.log(`Processing ${dir}...`);
    convertMdxFileToJson(dirPath);
  }
});
