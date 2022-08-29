import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import minimist from 'minimist';
import ttypescript from 'ttypescript';
import typescript from 'rollup-plugin-typescript2';
import images from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '../..');

const baseConfig = {
  plugins: {
    replace: { preventAssignment: true },
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
      data: {
        scss: `
          $main : #fb4760;
          $red: #ff5252;
          $danger: #D32F2F;
          $dark: #000000;
          $black: #222222;
          $button: #666666;
          $gray-8: #888888;
          $gray: #9B9B9B;
          $gray-light: #AAAAAA;
          $disable: #CCCCCC;
          $gray-eb: #EBEBEB;
          $gray-ef: #EFEFEF;
          $gray-f6: #F6F6F6;
          $green-dark: #608e92;
          $green: #43a047;
          $white: #fff;
          $cyan: rgb(75, 180, 156);
       
          $pink10: #FEECEF;
          $pink20: #FEDADF;
          $pink30: #FDB5BF;
          $pink40: #FD91A0;
          $pink50: #FC6C80;
          $pink60: #FB4760;
          $pink70: #FB3A55;
          $pink80: #F42844;
          $pink90: #EC2843;
          
          $blue10: #EAEFFF;
          $blue20: #DEE6FF;
          $blue30: #B9CBFF;
          $blue40: #7C9EFD;
          $blue50: #618AFF;
          $blue60: #4B7AFF;
          $blue70: #3668F4;
          $blue80: #255CF9;
          $blue90: #0E46E4;
          
          $gray10: #F5F6FB;
          $gray20: #EBEEF6; 
          $gray30: #DFE3ED; 
          $gray40: #D0D6E1;
          $gray50: #BEC5D2; 
          $gray60: #A6ADBD;
          $gray70: #8F97A7; 
          $gray80: #686E7B; 
          $gray90: #3E4149;
          $gray100: #222222; 
          
          $black100: #000000;
          $black005: rgba($black100, 0.05);
          $black010: rgba($black100, 0.1);
          $black020: rgba($black100, 0.2);
          $black030: rgba($black100, 0.3);
          $black040: rgba($black100, 0.4);
          $black050: rgba($black100, 0.5);
          $black060: rgba($black100, 0.6);
          $black070: rgba($black100, 0.7);
          $black080: rgba($black100, 0.8);
          
          $white100: #FFFFFF;
          $white005: rgba($white100, 0.05);
          $white010: rgba($white100, 0.1);
          $white020: rgba($white100, 0.2);
          $white030: rgba($white100, 0.3);
          $white040: rgba($white100, 0.4);
          $white050: rgba($white100, 0.5);
          $white060: rgba($white100, 0.6);
          $white070: rgba($white100, 0.7);
          $white080: rgba($white100, 0.8);
        `,
      },
      css: true,
      template: {
        isProduction: true,
        transformAssetUrls: true,
      },
      style: {
        preprocessStyles: true,
        preprocessOptions: {
          scss: {
            additionalData: `@import 'src/assets/colors.scss';`,
          },
        },
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

const external = ['vue'];

const globals = {
  vue: 'Vue',
};

// const buildFormats = [];
// if (!argv.format || argv.format === 'es') {
const esConfig = {
  ...baseConfig,
  input: 'src/vue/entry.esm.ts',
  external,
  output: {
    file: 'dist/vue/design-vue.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.svg'] }),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    typescript({
      typescript: ttypescript,
      useTsconfigDeclarationDir: true,
      emitDeclarationOnly: true,
    }),
    images({
      output: 'dist/images',
    }),
    scss(),
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
