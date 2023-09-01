<!-- 这是话题的内容区 -->
<script setup lang="ts">
const props = defineProps(["data"])
</script>

<template>
  <!-- 内容区右侧的话题展示区 -->
  <div class="text">
    {{ props.data }}
  </div>
</template>

<style lang="scss" scoped>
/* 内容区右侧的话题展示区 */
.text {
  font-size: 15px;
  padding: 17px;
  border-left: 1px solid var(--forum-blue-1);
  color: var(--forum-font-color-3);
}
</style>
