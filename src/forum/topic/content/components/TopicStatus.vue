<!-- 话题的状态区域，显示话题的状态为正常或是被封禁 -->
<script setup lang="ts"></script>

<template>
  <!-- 话题状态 -->
  <div>话题状态：<span>正常</span></div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  color: var(--forum-font-color-3);
}
/* 话题状态 */
span {
  width: 30px;
  padding: 1px;
  background-color: var(--forum-green-4);
  color: var(--forum-white);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
