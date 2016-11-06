import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { phenomicLoader } from 'phenomic';
import PhenomicLoaderFeedWebpackPlugin
  from 'phenomic/lib/loader-feed-webpack-plugin';

import pkg from './package.json';

export default (config = {}) => {
  const postcssPlugins = () => [
    require('stylelint')(),
    require('postcss-cssnext')({
      browsers: 'last 2 versions',
      features: {
        customProperties: {
          variables: {
            mainColor: '#111',
            mainColorContrasted: '#eee',
          },
        },
      },
    }),
    require('postcss-reporter')(),
    ...!config.production ? [
      require('postcss-browser-reporter')(),
    ] : [],
  ];

  return {
    ...config.dev && {
      devtool: '#source-map',
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
            'eslint-loader' + (config.dev ? '?emitWarning' : ''),
          ],
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract(
            'style-loader',
            [ `css-loader?modules&localIdentName=${
              config.production ?
                '[hash:base64:5]' :
                '[path][name]--[local]--[hash:base64:5]'
              } 
              ${config.dev && '&sourceMap'}`,
              'postcss-loader',
            ].join('!'),
          ),
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract(
            'style-loader',
            [ `css-loader?modules&localIdentName=${
                config.production ?
                  '[hash:base64:5]' :
                  '[path][name]--[local]--[hash:base64:5]'
                } 
              ${config.dev && '&sourceMap'}`,
              'postcss-loader',
            ].join('!'),
            'sass-loader',
          ),
        },
        // *.global.css => global (normal) css
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract(
            'style-loader',
            [
              `css-loader?${config.dev && '&sourceMap'}`,
              'postcss-loader',
            ].join('!'),
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
      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          'feed.xml': {
            collectionOptions: {
              filter: { layout: 'Post' },
              sort: 'date',
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new ExtractTextPlugin('[name].[hash].css', { disable: config.dev }),
      ...config.production && [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
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
