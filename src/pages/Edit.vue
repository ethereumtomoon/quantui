<template>
  <el-container class="edit">
    <el-header>
      <p class="title" style="font-size: 26px; line-height: 60px;">编辑策略</p>
      <el-button @click="logout">保存</el-button>
    </el-header>
    <el-main>
      main
      <iframe src="http://101.34.239.153:10079/" width="100%" height="500px" frameborder="0"></iframe>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'edit',
  created () {},
  data () {
    return {
      searchWord: '',
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
    getData () {
      var data = {
        userId: 2
      }
      this.$axios.post(this.sApi.suxun + '/backtest/getStrategyId', data).then((response) => {
        let res = response.data
        if (res.code === '200') {
          this.dataList = res.data
        } else {
          this.$alert('查询失败', '提示', {
            type: 'error',
            confirmButtonText: '确定',
            callback: action => {}
          })
        }
      })
    },
    toEdit (id) {
      this.$router.push({path: '/edit', query: { id: id }})
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit {height: 100%;}
