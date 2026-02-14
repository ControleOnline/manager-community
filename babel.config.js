module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controleonline': './modules/controleonline',
          '@env': './config/env.local.js',
          '@package': './package.json',
          '@stores': './src/store/stores.js',
          '@store': './src/store',
          '@controleonline-rn': './node_modules/@controleonline',
        },
      },
    ],
  ],
};
