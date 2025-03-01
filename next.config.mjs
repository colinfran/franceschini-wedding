import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
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
        hostname: "**",
      },
    ],
  },
};
export default withNextIntl(nextConfig);