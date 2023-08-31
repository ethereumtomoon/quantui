<script setup lang="ts">
import { tags } from '@/types/pool/tags'
console.log(tags)
import { ref } from "vue"
</script>

<template>
  <!-- 话题池顶部交互栏 -->
  <div class="pool-nav-bar">
    <!-- 热门话题标签，根据所有话题的总标签数推断 -->
    <el-button class="nav-tags" v-for="kun in tags" :key="kun.index">{{
      kun.name
    }}</el-button>
  </div>
</template>

<style lang="scss" scoped>
/* 话题池顶部交互栏 */
.pool-nav-bar {
  /* 换行弹性盒 */
  display: flex;
  flex-wrap: wrap;
  /* 居中 */
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
/* 热门话题标签 */
.nav-tags {
  /* 单个标签不换行 */
  white-space: nowrap;
  /* 距离其它帖子的距离 */
  font-size: 14px;
  margin: 2px;
  padding: 7px;
  //background-color: blue;
  border-radius: 17px;
  cursor: pointer;
}
</style>
