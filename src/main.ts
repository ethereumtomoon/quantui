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
