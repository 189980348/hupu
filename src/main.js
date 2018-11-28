import Vue from 'vue'
//引入vue文件
import App from './App.vue'
import vueRouter from 'vue-router'
//引入路由
import router from './assets/js/router.js'
//引入配置好的路由
import './assets/css/animate.css'
import './assets/css/cssreset.css'
import '../node_modules/mint-ui/lib/style.css'
// import swiper from 'swiper'
import './assets/css/swiper.css'
import axios from 'axios'
import $ from 'n-zepto'
Vue.prototype.$http = axios
Vue.use(vueRouter)

import Mint from 'mint-ui';
Vue.use(Mint);



new Vue({
  el: '#app',

  render: h => h(App),

	router:router,

})
