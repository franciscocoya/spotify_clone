const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack(config) {
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
    domains: ['i.scdn.co'],
  },
};

module.exports = nextConfig;
