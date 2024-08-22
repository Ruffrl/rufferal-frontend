const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const path = require('path');

const appDirectory = path.resolve(__dirname, '.');

const babelLoaderConfiguration = {
  test: /\.(ts|js|tsx|jsx)$/,
  include: [path.resolve(appDirectory, './src/App.tsx'), /node_modules/],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    },
  },
};
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  output: {
    path: path.resolve(appDirectory, '../../dist/apps/webApp'),
  },
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js'],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/App.tsx',
      index: './src/index.html',
      outputPath: 'dist/apps/webApp',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
