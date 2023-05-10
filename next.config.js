/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["community.revelo.com.br"],
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
  },
};

module.exports = nextConfig;
