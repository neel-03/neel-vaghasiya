/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "svgshare.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
