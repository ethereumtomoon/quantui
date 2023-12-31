import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import backtest from '../components/backtest.vue'
import transactions from '../components/transactions.vue'
import position from '../components/position.vue'
import editor from '../components/pyeditor.vue'
import login from '../pages/Login.vue'
import register from '../pages/Register.vue'
import index from '../pages/Index.vue'
import user from '../pages/User.vue'
import forum_pool from '../forum/pool/Pool.vue'
import tech from '../forum/technique/Technique.vue'
import forum_edit from '../forum/edit/Edit.vue'
import topic from '../forum/topic/Topic.vue'
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
    },{
      name: "话题池",
      path: "/forum/pool",
      component: forum_pool
    },{
      name: "技术讨论",
      path: "/forum/tech",
      component: tech
    },{
      name: "话题",
      path: "/forum/topic",
      component: topic
    },{
      name: "编辑",
      path: "/forum/edit",
      component: forum_edit
    },
  ]
})

export default router
