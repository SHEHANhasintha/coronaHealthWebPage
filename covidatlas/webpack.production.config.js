const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const HtmlWebPackPlugin = require("html-webpack-plugin");
//const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var ManifestPlugin = require('webpack-manifest-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//const TerserJSPlugin = require('terser-webpack-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


//const env = getClientEnvironment(publicUrl);

//const env = getClientEnvironment(publicUrl);

var dotenv = require('dotenv').config({path: __dirname + '/.env'});

const path = require("path");

const fs = require('fs');

  console.log(dotenv.parsed); // 'local'
 // console.log('Production: ', env.production); // true

module.exports = env => {

  //console.log('NODE_ENV: ', getClientEnvironment); // 'local'
  //console.log('Production: ', getClientEnvironment.production); // true

  return {
  entry: { main: "./src/index.js" },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    proxy: {
        '/auth': {
            target: 'http://localhost:5000',
            secure: true
        }
    },
    contentBase: './public',
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.?worker\.js$/,
        exclude: /node_modules/,
        use: { loader: "worker-loader" }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ],

  },
  plugins: [new HtmlWebPackPlugin({ 
    hash: true,
    inject: true,
    template: "./public/index.html", 
    minify: {
      minifyCSS: true,
    }
  }),
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.$': 'jquery',
  'window.jQuery': 'jquery'
}),
new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        }),
    new webpack.SourceMapDevToolPlugin({
      exclude: ['popper.js']
    }),

new CleanWebpackPlugin(),
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
  ],

}
};
