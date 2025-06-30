// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import withPWA from 'next-pwa';

const withPWACustom = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default withPWACustom({
  reactStrictMode: true,
});