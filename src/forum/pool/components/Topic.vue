<script setup lang="ts">

import { useLQSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { randomNum } from '@/utils/random'
import { onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
// 使用设置面板的 store
//const settingsStore = useLQSettingsStore()
//const { showLQMode } = storeToRefs(settingsStore)

const light = `rgba(${randomNum(200, 255)}, ${randomNum(200, 255)}, ${randomNum(
  200,
  255
)}, ${randomNum(30, 70) / 100})`

const dark = `rgba(${randomNum(0, 55)}, ${randomNum(0, 55)}, ${randomNum(
  0,
  55
)}, ${randomNum(30, 70) / 100})`

var color = ref(light)

// 初始化色彩
/*onMounted(() => {
  if (showLQMode.value === 'dark') {
    color.value = dark
  } else {
    color.value = light
  }

  watch(showLQMode, () => {
    if (showLQMode.value === 'dark') {
      color.value = dark
    } else {
      color.value = light
    }
  })
})*/

const props = defineProps(['data', 'itemStyle'])

</script>

<template>
  <!-- 单个话题容器 -->
  <div class="topic">
    <!-- 话题的标题 -->
    <div class="title">
      {{ props.data.title }}
    </div>
    <!-- 话题的内容区 -->
    <div class="content">{{ props.data.content }}</div>
    <!-- 话题的状态 -->
    <div class="status">
      <!-- 浏览数 -->
      <span
        ><Icon icon="ic:outline-remove-red-eye" />{{ props.data.view }}</span
      >
      <!-- 点赞数 -->
      <span
        ><Icon icon="line-md:thumbs-up-twotone" />{{ props.data.like }}</span
      >
    </div>
    <!-- 发帖时间 -->
    <div class="time">
      <Icon class="hourglass" icon="eos-icons:hourglass" />
      <div>{{ props.data.time }} 发布</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 话题池单个话题 */
.topic {
  /* 单个话题距下方的距离 */
  margin-bottom: 7px;
  /* 竖直方向弹性布局 */
  display: flex;
  flex-direction: column;
  /* Scss random color */
  background-color: v-bind(color);
  border: 1px solid var(--forum-blue-1);
  color: var(--forum-font-color-3);
  cursor: pointer;
  box-shadow: var(--shadow);
  max-width: 300px;
}
.topic:hover {
  background-color: var(--forum-trans-white-2);
}
/* 话题的标题 */
.title {
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 居中 */
  margin: 0 auto;
  margin-top: 7px;
  padding: 0 7px;
  font-weight: bold;
  color: var(--forum-font-color-2);
  flex-shrink: 0;
}
/* 话题的内容区 */
.content {
  overflow: hidden;
  font-size: 14px;
  padding: 0 10px;
  margin: 7px 0;
}
/* 话题的状态 */
.status {
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  margin-bottom: 10px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  flex-wrap: wrap;
  span {
    display: flex;
    align-items: center;
  }
}
.status i {
  color: var(--forum-red-4);
}
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  /* 文字间距 */
  letter-spacing: 1px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
}
.time i {
  margin: 0 5px;
  color: var(--forum-purple-4);
}
</style>
