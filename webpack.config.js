var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [ 
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        filename: './dist/index.html',
      })
    ]
  };