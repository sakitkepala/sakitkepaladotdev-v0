const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "https://www.sakitkepala.dev/" : "",
};
