import './assets/main.css'
import ElementPlus from 'element-plus'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
//import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')
import('../node_modules/element-plus/theme-chalk/index.css')
const app = createApp(App)
//app.use(Vuetify)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
