const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV;
const isDev = env === 'dev';

const browserConfig = {
  entry: {
    main: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'babel-polyfill',
      'isomorphic-fetch/fetch-npm-browserify',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name]-[chunkhash].js',
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
    extensions: [
      '.js',
      '.jsx',
    ],
  },

  devtool: isDev ? 'inline-source-map' : 'hidden-source-map',

  module: {
    rules: [

      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  plugins: [
    new CleanPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new ManifestPlugin(),
  ],
};

const serverConfig = {
  entry: './src/server',
    output: {
  path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
},

  target: 'node',
    node: {
  __dirname: true,
},

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
      extensions: [
      '.js',
      '.jsx'
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=[name].[ext]',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'window': JSON.stringify(false),
    }),
  ],
};

module.exports = [browserConfig, serverConfig];
