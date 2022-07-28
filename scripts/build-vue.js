/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const exec = require('exec-sh').promise;
const { outputDir } = require('./utils/output-dir');
const { addBannerToFile } = require('./utils/banner');

async function buildVue() {
  await exec(
    `npx babel --config-file ./scripts/babel/babel.config.vue.js src/vue --out-dir ${outputDir}/vue`,
  );
  await addBannerToFile(`./${outputDir}/vue/design-vue.js`, 'Vue');
}

module.exports = buildVue;
