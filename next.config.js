/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  //next.js svg
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  //server, client className 일치
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
