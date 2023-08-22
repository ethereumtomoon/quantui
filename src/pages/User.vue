<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="昵称">
        <el-text v-model="form.name" />
        <el-button @click="backtologin()">登出</el-button>
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
//import {router} from '../router/index.ts'
var app=document.getElementById('main')
function backtologin(){
    this.$router.push(`/login`)
}
let child = app.firstChild;
        while (child) {
        app.removeChild(child);
        child = app.firstChild
        }
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
    console.log(psw1._value)
    if (psw1._value==psw2._value)
        alert("已更新密码")
    else alert("两次输入不一致，请重新输入")
}
const onSubmit = () => {
  console.log('submit!')
}
</script>