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
  //접근성 html lang 설정
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
}

module.exports = nextConfig
