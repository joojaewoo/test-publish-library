/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const exec = require('exec-sh').promise;
const { outputDir } = require('./utils/output-dir');
const { addBannerToFile } = require('./utils/banner');

async function buildVue() {
  await exec(`rollup --config ./scripts/config/rollup.config.vue.js`);
  await addBannerToFile(`./${outputDir}/vue/design-vue.js`, 'Vue');
}

module.exports = buildVue;
