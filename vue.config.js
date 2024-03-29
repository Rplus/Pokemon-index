module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/Pokemon-index/'
      : '/Pokemon-index/',
  outputDir: 'Pokemon-index',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({ limit: -1, name: '[path][name]_[hash:5].[ext]' });
  },
};
