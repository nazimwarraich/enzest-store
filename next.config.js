/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export for Netlify
  images: {
    unoptimized: true, // disables Next.js image optimization (needed for Netlify free plan)
  },
};

module.exports = nextConfig;
