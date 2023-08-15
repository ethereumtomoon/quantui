import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import backtest from '../components/backtest.vue'
import transactions from '../components/transactions.vue'
import position from '../components/position.vue'
import editor from '../components/pyeditor.vue'
import login from '../pages/Login.vue'
import register from '../pages/Register.vue'
import index from '../pages/Index.vue'
import user from '../pages/user.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: index
    },
    {
      name: "回测详情",
      path: "/backtest",
      component: backtest
    },
    {
      name: "交易详情",
      path: "/transactions",
      component: transactions
    },{
      name: "持仓详情",
      path: "/position",
      component: position
    }, {
      name: "编辑器",
      path: "/editor",
      component: editor
    }, {
      name: "登录",
      path: "/login",
      component: login
    },{
      name: "注册",
      path: "/register",
      component: register
    },{
      name: "用户信息",
      path: "/user",
      component: user
    },
  ]
})

export default router
