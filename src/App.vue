<template>

  <navigation></navigation>
  <router-view/>
</template>

<script>
import backtest from './components/backtest.vue'
import navigation from './navigation.vue'
export default {
  name: 'App',
  components: {
    backtest,
    navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
