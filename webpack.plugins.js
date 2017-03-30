import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export const minify = new webpack.optimize.UglifyJsPlugin();
export const removeDuplicates = new webpack.optimize.DedupePlugin();
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

export const externalCSS = {
  loader: ExtractTextPlugin.extract('css?sourceMap'),
  plugin: new ExtractTextPlugin('[name].[contenthash].css')
};
