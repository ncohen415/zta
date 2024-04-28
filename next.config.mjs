/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com',
                port: '',
                pathname: '/131880/**',
            },
        ],
    },
};

export default nextConfig;
