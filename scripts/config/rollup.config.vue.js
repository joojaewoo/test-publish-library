import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
  input: 'src/vue/index.ts',
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`,
          },
        ],
      }),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
        transformAssetUrls: true,
      },
    },
    postVue: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svg'],
      }),
      commonjs(),
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svg'],
      babelHelpers: 'bundled',
    },
  },
};

const external = ['vue', 'axios', '@vue/composition-api', 'vue-composition-api', 'vue-cookies'];

const globals = {
  vue: 'Vue',
  axios: 'axios',
  '@vue/composition-api': 'VueCompositionApi',
  'vue-cookies': 'VueCookies',
};

// const buildFormats = [];
// if (!argv.format || argv.format === 'es') {
const esConfig = {
  ...baseConfig,
  input: 'src/vue/entry.esm.ts',
  external,
  output: {
    file: 'dist/vue/design-vue.esm.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.svg'] }),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel({
      ...baseConfig.plugins.babel,
      presets: ['@babel/preset-typescript', '@babel/preset-env'],
    }),
  ],
};
// buildFormats.push(esConfig);
// }

// if (!argv.format || argv.format === 'iife') {
//   const unpkgConfig = {
//     ...baseConfig,
//     external,
//     output: {
//       compact: true,
//       file: 'dist/vue/design.min.js',
//       format: 'iife',
//       name: 'design',
//       exports: 'auto',
//       globals,
//     },
//     plugins: [
//       replace(baseConfig.plugins.replace),
//       ...baseConfig.plugins.preVue,
//       vue(baseConfig.plugins.vue),
//       ...baseConfig.plugins.postVue,
//       babel(baseConfig.plugins.babel),
//       terser({
//         output: {
//           ecma: 5,
//         },
//       }),
//     ],
//   };
//   buildFormats.push(unpkgConfig);
// }

// Export config
export default esConfig;
