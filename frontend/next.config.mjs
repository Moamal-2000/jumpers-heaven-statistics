const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/api/localhost/:path*',
        destination: 'https://jhstats.fly.dev/api/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
