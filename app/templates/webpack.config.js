var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: 'dist',
    inline: true,
    port: 1104
  },
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }],
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint?{fix:true}',
        include: /src/,
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    root: path.resolve('./src')
  }
}
