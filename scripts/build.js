const fs = require('fs-extra');
const elapsed = require('elapsed-time-logger');

// const buildTypes = require('./build-types');
const buildReact = require('./build-react');
const buildVue = require('./build-vue');
const buildTypes = require('./build-types');
const { outputDir } = require('./utils/output-dir');

class Build {
  constructor() {
    this.argv = process.argv.slice(2).map((v) => v.toLowerCase());
    this.size = this.argv.includes('--size');
    this.tasks = [];
    return this;
  }

  add(flag, buildFn) {
    if (!this.argv.includes('--only') || this.argv.includes(flag)) {
      this.tasks.push(() => buildFn());
    }
    return this;
  }

  async run() {
    if (!this.argv.includes('--only')) {
      await fs.remove(`./${outputDir}`);
      await fs.ensureDir(`./${outputDir}`);
    }
    await fs.copy('./src/copy/', `./${outputDir}`);

    const res = await Promise.all(this.tasks.map((buildFn) => buildFn())).catch((err) => {
      console.error(err);
      process.exit(1);
    });
    return res;
  }
}

(async () => {
  elapsed.start('build');
  const build = new Build();
  await build
    .add('types', buildTypes)
    .add('react', buildReact)
    .add('vue', buildVue)
    .run();
  elapsed.end('build','build complete');
})();
