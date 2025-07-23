import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/photoboothpics",
        destination: "https://www.dropbox.com/scl/fo/h7a7yfi3w6rtbsy3qx96v/AD7OuUMZIyDclLNTM5j9koI?rlkey=2sye3ollvld7cs9hlfbgcv92p&st=tc65gnhl&dl=0",
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
        hostname: "**",
      },
    ],
  },
};
export default withNextVideo(withNextIntl(nextConfig), { folder: 'y' });