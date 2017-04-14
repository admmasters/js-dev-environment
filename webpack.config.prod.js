// @flow
import path from 'path';
import {
  minifyPlugin,
  injectHtml,
  hash,
  externalCSS,
  prodLoaderOptions,
  codeLoader,
  prodSourceMaps,
  commonChunksPlugin
} from './webpack.modules';

const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

export default {
  devtool: prodSourceMaps,
  entry: {
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
    main: `${SRC_DIR}/index`
  },
  target: 'web',
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [hash, injectHtml(), externalCSS.plugin, prodLoaderOptions, commonChunksPlugin],
  module: {
    loaders: [codeLoader, externalCSS.loader]
  }
};
