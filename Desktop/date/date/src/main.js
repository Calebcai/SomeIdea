import Vue from "vue";
import App from "./components/Wrap.vue";
import router from "./router";
import store from "./store";
import {Row,Col,Menu,Dropdown,Icon,Button,Divider,Carousel,Card,Popover  } from "ant-design-vue"
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Dropdown);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Divider);
Vue.use(Carousel);
Vue.use(Card);
Vue.use(Popover);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
