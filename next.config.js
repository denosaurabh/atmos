// eslint-disable-next-line no-undef
const withPlugins = require('next-compose-plugins');
// const withPreact = require('next-plugin-preact');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withBundleAnalyzer], {
  env: {
    URL: 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: 'https://rcuycsnhiamtyjpdfnzp.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY_PUBLIC:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzMzNzM2NSwiZXhwIjoxOTQ4OTEzMzY1fQ.PFcSoty5WWEAbVJqQAesrLFqYzFdZLeTz5FMmxBWN6w',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['rcuycsnhiamtyjpdfnzp.supabase.in'],
  },
  webpack: (
    config
    // { dev, isServer }
  ) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Replace React with PReact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat',
    //   });
    // }

    // Important: return the modified config
    return config;
  },
});
