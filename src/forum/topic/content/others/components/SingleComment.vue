<!-- 
  这是单个评论的组件
 -->
<!-- 
  ，对这些数据项的描述为：话题序号（话题的发布序号，唯一值， number 类型，从 1 开始排列），话题楼层数（单个话题在话题页面的序列号，为 number），话题内容，话题发布时间（按时间戳返回），话题热度值（一个 number 类型的数值），话题标签（为一个 string 的数组），话题被推数（number 类型的数字），话题浏览数（number 类型的数字），话题点赞数（number 类型的数字），话题被踩数（number 类型的数字），话题回复（类型是一个对象，里面的属性为：（单个回复，对话题的单个回复，为一个对象，里面属性为：（回复人：是一个对象，里面的属性为（回复人的头像：是一张图片，回复人的名字：记录了回复人的名字，是一个 string，回复人的萌萌点：为一个数值），被回复的人：是一个 string，是否重新编辑：为一个 boolean，为真则返回）），单个回复的数量：为一个 number 数字，是对单个回复的计数）
  -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps(["data"])
const comment=props.data
console.log(comment)
</script>

<template>
  <div class="container">
    <!-- 用户头像 -->
    <img src="@/assets/images/KUN.jpg" alt="KUN" />
    <!-- 单个评论的内容区 -->
    <div class="content">
      <!-- 单个评论内容区顶部 -->
      <div class="describe">
        <!-- 顶部左侧名字 -->
        <div class="name">{{comment.username}}评论 @<a href="#"></a></div>
        <!-- 顶部右侧点赞、踩 -->
        <div class="operate">
          <ul>
            <!-- 点赞 -->
            <li>
              <Icon class="icon" icon="line-md:thumbs-up-twotone" />
            </li>
            <!-- 踩 -->
            <li>
              <Icon class="icon" icon="line-md:thumbs-down-twotone" />
            </li>
            <li>
              <Icon class="icon" icon="fa-regular:comment-dots" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 单个评论内容区底部 -->
      <div class="text">
        {{comment.text}}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个评论容器 */
.container {
  display: flex;
  width: 100%;
  margin: 10px 0;
  color: var(--forum-font-color-3);
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
/* 单个评论的内容区 */
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* 单个评论内容区顶部 */
.describe {
  display: flex;
  justify-content: space-between;
}
/* 顶部左侧名字 */
.name {
  font-size: 15px;
  a {
    color: var(--forum-blue-5);
    &:hover {
      text-decoration: underline;
    }
  }
}
.operate ul {
  display: flex;
  align-items: center;
  li {
    margin-right: 10px;
  }
}
.icon {
  color: var(--forum-font-color-2);
}
/* 单个评论 */
.text {
  font-size: 12px;
  margin-right: 10px;
  text-indent: 25px;
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 10; /* 显示 10 行文本 */
}
</style>
