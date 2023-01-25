/** @type {import('next').NextConfig} */
const URL = process.env.STRAPIBASEURL;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    domains: ["localhost:1337"],
  },
};
