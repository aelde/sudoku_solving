module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@theme': './src/theme'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
