const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const webpack = require('webpack');
require('dotenv').config();

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8081,
    historyApiFallback:{
      index:'/public/index.html'
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontend: `MicroFrontend@${process.env.CLOUD_RUN_URL}/remoteEntry.js`
      }
    }),
    new webpack.DefinePlugin({
      'process.env.CLOUD_RUN_URL': JSON.stringify(process.env.CLOUD_RUN_URL)
    })
  ]
};
