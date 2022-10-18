/** @type {import('next').NextConfig} */
const URL = process.env.STRAPIBASEURL;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: [URL],
  },
};

// module.exports = nextConfig;
