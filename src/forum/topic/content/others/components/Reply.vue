<script setup lang="ts"></script>

<template>
  <!-- 上部区域的左边 -->
  <div class="reply">
    <!-- TODO: 跳转到页面中话题的位置 -->
    <span>回复给@<router-link to="#">textext</router-link></span>
  </div>
</template>

<style lang="scss" scoped>
/* 上部区域的左边 */
.reply {
  font-size: 17px;
  color: var(--forum-font-color-3);
  a {
    color: var(--forum-blue-5);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
}
</style>
