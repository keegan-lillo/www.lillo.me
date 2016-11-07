import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { phenomicLoader } from 'phenomic';

export default (config = {}) => {
  const postcssPlugins = () => [
    require('postcss-reporter')(),
    require('autoprefixer')({
      browsers: ['Android 4.3', 'iOS 8', 'ie >= 10'],
      cascade: false,
    }),
    ...config.dev && [require('postcss-browser-reporter')()],
  ];

  return {
    ...config.dev && {
      devtool: 'inline-source-map',
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
          },
        },

        // *.json => like in node, return json
        // (not handled by webpack by default)
        {
          test: /\.json$/,
          loader: 'json-loader',
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'scripts'),
            path.resolve(__dirname, 'src'),
          ],
          loaders: [
            'babel-loader?cacheDirectory',
//            'eslint-loader' + (config.dev ? '?emitWarning' : ''),
          ],
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.scss => CSS Modules
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /\.global\.scss$/,
          loader: ExtractTextPlugin.extract(
            'style',
            [
              `css?modules&localIdentName=${config.production ?
                '[hash:base64:5]' :
                '[path][name]--[local]--[hash:base64:5]'} 
                ${config.dev && '&sourceMap'}`,
              'postcss',
              `sass?${config.dev && 'sourceMap'}`,
            ]
          ),
        },
        // *.global.scss => global (normal) css
        {
          test: /\.global\.scss$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract(
            'style-loader',
            [
              `css?${config.dev && '&sourceMap'}`,
              'postcss',
              `sass?${config.dev && 'sourceMap'}`,
            ]
          ),
        },

        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
          loader: 'file-loader',
          query: {
            name: '[path][name].[hash].[ext]',
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: 'raw-loader',
        },
      ],
    },

    postcss: postcssPlugins,

    plugins: [
      new ExtractTextPlugin('[name].[hash].css', { disable: config.dev }),
      ...config.production && [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
        }),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: '[name].[hash].js',
    },

    resolve: {
      extensions: [ '.js', '.json', '' ],
      root: [ path.join(__dirname, 'node_modules') ],
    },
    resolveLoader: { root: [ path.join(__dirname, 'node_modules') ] },
  };
};
