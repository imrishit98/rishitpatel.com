import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';

async function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), 'src/db/old-blog-posts', slug);

  try {
    const fullPath = path.join(postsDirectory, 'post.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const post = JSON.parse(fileContents);

    // Clean up content blocks
    post.content = post.content
      .map(block => {
        if (block.type === 'paragraph') {
          // Clean up content
          const content = block.content
            .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
            .trim();

          // Check if content contains HTML
          const hasHtml = /<[^>]*>/g.test(content);
          if (hasHtml) {
            return { type: 'html', content };
          }

          return content ? { type: 'paragraph', content } : null;
        }
        return block;
      })
      .filter(Boolean); // Remove null blocks

    // Combine consecutive paragraphs
    const cleanedContent = [];
    let currentParagraph = '';

    post.content.forEach(block => {
      if (block.type === 'paragraph') {
        currentParagraph += (currentParagraph ? ' ' : '') + block.content;
      } else {
        if (currentParagraph) {
          cleanedContent.push({ type: 'paragraph', content: currentParagraph });
          currentParagraph = '';
        }
        cleanedContent.push(block);
      }
    });

    if (currentParagraph) {
      cleanedContent.push({ type: 'paragraph', content: currentParagraph });
    }

    post.content = cleanedContent;
    return post;
  } catch (err) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: [post.author],
    },
  };
}

const ContentBlock = ({ block, slug }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className='my-4 leading-relaxed text-gray-800'>{block.content}</p>;

    case 'image':
      const imgSrc = block.src.startsWith('http')
        ? block.src
        : `/old-blog-posts/${slug}/${block.src.toLowerCase()}`;

      return (
        <div className='my-6'>
          <Image
            src={imgSrc}
            alt={block.alt || ''}
            width={block.width || 800}
            height={block.height || 600}
            className='rounded-lg mx-auto'
            priority={block.priority}
          />
          {block.alt && (
            <p className='text-sm text-center text-gray-600 mt-2'>{block.alt}</p>
          )}
        </div>
      );

    case 'heading':
      return (
        <h2 className='text-2xl font-bold mt-8 mb-4 text-gray-900'>{block.content}</h2>
      );

    case 'list':
      return (
        <ul className='list-disc pl-6 my-4 space-y-2'>
          {block.items.map((item, index) => (
            <li
              key={index}
              className='text-gray-800'>
              {item}
            </li>
          ))}
        </ul>
      );

    case 'link':
      const isExternal = block.href.startsWith('http');
      return (
        <Link
          href={block.href}
          className='text-blue-600 hover:text-blue-800 underline'
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}>
          {block.content}
        </Link>
      );

    case 'html':
      return <div dangerouslySetInnerHTML={{ __html: block.content }} />;

    case 'code':
      return (
        <pre className='my-4 p-4 bg-gray-900 text-orange-400 font-bold rounded-lg overflow-x-auto'>
          <code className={`language-${block.language || 'text'}`}>{block.content}</code>
        </pre>
      );

    case 'section':
      return (
        <section className='my-8'>
          <h2 className='text-2xl font-bold mb-4 text-gray-900'>{block.title}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {Object.entries(block.data).map(([key, value]) => (
              <div
                key={key}
                className='flex justify-between p-3 bg-gray-50 rounded'>
                <span className='font-medium text-gray-700'>{key}</span>
                <span className='text-gray-600'>{value}</span>
              </div>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className='max-w-4xl mx-auto px-4 py-8'>
      <header className='mb-8 text-center'>
        <h1 className='text-4xl font-bold mb-4 text-gray-900'>{post.title}</h1>
        <div className='text-gray-600 mb-4'>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.dateModified && (
            <span className='ml-4'>
              (Updated:{' '}
              {new Date(post.dateModified).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              )
            </span>
          )}
        </div>
        {post.tags && (
          <div className='flex gap-2 justify-center flex-wrap'>
            {post.tags.map(tag => (
              <span
                key={tag}
                className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.featureImage && (
        <div className='mb-12'>
          <Image
            src={`/old-blog-posts/${slug}/${post.featureImage.toLowerCase()}`}
            alt={post.title}
            width={1200}
            height={630}
            className='rounded-lg mx-auto'
            priority
          />
        </div>
      )}

      <div className='prose prose-lg prose-blue max-w-none'>
        {post.content.map((block, index) => (
          <ContentBlock
            key={index}
            block={block}
            slug={slug}
          />
        ))}
      </div>
    </article>
  );
}
