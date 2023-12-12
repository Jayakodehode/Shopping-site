/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
