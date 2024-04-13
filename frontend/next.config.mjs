/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
            ],
        });
        return config;
    },

    images: {
        disableStaticImages: true,
    }
};


export default nextConfig;
