/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.shopify.com'],
    },
    serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
