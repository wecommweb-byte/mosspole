/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization since we're using static export and SVG only
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
