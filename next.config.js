/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "community.revelo.com.br",
      },
    ],
  },
};

module.exports = nextConfig;
