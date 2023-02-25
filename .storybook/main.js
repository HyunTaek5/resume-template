const path = require('path');

module.exports = {
  storyStoreV7: true,
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss', options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  typescript: {
    check: false
  },
  framework: '@storybook/react',
  core: {
    'builder': 'webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };

    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];

    return config;
  }
};