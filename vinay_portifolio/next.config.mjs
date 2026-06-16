/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export',
  ...(isProd && { basePath }),
  ...(isProd && { assetPrefix: '/portfolio/' }),
  reactCompiler: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,  // ← add this line only
  },
  images: {
    unoptimized: true,
    qualities: [75, 80, 95, 100],
  },
};

if (!isProd) {
  nextConfig.turbopack = {
    root: import.meta.dirname,
  };
}

export default nextConfig;