import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(VueRouter);
const axios = require('axios');
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
