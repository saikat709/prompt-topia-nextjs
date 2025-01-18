/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config;
  },
  experimental: {
      turbo: {
        moduleIdStrategy: 'deterministic',
      },
  },
};

export default nextConfig;
