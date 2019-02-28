import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import './styles/theme.scss';

import Utils from './utils/index';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$http = Utils.Http;
Vue.prototype.$bus = new Vue();

Object.keys(Utils.Filters).forEach((key) => {
  Vue.filter(key, Utils.Filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
