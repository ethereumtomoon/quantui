<script setup lang="ts">
import { useMessageStore } from '@/store/modules/message'

// 导入话题页面 store
import { useTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用话题页面的 store
const settingsStore = useTopicStore()
const { isShowAdvance } = storeToRefs(settingsStore)

const info = useMessageStore()

// 点击发布话题
const handlePublish = async () => {
  const res = await info.alert('AlertInfo.edit.publish', true)
  // TODO:
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    info.info('AlertInfo.edit.publishSuccess')
  } else {
    info.info('AlertInfo.edit.publishCancel')
  }
}

// 点击保存话题
const handleSave = () => {
  // TODO:
  // 这里实现用户的保存逻辑
  info.info('AlertInfo.edit.draft')
}

const handleShowAdvance = () => {
  isShowAdvance.value = !isShowAdvance.value
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <button class="confirm-btn" @click="handlePublish">确认发布</button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">保存草稿</button>

    <!-- 高级选项按钮 -->
    <button class="advance-btn" @click="handleShowAdvance">高级选项</button>
  </div>
</template>

<style lang="scss" scoped>
/* 按钮的容器 */
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
/* 单个按钮的样式 */
.btn-container button {
  margin: 10px 0;
  height: 40px;
  width: 200px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: var(--forum-white);
  }
}
/* 确认按钮的样式 */
.confirm-btn {
  color: var(--forum-blue-4);
  background-color: var(--forum-trans-blue-1);
  border: 1px solid var(--forum-blue-4);
}
.confirm-btn:hover {
  background-color: var(--forum-blue-4);
  transition: 0.1s;
}
/* 保存按钮的样式 */
.save-btn {
  color: var(--forum-pink-4);
  background-color: var(--forum-trans-pink-1);
  border: 1px solid var(--forum-pink-4);
}
.save-btn:hover {
  background-color: var(--forum-pink-4);
  transition: 0.1s;
}
.save-btn:active {
  background-color: var(--forum-pink-3);
  transform: scale(0.8);
}
/* 高级选项按钮的样式 */
.advance-btn {
  color: var(--forum-red-5);
  background-color: var(--forum-trans-red-1);
  border: 1px solid var(--forum-red-5);
}
.advance-btn:hover {
  background-color: var(--forum-red-5);
  transition: 0.1s;
}
.advance-btn:active {
  background-color: var(--forum-red-3);
  transform: scale(0.8);
}
</style>
