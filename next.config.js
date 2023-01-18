const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  api: {
    externalResolver: true,
  },
  webpack(config) {
    // if (isServer) {
    //   config.externals.unshift(({ context, request }, callback) => {
    //     if (request === 'prisma/client') {
    //       return callback(null, `commonjs ${prismaClientPath}`);
    //     }
    //     if (request === './runtime' && context === prismaClientPath) {
    //       return callback(null, `commonjs ${prismaClientPath}/runtime`);
    //     }
    //     callback();
    //   });
    // }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    // The locales you want to support in your app
    locales: ['en', 'es-ES'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
