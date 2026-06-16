/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export',
  ...(isProd && { basePath }),
  ...(isProd && { assetPrefix: '/portfolio/' }),
  reactCompiler: true,
  images: {
    unoptimized: true,
    qualities: [75, 80, 95, 100],
  },
};

// Only set turbopack.root in development
if (!isProd) {
  nextConfig.turbopack = {
    root: import.meta.dirname,
  };
}

export default nextConfig;