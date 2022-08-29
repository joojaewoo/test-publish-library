import path from 'path';
import vue from '@vitejs/plugin-vue2';

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      design: path.resolve(__dirname, '../../dist'),
    },
  },
};
