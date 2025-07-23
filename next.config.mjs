import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/photoboothpics",
        destination: "https://www.dropbox.com/scl/fo/57u0ru4djco3ev5sfqhkf/APAfGdlabiYZcWq8FB92OwI?rlkey=ytsejiw23o600xlnowlsghnum&st=v77vauh9&dl=0",
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