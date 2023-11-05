/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "mcprod.hnak.com",
      },
    ],
  },
};

module.exports = nextConfig;
