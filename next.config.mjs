/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/fetch",
        destination: "/api/cron",
        permanent: true,
      }
    ]
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "images.zola.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "*.media-amazon.com"
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com"
      },
    ],
  },
};

export default nextConfig;
