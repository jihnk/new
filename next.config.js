/** @type {import('next').NextConfig} */
const nextConfig = {
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
    types: ["react/next"]
  },
}

module.exports = nextConfig
