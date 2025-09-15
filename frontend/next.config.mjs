import { API_URL } from "@/Api/jumpersHeaven";

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
