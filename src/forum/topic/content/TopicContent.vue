<!-- 
  Laoquant 的话题界面

  右边展示的所有话题，可以一直向下滚动

  页面被拆成 3 个大组件，这是话题部分
 -->
<script setup lang="ts">
import TopicMaster from './master/TopicMaster.vue'
import TopicOthers from './others/TopicOthers.vue'
let topic={
    index: 1,
    title: '1',
    content: '01',
    view: 1007,
    like: 1007,
    time: '12/06/2023',
    reply:[{index: 1,
    title: '1',
    content: '01-01',
    view: 1007,
    like: 1007,
    time: '12/06/2023',
    tags:["0101","0102"],
    lastedittime:'12/08/2023',
    comments:[{
      username:"01-01-01",
      text:"01-01"
    },{
      username:"01-01-02",
      text:"01-02"
    }]},{index: 2,
    title: '2',
    content: '01-02',
    view: 1007,
    like: 1007,
    time: '12/06/2023',
    tags:["0103","0104"],
    lastedittime:'12/08/2023',
    comments:[{
      username:"01-02-01",
      text:"02-01"
    },{
      username:"01-02-02",
      text:"02-02"
    }]}
  ]
  }
</script>
<template>
  <div class="content-right-part">
    <TopicMaster :data="topic"/>
    <TopicOthers :data="topic.reply"/>
  </div>
</template>
<style scoped>
/* 右侧内容区 */
.content-right-part {
  height: 100%;
  width: 1px;
  flex-grow: 4;
  /* 右侧内容区为弹性盒（用户可以一直向下滑） */
  display: flex;
  flex-direction: column;
}
</style>
