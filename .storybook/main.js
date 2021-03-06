const path = require('path');
const webpack = require('webpack');
const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    //'@storybook/addon-links',
    '@storybook/addon-knobs',
    //'@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};