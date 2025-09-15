import { API_URL } from "./src/Api/jumpersHeaven.js";

const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/localhost/:path*",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
