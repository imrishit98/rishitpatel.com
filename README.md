# Rishit Patel's Default Next.js Starter

This is a starter template for Next.js projects. It's a simple, clean, and modern starter template that includes Tailwind CSS, shadcn/ui, and more. It's built with new app directory structure but it also includes the old pages directory structure for backwards compatibility. If you want to use only the old pages directory structure, then you can use the [rp-nextjs-starter-pages-dir](https://github.com/imrishit98/rp-nextjs-starter-pages-dir) starter template.

Popular Projects Built With This Starter Template:
- [aitools.fyi - Find the best ai tools!](https://aitools.fyi)
- [PDFPeer - Chat with any document!](https://pdfpeer.com)
- [Amazing Newsletters - Find the best newsletters!](https://amazingnewsletters.com)
- [revrn - Idea to revenue in days!](https://revrn.com)

## Getting Started

Table of Contents:
- [Rishit Patel's Default Next.js Starter](#rishit-patels-default-nextjs-starter)
  - [Getting Started](#getting-started)
  - [⚡️ Quick Start](#️-quick-start)
  - [🚀 Getting Started](#-getting-started)
  - [📦 Deployment](#-deployment)
  - [🔍 SEO](#-seo)
    - [robots.js](#robotsjs)
    - [sitemap.js](#sitemapjs)
  - [📝 License](#-license)
  - [📧 Contact](#-contact)
  - [📚 Resources](#-resources)


## ⚡️ Quick Start

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fimrishit98%2Frp-nextjs-starter) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimrishit98%2Frp-nextjs-starter)

How to use:

```bash
yarn create next-app -e https://github.com/imrishit98/rp-nextjs-starter
# or
npx create-next-app -e https://github.com/imrishit98/rp-nextjs-starter
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

If you want to use the old pages directory structure, then you can use the [rp-nextjs-starter-pages-dir](https://github.com/imrishit98/rp-nextjs-starter-pages-dir) starter template or just create pages directory manually and move the files to it.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔍 SEO

This starter template includes built-in SEO features to help improve your website's search engine visibility.

### robots.js

The `src/app/robots.js` file generates a robots.txt file for your website. It uses the `siteConfig` to set the host and sitemap URL. You can customize the rules to allow or disallow specific paths for web crawlers.

To modify the robots.txt settings:

1. Open `src/app/robots.js`
2. Adjust the `rules` array to add or modify crawler instructions
3. Update the `siteConfig` in `site-config.js` if needed

### sitemap.js

The `src/app/sitemap.js` file automatically generates a sitemap for your website based on the pages in your `src/app` directory. It helps search engines discover and index your pages more efficiently.

Key features:
- Recursively scans the `src/app` directory for pages
- Excludes specified paths (e.g., API routes, private pages)
- Handles dynamic routes and nested folders

To customize the sitemap generation:

1. Open `src/app/sitemap.js`
2. Modify the `ignorePaths` array to exclude additional paths if needed
3. Adjust the `changeFrequency` and `priority` values for pages as required
4. Update the `siteConfig` in `site-config.js` to set the correct base URL

Remember to update your `site-config.js` file with the correct URL for your website to ensure proper functionality of both the robots.txt and sitemap features.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 📧 Contact

If you want to contact me you can reach me at [rishitpatel.com/contact](https://rishitpatel.com/contact).

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui.
