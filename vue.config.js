module.exports = {
  productionSourceMap: false,
  outputDir: "dist",
  publicPath: "",
  chainWebpack: (config) => config.resolve.symlinks(false),
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map",
  },
};
