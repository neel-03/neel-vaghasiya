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
      {
        protocol: "https",
        hostname: "agxxxwckmuptjtzvrpzw.supabase.co",
        port: "",
        pathname: "/**/**/**/**/**/**",
      },
    ],
  },
};

export default nextConfig;
