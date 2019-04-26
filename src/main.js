import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import config from '.././vue.config.js'
import request from '.././request.js'
Vue.use(ElementUI);
Vue.config.productionTip = false
// 使用axios的方式发生请求,三步
// (1)引入axios库
import axios from "axios"
// (2)配置跨域访问,并保存session信息
axios.defaults.withCredentials=true;
// (3)将axios库配置到vue实例对象中
Vue.prototype.axios=axios;
// (4)当使用post请求时,引入qs模块的方式,解析成对象的形式
import qs from "qs"
// (5)将qs 模块配置到Vue实例对象中
Vue.prototype.qs=qs;


// 解决跨域问题
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
