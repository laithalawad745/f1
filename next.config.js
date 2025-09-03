/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tradingview.com', 's3.tradingview.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig