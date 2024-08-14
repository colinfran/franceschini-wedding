/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/rsvp",
        destination: "https://www.zola.com/wedding/colinandornella/rsvp",
        permanent: true,
      },
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
      }
    ],
  },
};

export default nextConfig;
