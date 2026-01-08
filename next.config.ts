import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',

  // Disable Image Optimization for static export
  images: {
    unoptimized: true
  },

  basePath: '/modern-luxe',

  //Ensure trailing slashes
  trailingSlash: true,

  // Ensure generating static pages
  reactStrictMode: true,


  // Turbopack configuration (Next.js 16+)
  turbopack: {
    resolveAlias: {}
  },

  // Production build optimization
  productionBrowserSourceMaps: false
}

export default nextConfig