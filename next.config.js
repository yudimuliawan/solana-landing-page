// const withPWA = require("next-pwa");

module.exports = {
  i18n: {
    locales: ["id"],
    defaultLocale: "id",
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
// module.exports = withPWA({
//   i18n: {
//     locales: ["id"],
//     defaultLocale: "id",
//   },
//   target: "serverless",
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// });
