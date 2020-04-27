import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "./common/bootstrap/bootstrap.css"
import "./common/bootstrap/bootstrap.js"
import "font-awesome/css/font-awesome.css"
import "lib-flexible/flexible"
import Vant from "vant"
import 'vant/lib/index.css';
import 'assets/css/reset.css'


Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  Vant
}).$mount('#app')
