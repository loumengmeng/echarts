import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  document.title=to.meta.til||'疫情'
      next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
