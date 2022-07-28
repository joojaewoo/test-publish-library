/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const path = require('path');
const elapsed = require('elapsed-time-logger');
const fs = require('fs-extra');

const { outputDir } = require('./utils/output-dir');

async function buildTypes() {

  const { globby } = await import('globby');
  elapsed.start('types');
  let coreEventsReact = '';
  let coreEventsVue = '';
  let modulesEventsReact = '';
  let modulesEventsVue = '';

  let files;
  await Promise.all([
    (async () => {
      files = await globby('**/*.d.ts', { cwd: path.resolve(__dirname, '../src') });
    })(),
  ]);

  await Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(path.resolve(__dirname, '../src', file), 'utf-8');
      const destPath = path.resolve(__dirname, `../${outputDir}`, file);
      await fs.ensureDir(path.dirname(destPath));

      const processTypingFile = async (eventsCode, modulesCode) => {
        const content = fileContent
          .replace('// MODULES_EVENTS', eventsCode)
          .replace('// CORE_EVENTS', modulesCode);
        return fs.writeFile(destPath, content);
      };
      if (file.includes('design-react.d.ts')) {
        return processTypingFile(coreEventsReact, modulesEventsReact);
      }
      if (file.includes('design-vue.d.ts')) {
        return processTypingFile(coreEventsVue, modulesEventsVue);
      }
      return fs.writeFile(destPath, fileContent);
    }),
  );
  elapsed.end('types', 'Types build completed!');
}

module.exports = buildTypes;
