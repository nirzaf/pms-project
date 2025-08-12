/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig