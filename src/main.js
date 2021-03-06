import Vue from "vue";
import App from "./App";
import store from "./store/index";
import interfaces from "./utils/interfaces";

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$interfaces = interfaces;

App.mpType = "app";
const app = new Vue(App);
app.$mount();
