<template>

  <navigations  name="nav"></navigations>
  <div id="main" style="height: 1200px; width:1500px">
  <router-view/></div>
</template>

<script>
import backtest from './components/backtest.vue'
import navigations from './navigation.vue'
import Alert from '@/components/alert/Alert.vue'
//import vr from 'vue-pythonpad-runner'
console.log(Alert)
export default {
  name: 'App',
  components: {
    backtest,
    navigations,
    Alert
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
