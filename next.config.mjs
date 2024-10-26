/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        /* hostname: "https://dqztxkgeqkncwohaiezz.supabase.co", */
        hostname: "dqztxkgeqkncwohaiezz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
