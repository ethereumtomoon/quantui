<!-- 话题的头部区域，标题等 -->
<script setup lang="ts"></script>

<template>
  <!-- 楼主话题头部 -->
  <div class="master-topic-header">
    <!-- 楼主话题标题 -->
    <div class="master-topic-title">
      texttexttexttexttexttexttexttext
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主话题头部 */
.master-topic-header {
  width: 100%;
  height: 70px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--forum-font-color-3);
  font-size: 17px;
  border-bottom: 1px solid var(--forum-blue-1);
  box-sizing: border-box;
}
/* 楼主话题标题 */
.master-topic-title {
  font-size: 17px;
  font-weight: bold;
  /* 文字间距 */
  letter-spacing: 1px;
}
</style>
