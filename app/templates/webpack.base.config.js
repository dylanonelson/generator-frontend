const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

if (process.env.ANALYZE_BUNDLE === 'true') {
  plugins.push(new AnalyzerPlugin());
}

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    inline: true,
    port: 1104
  },
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }
      ],
    }, {
      test: /\.html/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].html',
        },
      }],
    }, {
      enforce: 'pre',
      include: /src/,
      use: [{
        loader: 'eslint-loader',
        options: {
          ...(!isProduction && { emitWarning: true }),
          fix: true,
        },
      }],
      test: /\.jsx?$/,
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins,
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
  }
};
