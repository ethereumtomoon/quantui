<template>
  <div class="register">
    <div class="box">
      <ul class="form-box">
        <li>
          <h2 style="font-size: 20px;">注册</h2>
        </li>
        <li>
          <span class="requiredIcon">*</span>
          <el-input placeholder="请输入手机号" v-model="phone" prefix-icon="el-icon-mobile" @keyup.enter="nextInput(1)" clearable style="width: 222px;"></el-input>
        </li>
        <li>
          <span class="requiredIcon">*</span>
          <el-input placeholder="请输入用户名" v-model="name" prefix-icon="el-icon-user" @keyup.enter="nextInput(1)" clearable style="width: 222px;"></el-input>
        </li>
        <li>
          <el-input placeholder="请输入邮箱" v-model="email" @keyup.enter="nextInput(1)" clearable style="width: 222px;"></el-input>
        </li>
        <li>
          <span class="requiredIcon">*</span>
          <el-input :type="isShow1 ? 'text' : 'password'" placeholder="输入密码" v-model.lazy="pwd1" @keyup.enter="nextInput(2)" style="width: 222px;">
            <img slot="prefix" class="pwdIcon" src="../../static/img/icon/pwd.png" alt="">
            <i slot="suffix" class="el-input__icon el-icon-view" :style="isShow1 && 'color: #409EFF;'" @click="seePwd(1)"></i>
          </el-input>
        </li>
        <li>
          <span class="requiredIcon">*</span>
          <el-input :type="isShow2 ? 'text' : 'password'" placeholder="确认密码" v-model.lazy="pwd2" @keyup.enter="submit" style="width: 222px;">
            <img slot="prefix" class="pwdIcon" src="../../static/img/icon/pwd.png" alt="">
            <i slot="suffix" class="el-input__icon el-icon-view" :style="isShow2 && 'color: #409EFF;'" @click="seePwd(2)"></i>
          </el-input>
        </li>
        <li>
          <div class="btn on" @click="submit">注册</div>
          <p class="err"><i :class="{'el-icon-error': err !== ''}"></i>{{err}}</p>
          <p class="forget">
            <span>已有账号？<router-link to="/login" class="btn-text">去登录</router-link></span>
          </p>
        </li>
      </ul>
    </div><!-- <span class="vm"></span> -->
    <div class="footer-txt">
      <p>
        <span class="mr">版权所有©2017-{{new Date().getFullYear()}}</span>
        <span>上海老泉科技有限公司</span>
      </p>
      <p>
        <span><a href="https://beian.miit.gov.cn/">沪ICP备2022021022号-2</a></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      phone: '', // 13764618384
      name: '',
      email: '',
      pwd1: '',
      pwd2: '',
      err: '',
      isShow1: false,
      isShow2: false
    }
  },
  watch: {
    phone (newVal) {
      if (newVal === '') {
        this.phoneErr = '请输入您的手机号码'
      } else if (newVal.length !== 11 || !this.checkNumber(newVal)) {
        this.phoneErr = '手机号码格式不正确,请重新输入'
      } else {
        this.phoneErr = ''
      }
    },
    pwd1 (newVal) {
      if (!this.isPasswd(newVal)) {
        this.err = '6-20位字母/数字/下划线'
      } else {
        this.err = ''
      }
    },
    pwd2 (newVal) {
      if (newVal !== this.pwd1) {
        this.err = '密码输入不一致'
      } else {
        this.err = ''
      }
    },
    deep: true
  },
  methods: {
    isPasswd (s) { // 只能输入6-20个字母、数字、下划线
      var patrn = /^(\w){6,20}$/
      if (!patrn.test(s)) return false
      return true
    },
    checkNumber (theObj) { // 验证字符串是否是数字
      var reg = /^[0-9]+.?[0-9]*$/
      if (reg.test(theObj)) {
        return true
      }
      return false
    },
    seePwd (idx) {
      if (idx === 1) this.isShow1 = !this.isShow1
      if (idx === 2) this.isShow2 = !this.isShow2
    },
    nextInput (idx) {
      // eslint-disable-next-line no-undef
      $($('li > input')[idx]).focus()
    },
    submit () {
      if (this.phone === '' || this.phoneErr) {
        this.err = this.phoneErr || '手机号不能为空'
      } else if (this.name === '') {
        this.err = '用户名不能为空'
      } else if (this.pwd1 === '' || this.pwd2 === '') {
        this.err = '密码不能为空'
      } else if (this.pwd1 !== this.pwd2) {
        this.err = '密码输入不一致'
      } else if (this.err === '') {
        var data = {
          'phone': this.phone,
          'name': this.name,
          'email': this.email,
          'password': this.$SHA256(this.pwd1).toString(), // 加密
          'password_confirm': this.$SHA256(this.pwd2).toString() // 加密
        }
        this.$axios.post(this.sApi.suxun + '/user/register', data/* this.$qs.stringify(data), {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
          }
        } */).then((response) => {
          var res = response.data
          if (res.name !== '') {
            this.$confirm('注册成功, 是否去登录账号?', '提示', {
              confirmButtonText: '登录',
              cancelButtonText: '取消',
              type: 'success'
            }).then(() => {
              this.$router.push({path: 'login'})
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              })
            })
          } else {
            this.$alert('注册失败!', '提示', {
              type: 'error',
              confirmButtonText: '确定',
              callback: action => {}
            })
          }
        })
      }
    }
  },
  mounted () {
    console.log(SHA256)
    console.log(this.$SHA256('123456').toString())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {position:fixed; width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #ffffff url(../../static/img/bg.png) no-repeat center / cover;}
.register .box {text-align:center; box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5); border-radius: 20px; overflow: hidden;}
.register .box .form-box {width: 600px; height: 100%; background: #fff; padding: 50px 70px 10px; display: flex; flex-direction: column; align-items: center;}
.register .box .form-box li input {width: 222px; height: 36px; border: 1px solid #dfdcdb; border-top-width: 3px; border-bottom-width: 2px; border-radius: 4px; background: #fcfafafa; padding: 0 10px;}
.register .box .form-box li {margin-bottom: 22px; position: relative;}
.register .box .form-box li:nth-child(1) {margin-bottom: 36px;}
.register .btn {width: 222px; height: 40px; line-height: 40px; margin: 10px auto 45px; background: #409eff; border-radius: 6px; color: #fff; cursor: pointer;}
.register .err {width: 100%; position: absolute; top: 58px; font-size: 14px; color: red; text-align: center;}
.register .err i {margin-right: 5px;}
.register .box .form-box li:nth-child(6) a {display: inline-block; width: 60px; font-size: 12px; color: #666; position: relative; line-height: 12px;}
.register .box .form-box li:nth-child(6) a:after {content: ''; display: inline-block; height: 12px; border-right: 1px solid #999; position: absolute; right: -3px; top: 1px;}
.register .box .form-box li:nth-child(6) a:last-child:after {border: none;}
.register .lock-icon {position: absolute; right: 10px; top: 10px; cursor: pointer;}
.register .pwdIcon {width: 14px; position: absolute; top: 13px; left: 5px;}

.btn-text {color: #409eff;}
.requiredIcon {position: absolute; left: -10px; top: 5px; color: red;}
</style>
