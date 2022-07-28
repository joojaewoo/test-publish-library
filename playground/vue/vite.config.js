import path from 'path';
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      design: path.resolve(__dirname, '../../dist'),
    },
  },
};
