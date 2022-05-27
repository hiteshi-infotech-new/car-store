/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.autochek.africa', 'storage.googleapis.com', 'www.dfakto.com'],
  }
}

module.exports = nextConfig
