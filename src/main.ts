import './assets/main.css'
import ElementPlus from 'element-plus'
import navigations from './navigation.vue'
//import PythonpadRunner from '../node_modules/vue-pythonpad-runner/src/core/pythonpad-runner.vue';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
//import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')
import('../node_modules/element-plus/theme-chalk/index.css')
const app = createApp(App)
//app.use(Vuetify)
app.use(navigations)
app.use(router)
//app.use(VuePythonpadRunner)
app.use(ElementPlus)
app.mount('#app')
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (Vue.prototype.getCookie('token')) {
        next()
      } else {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next() // 确保一定要调用 next()
    }
  })
  
  const store = new vuex.Store({
    state: {
      username: ''
    },
    mutations: {
      isLogin (state, data) {
        state.username = data.username
      }
    },
    getters: { // 实时监听state值的变化(最新状态)
      username (state) { // 方法名随意,主要是来承载变化的showFooter的值
        return state.username
      }
    }
  })
  