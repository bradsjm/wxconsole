module.exports = {
  productionSourceMap: false,
  outputDir: "docs",
  publicPath: "",
  chainWebpack: (config) => config.resolve.symlinks(false),
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map",
  },
};
