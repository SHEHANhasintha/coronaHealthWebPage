const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const HtmlWebPackPlugin = require("html-webpack-plugin");
//const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var ManifestPlugin = require('webpack-manifest-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//const CompressionPlugin = require('compression-webpack-plugin');

//const CopyPlugin = require('copy-webpack-plugin');

var dotenv = require('dotenv').config({path: __dirname + '/.env.development'});

const path = require("path");

const fs = require('fs');

const BUILD_DIR = path.resolve(__dirname, './../build');
const APP_DIR = path.resolve(__dirname, './client');

 // console.log('Production: ', env.production); // true

module.exports = env => {
  return {
  mode: 'development',
  entry: { main: "./src/index.js" },
  devtool: "source-map",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: '/'
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    proxy: {
        '/auth': {
            target: "http://localhost:5000",
            secure: false,
            changeOrigin: true,
            logLevel: "debug",
            changeOrigin: true,
            headers: {
              Connection: "keep-alive"
            }         
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
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
        test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
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
  new FaviconsWebpackPlugin( path.join(__dirname, 'public/images/logo.ico')),

    
  ]


}
};
