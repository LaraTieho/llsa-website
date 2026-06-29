/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fail the build on TypeScript errors — never deploy broken types
  typescript: {
    ignoreBuildErrors: false,
  },
  // Fail the build on ESLint errors — lint issues should block CI
  eslint: {
    ignoreDuringBuilds: false,
  },
  // All images are served from /public — no external domains whitelisted.
  // Add entries to remotePatterns if a CMS or CDN is added later.
  images: {
    remotePatterns: [],
  },
}

export default nextConfig;
