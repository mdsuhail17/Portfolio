/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'aceternity.com', 'cdn.jsdelivr.net', 'd1.awsstatic.com'],
  },
}

module.exports = nextConfig
