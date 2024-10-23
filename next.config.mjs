/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/2021/12/privacy-policy.html",
        destination: "/2021/12/privacy-policy",
      },
    ];
  },
};

export default nextConfig;
