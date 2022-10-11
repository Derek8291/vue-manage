import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from '../store';
import http from 'axios';
import './assets/scss/index.scss';
import './api/mock.js'
Vue.prototype.$http = http;

router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if(!token && to.name !== "login") {
    next({name: "login"});
  }else {
    next();
  }
})

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store,
  router,
  created() {
    store.commit('addMenu', router);
  },
  render: h => h(App),
}).$mount('#app')
