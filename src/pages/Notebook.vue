<template>
  <el-container class="notebook">
    <el-header>
      <p class="title" style="font-size: 26px; line-height: 60px;">研究环境</p>
    </el-header>
    <el-main>
      <iframe src="http://101.34.239.153:10079/" width="100%" height="500px" frameborder="0"></iframe>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'notebook',
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
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notebook {height: 100%;}
