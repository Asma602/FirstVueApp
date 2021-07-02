import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue/dist/bootstrap-vue.esm';
import admin from "@/components/admin";
import user from "@/components/user";
import home from "@/components/home";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import HelloWorld from "@/components/HelloWorld";
// import home from "@/components/home";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)


const routes = [
  { path: '/admin', component: admin },
  { path: '/user', component: user },
  { path: '/', component: home },

];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
