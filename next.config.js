/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "community.revelo.com.br",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "files.speakerdeck.com",
      },
    ],
  },
};

module.exports = nextConfig;
