// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//基础样式
import "./assets/base.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store'
import api from './assets/js/api/api' //导入api接口
//axios
// import axios from './assets/js/http.js'

Vue.use(ElementUI);
// Vue.prototype.$axios = axios;
Vue.prototype.$api = api; //将api挂载到Vue原型上

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
