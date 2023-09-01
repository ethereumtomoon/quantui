<!-- 
  这是 Laoquant 话题展示区域楼主话题的区域，楼主的话题将会被展示在这里，位于话题展示区域最上方
 -->
<script setup lang="ts">
// 楼主话题的 Footer
import TopicFooter from '../components/TopicFooter.vue'
// 楼主话题的状态
import TopicStatus from '../components/TopicStatus.vue'
// 楼主话题是否重新编辑
import Rewrite from '../components/Rewrite.vue'
// 楼主话题的内容
import TopicContent from '../components/TopicContent.vue'
// 楼主的信息
import Userinfo from '../components/Userinfo.vue'
// 楼主的发帖时间
import Time from '../components/Time.vue'
// 楼主话题的标签
import Tags from '../components/Tags.vue'
// 楼主话题的头部，标题
import TopicHeader from '../components/TopicHeader.vue'
// 楼主标志
import Floor from '../components/Floor.vue'
//import { topic } from '@/forum/pool/components/topic'
const props = defineProps(["data"])
const tp=props.data
</script>

<template>
  <!-- 楼主话题容器 -->
  <div class="container">
    <Floor :width="'70px'" :font="'37px'" />
    <!-- 楼主话题内容区的容器 -->
    <div class="content-container">
      <TopicHeader />
      <!-- 楼主话题内容区 -->
      <div class="content">
        <!-- 内容区的顶部 -->
        <div class="content-top">
          <Tags />
          <Time :data="tp.time"/>
        </div>
        <!-- 内容区的中部 -->
        <div class="content-center">
          <Userinfo />
          <TopicContent :data="tp.content"/>
        </div>
        <!-- 内容区的底部 -->
        <div class="content-bottom">
          <TopicStatus />
          <Rewrite />
        </div>
      </div>
      <TopicFooter :data="tp"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主话题容器 */
.container {
  width: 100%;
  /* 楼主话题最小高度 */
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 楼主话题距离其它人话题的距离 */
  margin-bottom: 5px;
  /* TODO: */
  /* 楼主话题背景图 */
}
/* 楼主话题内容区的容器 */
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid var(--forum-blue-1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--forum-trans-white-5);
  box-sizing: border-box;
}

/* 楼主话题内容区 */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 内容区的顶部 */
.content-top {
  width: 100%;
  height: 40px;
  display: flex;
  text-align: center;
  /* 时间和标签分居两侧 */
  justify-content: space-between;
  /* 下面的分割线 */
  border-bottom: 1px solid var(--forum-blue-1);
  box-sizing: border-box;
}

/* 楼主的话题和楼主的信息容器 */
.content-center {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid var(--forum-blue-1);
  box-sizing: border-box;
}
/* 内容区的底部 */
.content-bottom {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--forum-blue-1);
}

@media (max-width: 1000px) {
  .content-top {
    flex-direction: column;
  }
}
</style>
