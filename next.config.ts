import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[new URL('https://placehold.co/**'),new URL("http:localhost:3001/**")]
  }
};

export default nextConfig;
