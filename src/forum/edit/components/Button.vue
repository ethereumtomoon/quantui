<script setup lang="ts">
import { useMessageStore } from '@/store/modules/message'
import { ElMessageBox, ElMessage, ElLoading  } from 'element-plus'
import { useRouter } from 'vue-router';
const route = useRouter();
const info = useMessageStore()

import { button } from './button'
let m=this
console.log(m)
const handlePublish = async () => {
  ElMessage.success({
            message: '发布成功',
            center: true
          })
  route.push({path:"/forum/tech"});  
  const res = await info.alert('AlertInfo.edit.publish', true)
  // TODO:
  // 这里实现用户的点击确认取消逻辑
  if (res) {
    info.info('AlertInfo.edit.publishSuccess')
  } else {
    info.info('AlertInfo.edit.publishCancel')
  }

}

const handleSave = () => {
  ElMessage.success({
            message: '草稿已保存',
            center: true
          })
  // TODO:
  // 这里实现用户的保存逻辑
  info.info('AlertInfo.edit.draft')
}
</script>

<template>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->

    <button class="confirm-btn" @click="handlePublish" >确认发布</button>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="handleSave">保存草稿</button>
  </div>
</template>

<style lang="scss" scoped>
/* 按钮的容器 */
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 距离最底端的距离 */
  margin-bottom: 20px;
}
/* 单个按钮的样式 */
.btn-container button {
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
</style>
