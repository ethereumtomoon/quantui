<!-- 重新编辑话题信息显示 -->
<script setup lang="ts">
const props = defineProps(["data"])
</script>

<template>
  <!-- 是否重新编辑 -->
  <span>在{{ props.data }}重新编辑</span>
</template>

<style lang="scss" scoped>
/* 内容区域下方字体样式 */
span {
  margin: 0 10px;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--forum-font-color-3);
}
</style>
