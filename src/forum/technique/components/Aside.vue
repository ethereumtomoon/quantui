<script setup lang="ts">
import Tags from './Tags.vue'
import Footer from '@/components/Footer.vue'
import SearchBox from '@/components/SearchBox.vue'
</script>

<template>
  <!-- 侧边的交互栏 -->
  <div class="aside">
    <div class="aside-container">
      <!-- 页面的标题 -->
      <div class="page-title">技术交流</div>
      <!-- 侧边的搜索框 -->
      <div class="search">
        <SearchBox style="height: 40px; width: 100%; border: none" />
      </div>
      <!-- 推荐标签 -->
      <div class="recommend">
        <span>策略</span>
        <span>行情讨论</span>
        <span>其他</span>
      </div>
      <!-- 热门标签 -->
      <Tags />
      <!-- 版权 -->
      <Footer
        style="
          position: absolute;
          bottom: 2%;
          left: 10%;
          font-size: 15px;
          /* 文字间距 */
          letter-spacing: 1px;
          line-height: 20px;
        "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边的交互栏 */
.aside {
  /* 固定宽度 */
  width: 200px;
  height: 100%;
  background-color: var(--forum-trans-white-5);
  border: 1px solid var(--forum-trans-blue-4);
  box-sizing: border-box;
  border-radius: 5px;
}
/* 侧边栏容器，调透明色用 */
.aside-container {
  height: 100%;
  background: linear-gradient(
    var(--forum-trans-blue-0),
    var(--forum-trans-pink-0)
  );
  display: flex;
  flex-direction: column;
  /* 相对于版权定位 */
  position: relative;
  border-radius: 5px;
}
/* “技术交流几个字” */
.page-title {
  /* 固定高度 */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: var(--forum-blue-3);
  font-style: italic;
  text-shadow: 1px 1px 3px var(--forum-red-4);
}
/* 侧边搜索框 */
.search {
  background-color: var(--forum-trans-blue-2);
  display: flex;
  box-sizing: border-box;
}
/* 推荐标签 */
.recommend {
  display: flex;
  flex-direction: column;
}
/* 单个推荐标签的样式 */
.recommend span {
  /* 固定高度 */
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--forum-trans-blue-4);
  cursor: pointer;
}
.recommend span:hover {
  background-color: var(--forum-trans-red-2);
}
</style>
