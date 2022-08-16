// eslint-disable-next-line
import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
import plugin from '../../dist/vue/design-vue.esm.js';

Vue.use(VueCompositionApi);
Vue.use(plugin);

new Vue({ render: (h) => h(App) }).$mount('#root');
