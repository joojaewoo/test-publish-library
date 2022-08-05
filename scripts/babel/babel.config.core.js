module.exports = {
  ignore: [
    '../../src/react/**/*.js',
    '../../src/*-react.js',
    '../../src/vue/**/*.js',
    '../../src/*-vue.js',
    '../../src/copy/*',
  ],
  presets: [['@babel/preset-env', { modules: false, loose: true }]],
};
