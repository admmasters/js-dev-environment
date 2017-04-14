// @flow
import path from 'path';
import {
  devSourceMaps,
  injectHtml,
  noErrors,
  hotModuleReplacement,
  devLoaderOptions,
  codeLoader,
  devCSSLoader,
  webpackHotMiddlewareEntry
} from './webpack.modules';

export default {
  devtool: devSourceMaps,
  entry: [webpackHotMiddlewareEntry, path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [injectHtml(), noErrors, hotModuleReplacement, devLoaderOptions, devCSSLoader],
  module: {
    loaders: [codeLoader]
  }
};
