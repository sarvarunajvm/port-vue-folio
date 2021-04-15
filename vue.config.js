module.exports = {
  //option
  //Basic path
  publicPath : process.env.NODE_ENV === 'production' ? '/port-vue-folio' : '/',
  //Output directory at build time
  outputDir : 'dist',
  //Set directory for static resources
  assetsDir: 'static',
  //Output path of html
  indexPath: 'index.html',
  //File name hash
  filenameHashing: true,
  //Whether to use it when saving`eslint-loader`Inspection
  lintOnSave: true,
  //Use full build with in browser editor
  runtimeCompiler: false,
  //  Babel loader will skip node modules dependency by default.
  transpileDependencies: [
    "vuetify"
  ],
  //  Build build for production environment or not source map？
  productionSourceMap: false,
  //  Set in generated HTML <link rel="stylesheet"> and <script> Labelling crossorigin Attribute.
  crossorigin: "",
  //  In the generated HTML <link rel="stylesheet"> and <script> Enabled on label Subresource Integrity (SRI). 
  integrity: false,
  // Configure the webpack dev server behavior.
  devServer: {
    //open: process.platform === 'darwin',
    //host: '0.0.0.0',
    //port: 8080,
    //https: false,
    //hotOnly: false,
    // See https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#Configuration agent
    //proxy: {
      // '/api': {
      //   target: `http://58.251.218.38:8280`,
      //   changeOrigin: true,
      //   secure: false,
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // }
    //},
    disableHostCheck: true
  },
  // The configuration is higher than that of css loader in chainWebpack
  // css: {
  //   // Whether to enable foo.module.css
  //   requireModuleExtension: false,
  //   // Whether to use the css separation plug-in ExtractTextPlugin and load it in a separate style file instead of using the <style> Method inline to html In file
  //   extract: true,
  //   // Whether to build style map or not, false will improve the construction speed
  //   sourceMap: false,
  //   // css preset configuration item
  //   // loaderOptions: {
  //   //   css: {
  //   //     // options here will be passed to css-loader
  //   //   },
  //   //   postcss: {
  //   //     // options here will be passed to postcss-loader
  //   //   }
  //   // }
  // },
  // Enable multiprocess processing babel compilation at build time
  parallel: require('os').cpus().length > 1
  // pluginOption: {
  //   i18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //     localeDir: 'locales',
  //     enableInSFC: false,
  //   },
  // }
}