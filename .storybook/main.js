const path = require('path');

module.exports = {
  stories: ['../storybook/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue',
  webpackFinal: async (config) => {
    console.log(path.resolve(__dirname, '/src/'));
    config.resolve.alias['@'] = path.resolve(__dirname, '/src/');
    return config;
  },
};
