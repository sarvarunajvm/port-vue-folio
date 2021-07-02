module.exports = {
  //Basic path
  publicPath: process.env.NODE_ENV === "production" ? "/port-vue-folio" : "/",
  //Output directory at build time
  outputDir: "dist",
  //Set directory for static resources
  assetsDir: "static",
  //Output path of html
  indexPath: "index.html",
  //File name hash
  filenameHashing: true,
  //Whether to use it when saving`eslint-loader`Inspection
  lintOnSave: true,
  //Use full build with in browser editor
  runtimeCompiler: false,
  //  Babel loader will skip node modules dependency by default.
  transpileDependencies: ["vuetify"],
  //  Build build for production environment or not source map？
  productionSourceMap: false,
  //  Set in generated HTML <link rel="stylesheet"> and <script> Labelling crossorigin Attribute.
  crossorigin: "",
  //  In the generated HTML <link rel="stylesheet"> and <script> Enabled on label Subresource Integrity (SRI).
  integrity: false,
  // Configure the webpack dev server behavior.
  devServer: {
    disableHostCheck: true,
  },
  parallel: require("os").cpus().length > 1,
};
