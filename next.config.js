/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: ''
        },
        {
          protocol: 'https',
          hostname: 'v1.tailwindcss.com',
          port: ''
        },
      ],
    },
  }

module.exports = nextConfig
