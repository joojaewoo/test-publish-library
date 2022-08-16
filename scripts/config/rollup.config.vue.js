// // rollup.config.js
// import path from 'path';
// import vue from 'rollup-plugin-vue';
// import alias from '@rollup/plugin-alias';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
// import babel from '@rollup/plugin-babel';
// import { terser } from 'rollup-plugin-terser';
// import minimist from 'minimist';
// // import injectProcessEnv from 'rollup-plugin-inject-process-env';
//
// const argv = minimist(process.argv.slice(2));
//
// const projectRoot = path.resolve(__dirname, '..');
//
// // const babelPresetEnvConfig = require('/babel.config.js').presets.filter(
// //   (entry) => entry[0] === '@babel/preset-env',
// // )[0][1];
//
// const external = ['vue', 'axios', '@vue/composition-api', 'vue-composition-api', 'vue-cookies'];
//
// const globals = {
//   vue: 'Vue',
//   axios: 'axios',
//   '@vue/composition-api': 'VueCompositionApi',
//   'vue-cookies': 'VueCookies',
// };
//
// const baseConfig = {
//   input: 'src/vue/entry.esm.ts',
//   output: [
//     {
//       file: 'dist/vue/design-vue.esm.js',
//       name: 'design-vue',
//       format: 'esm',
//       globals,
//       exports: 'named',
//     },
//   ],
//   external,
//   plugins: [
//     terser(),
//     resolve({ extensions: ['.js', '.ts'] }),
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('production'),
//       'process.env.VUE_APP_API_PAYMENT_BASE': JSON.stringify('https://payment-api.sinsang.market'),
//     }),
//     alias({
//       entries: [
//         {
//           find: '@',
//           replacement: `${path.resolve(projectRoot, 'src')}`,
//         },
//       ],
//     }),
//     vue({
//       css: true,
//       template: {
//         isProduction: true,
//         transformAssetUrls: true,
//       },
//     }),
//     resolve({
//       extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svg'],
//     }),
//     commonjs(),
//     babel({
//       exclude: 'node_modules/**',
//       extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svg'],
//       babelHelpers: 'bundled',
//       presets: [
//         [
//           '@babel/preset-env',
//           {
//             modules: false,
//             spec: true,
//             useBuiltIns: 'usage',
//             forceAllTransforms: true,
//             corejs: 3,
//           },
//         ],
//         '@babel/preset-typescript',
//       ],
//     }),
//   ],
// };
//
// // Export config
// export default baseConfig;

import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';

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
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_APP_API_PAYMENT_BASE': JSON.stringify('https://payment-api.sinsang.market'),
    },
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

const buildFormats = [];
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    input: 'src/vue/entry.esm.ts',
    external,
    output: {
      file: 'dist/vue/design.esm.js',
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
        presets: [
          '@babel/preset-typescript',
          [
            '@babel/preset-env',
            {
              modules: false,
              spec: true,
              useBuiltIns: 'usage',
              forceAllTransforms: true,
              corejs: 3,
            },
          ],
        ],
      }),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/vue/design.ssr.js',
      format: 'cjs',
      name: 'design',
      exports: 'auto',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
    ],
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/vue/design.min.js',
      format: 'iife',
      name: 'design',
      exports: 'auto',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
