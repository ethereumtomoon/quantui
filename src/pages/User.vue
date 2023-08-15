<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="昵称">
        <el-text v-model="form.name" />
        <el-button>登出</el-button>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pw" disabled/>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="修改密码" name="1">
              <div>原密码</div>
              <el-input v-model="psw1" type="password" class="psw1"/>
              <div>确认密码</div>
              <el-input v-model="psw2" type="password" class="psw2"/>
              <el-button @click="changepassword()">确认</el-button>
            </el-collapse-item>
        </el-collapse>
      </el-form-item>
      <el-form-item label="积分余额">
        <el-text v-model="form.points" />
        <el-button @click="">充值</el-button>
    </el-form-item>
    </el-form>
</template>
<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: 'Username',
  points: '',
  date1: '',
  date2: '',
  pw:'********',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
import { ref } from 'vue'
const psw1 = ref('')
const psw2=ref('')
const changepassword=()=>{
    if (psw1==psw2)
        alert("已更新密码")
    else alert("两次输入不一致，请重新输入")
}
const onSubmit = () => {
  console.log('submit!')
}
</script>