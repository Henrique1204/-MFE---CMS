const { mergeWithRules } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const isProduction = argv.mode && argv.mode === 'production';
  const envFilePath = isProduction ? './.env.production' : './.env.local';

  const singleSpaDefaultConfig = singleSpaDefaults({
    orgName: 'henrique1204',
    projectName: 'cms',
    webpackConfigEnv,
    argv,
  });

  const applicationCustomConfigs = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist/parcel'),
      filename: 'index.js',
    },
    resolve: {
      alias: {
        '@Types': path.resolve(__dirname, 'src/@types'),
        '@Mocks': path.resolve(__dirname, 'src/@mocks'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Assets': path.resolve(__dirname, 'src/core/assets'),
        '@Constants': path.resolve(__dirname, 'src/core/constants'),
        '@Libs': path.resolve(__dirname, 'src/core/libs'),
        '@Utils': path.resolve(__dirname, 'src/core/utils'),
        '@Hooks': path.resolve(__dirname, 'src/hooks'),
        '@Tests': path.resolve(__dirname, 'src/tests'),
        '@Store': path.resolve(__dirname, 'src/core/store'),
        '@Pages': path.resolve(__dirname, 'src/pages'),
      },
    },
    plugins: [
      new Dotenv({
        path: envFilePath,
      }),
    ],
  };

  return mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(singleSpaDefaultConfig, applicationCustomConfigs);
};
