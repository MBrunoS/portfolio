/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["community.revelo.com"],
  },
};

module.exports = nextConfig;
