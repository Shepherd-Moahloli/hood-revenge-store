const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

module.exports = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export" } : {}),
  allowedDevOrigins: ["192.168.18.4", "http://192.168.18.4:3000"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "your-image-host.com", pathname: "/**" },
    ],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};
