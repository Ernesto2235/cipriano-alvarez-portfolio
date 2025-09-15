import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[new URL(process.env.API_URL+'/**'),new URL("http:localhost:3001/**")]
  }
};

export default nextConfig;
