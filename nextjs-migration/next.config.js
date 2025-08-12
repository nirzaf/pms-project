/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: [
      'images.unsplash.com',
      'ik.imagekit.io'
    ],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig