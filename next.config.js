/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            buffer: false,
            path: false,
            util: false,
            stream: false,
        };
        return config;
    },
}

module.exports = nextConfig
