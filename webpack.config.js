const path = require('path');

const frontEnd = {
  entry: './src/frontend',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist', 'frontend'),
    filename: 'frontend.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: "style-loader!css-loader"
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: 'url-loader?limit=100000' }
    ]
  }
};


const backEnd = {
  entry: './src/backend',
  devtool: 'source-map',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist', 'backend'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};


module.exports = [frontEnd, backEnd];
