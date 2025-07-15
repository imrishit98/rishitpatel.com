/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  rewrites() {
    return [
      {
        source: '/js/:slug',
        destination: 'https://plausible.io/js/:slug',
      },
      {
        source: '/api/event',
        destination: 'https://plausible.io/api/event',
      },
    ];
  },
};

module.exports = nextConfig;
