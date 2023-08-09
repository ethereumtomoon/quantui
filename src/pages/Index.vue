<template>
  <el-container class="index">
    <el-header>
      <p class="title" style="font-size: 26px; line-height: 60px;">策略列表</p>
      <div class="btns" style="line-height: 60px;">
        <el-button type="text" @click="$router.push({path: '/notebook'})">研究环境</el-button>
        <el-button type="text" icon="el-icon-download" @click="logout" style="color: #F56C6C; margin-left: 20px;">登出</el-button>
      </div>
    </el-header>
    <el-main>
      <div class="top">
        <el-button size="small" type="primary" icon="el-icon-plus" @click="add">新增策略</el-button>
      </div>
      <el-table
        ref="tableList"
        :data="dataList"
        style="width: 100%; margin-top: 20px;">
        <el-table-column
          type="index"
          width="55">
        </el-table-column>
        <el-table-column
          prop="strategy_name"
          label="策略名称">
        </el-table-column>
        <el-table-column
          label="最新修改时间">
          <template slot-scope="scope">{{ scope.row.update_time }}</template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="toEdit(scope.row)" type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  created () {},
  data () {
    return {
      dataList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    logout () {
      this.$confirm('确定退出账号吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.$axios.get(this.sApi.suxun + '/user/logout').then((response) => {
          let res = response.data
          if (res.result === 'success') {
            this.setCookie('token', '')
            this.setCookie('username', '')
            this.$router.push({path: 'login'})
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.tableList.toggleRowSelection(row)
        })
      } else {
        this.$refs.tableList.clearSelection()
      }
    },
    getData () {
      let userId = this.getCookie('userId')
      if (userId) {
        var data = {
          userId: userId
        }
        this.$axios.post(this.sApi.suxun + '/backtest/getStrategyId', data).then((response) => {
          let res = response.data
          if (res.code === 200) {
            this.dataList = res.data
          } else {
            this.$alert('查询失败', '提示', {
              type: 'error',
              confirmButtonText: '确定',
              callback: action => {}
            })
          }
        })
      } else {
        this.$alert('登录失效, 请重新登录', '提示', {
          type: 'error',
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/login'})
          }
        })
      }
    },
    add () {
      let userId = this.getCookie('userId')
      if (userId) {
        var data = {
          userId: userId
        }
        this.$axios.post(this.sApi.suxun + '/backtest/addStrategyFile', data).then((response) => {
          let res = response.data
          if (res.code === 200) {
            this.$router.push({path: '/edit', query: { id: res.data.strategy_id }})
          } else {
            this.$alert('新增失败', '提示', {
              type: 'error',
              confirmButtonText: '确定',
              callback: action => {}
            })
          }
        })
      } else {
        this.$alert('登录失效, 请重新登录', '提示', {
          type: 'error',
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/login'})
          }
        })
      }
    },
    toEdit (row) {
      this.$router.push({path: '/edit', query: { id: row.strategy_id, name: row.strategy_name }})
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.index {height: 100%;}
