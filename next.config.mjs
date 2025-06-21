/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'belave.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
