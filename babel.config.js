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
            '@hooks': './src/hooks',
            '@theme': './src/theme',
            '@context': './src/context',
            '@data': './src/data',
            '@types': './src/types',
            '@utils': './src/utils'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
