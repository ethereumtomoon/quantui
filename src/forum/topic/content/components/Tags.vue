<!-- 把所有话题的所有 Tag 组合起来形成的一个区域 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps(["data"])
const tags=props.data
</script>

<template>
  <!-- 话题的标签 -->
  <div class="tags">
    <!-- 标签的图标字体 -->
    <Icon class="tag" icon="mingcute:tag-2-fill" />
    <ul>
      <template v-for="tag in tags">
      <li>{{tag}}</li>
    </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 话题的标签 */
.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--forum-font-color-3);
  /* 单个标签的盒子 */
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-left: 5px;
      font-size: small;
      padding: 2px;
      background-color: var(--forum-blue-0);
      overflow: hidden;
      white-space: nowrap;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: var(--forum-red-0);
        transition: 0.2s;
      }
    }
  }
}
/* 图标字体 */
.tag {
  font-size: 23px;
  margin: 0 20px;
  color: var(--forum-blue-4);
}
</style>
