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

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');


//const env = getClientEnvironment(publicUrl);

//const env = getClientEnvironment(publicUrl);

var dotenv = require('dotenv').config({path: __dirname + '/.env'});

const path = require("path");

const fs = require('fs');

const BUILD_DIR = path.resolve(__dirname, './public/build');
const APP_DIR = path.resolve(__dirname, './client');

 // console.log('Production: ', env.production); // true

module.exports = env => {

  //console.log('NODE_ENV: ', getClientEnvironment); // 'local'
  //console.log('Production: ', getClientEnvironment.production); // true



  return {
  entry: { main: "./src/index.js" },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
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
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),

    
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
      cache: true,
        parallel: 4,
        sourceMap: true,         
        terserOptions: {
          ecma: 8,
          warnings: false,
          parse: {},
          compress: { warnings: false },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: true,
          output: {
            comments: false,
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
        extractComments: false,
      }),
    ],
  },
}
};
