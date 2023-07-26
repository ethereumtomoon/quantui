<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
      >
        <router-link to="/home">
          <el-menu-item index="0">
            <i class="fa fa-margin fa-server"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <template v-for="item in items">
            <el-submenu v-if="item.children" :index="item.path" :key="item.path">
              <template slot="title">
                <i :class="'fa fa-margin'+item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                <el-menu-item :index="citem.path">
                  <span slot="title">{{citem.name}}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import backtest from './components/backtest.vue'
export default {
  name: "navigation",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "回测详情",
          path: "/backtest",
          children: [{ path: "/backtest", name: "回测详情" }]
        },
        {
          icon: "fa-asterisk",
          name: "交易信息",
          path: "/transactions",
          children: [{ path: "/transactions", name: "交易信息" }]
        },
        {
          icon: "fa-asterisk",
          name: "交易信息",
          path: "/position",
          children: [{ path: "/position", name: "持仓信息" }]
        }
      ]
    };
  }
};
</script>

<style scoped>
.menu_page{
    position: fixed;
    top: 71px;
    left: 0;
    min-height: 100%;
    background-color: #ee1493;
    z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
