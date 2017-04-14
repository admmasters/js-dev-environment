import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export const minifyPlugin = new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  mangle: {
    screw_ie8: true,
    keep_fnames: true
  },
  compress: {
    screw_ie8: true
  },
  comments: false
});

export const injectHtml = () => {
  const minifyIfNeeded = isProduction()
    ? {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }
    : {};

  return new HtmlWebpackPlugin(
    Object.assign(
      {
        template: `src/index.html`,
        inject: true
      },
      minifyIfNeeded
    )
  );
};
export const hash = new WebpackMd5Hash();
export const hotModuleReplacement = new webpack.HotModuleReplacementPlugin();
export const noErrors = new webpack.NoErrorsPlugin();
export const devLoaderOptions = new webpack.LoaderOptionsPlugin({
  debug: true,
  noInfo: true
});

export const prodLoaderOptions = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
  noInfo: false
});

export const codeLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['babel-loader']
};

export const externalCSS = {
  loader: {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },
  plugin: new ExtractTextPlugin('styles.css')
};

export const devCSSLoader = { test: /\.css$/, loaders: ['style', 'css'] };

export const devSourceMaps = 'inline-source-map';
export const prodSourceMaps = 'cheap-module-source-map';

export const webpackHotMiddlewareEntry = 'webpack-hot-middleware/client?reload=true';

export const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor' // Specify the common bundle's name.
});
