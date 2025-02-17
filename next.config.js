/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Cryptogram",
  assetPrefix: "/Cryptogram/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
