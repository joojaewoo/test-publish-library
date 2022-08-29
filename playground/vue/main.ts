// eslint-disable-next-line
import Vue from 'vue';
import App from './App.vue';
import designLib from 'library-button-test/vue';

Vue.use(designLib);

new Vue({ render: (h) => h(App) }).$mount('#root');
