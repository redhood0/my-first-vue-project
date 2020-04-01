import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL='https://www.fastmock.site/mock/4b98738af04e18409d8d542dbf010bfd/firstvue';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
