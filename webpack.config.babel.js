var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var autoprefixer = require('autoprefixer');




var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app')
      },

    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'George Site'
    })
  ]
  };


process.env.BABEL_ENV = process.env.npm_lifecycle_event;


if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    // devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot','babel'],
          include: path.resolve(ROOT_PATH, 'app')
        },
         // SASS
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        },
         {test: /\.(png|jpg|woff|woff2|otf|eot|ttf|svg|mp4)$/,
      loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest

      ]
    },
    postcss: function () {
      return [autoprefixer];
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
      // ,new webpack.DefinePlugin({
      //   'process.env': {
      //     'NODE_ENV': JSON.stringify('production')
      //   }
      // })
      // ,
      // new webpack.optimize.UglifyJsPlugin({
      //   compressor: {
      //   warnings: false
      // }
  //  })
    ]
  });
}
