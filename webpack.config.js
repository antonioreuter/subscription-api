const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['.']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'awesome-typescript-loader'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }]
  },
  optimization: {
    nodeEnv: false
  }
};
