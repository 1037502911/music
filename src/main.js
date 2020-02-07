import Vue from "vue";
import App from "./App.vue";
import less from "less"; //less
import fastclick from "fastclick"; //防止移动端点击延迟3s
import axios from "axios";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";

Vue.prototype.axios = axios;

fastclick.attach(document.body);

Vue.use(less);
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
