/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://raxvab.github.io/portfolio/" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
