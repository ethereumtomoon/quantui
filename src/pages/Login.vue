<template>
  <div class="login">

    <div class="box">
      <ul class="form-box">
        <li>
          <h2 style="font-size: 20px;">登录</h2>
        </li>
        <li>
          <!-- <span class="title">账号</span> -->
          <el-input type="text" placeholder="请输入手机号 / 用户名" v-model="user" @keyup.enter="nextInput" prefix-icon="el-icon-user" clearable style="width: 222px;"></el-input>
          <p v-if="err.indexOf('账号') > -1" class="err"><i :class="{'el-icon-error': err != ''}"></i>{{err}}</p>
        </li>
        <li>
          <!-- <span class="title">密码</span> -->
          <el-input :type="isShow ? 'text' : 'password'" placeholder="请输入密码" v-model="pwd" @keyup.enter="login" style="width: 222px;">
            <img slot="prefix" class="pwdIcon" src="../../static/img/icon/pwd.png" alt="">
            <i slot="suffix" class="el-input__icon el-icon-view" :style="isShow && 'color: #409EFF;'" @click="seePwd"></i>
          </el-input>
          <p v-if="err.indexOf('密码') > -1" class="err"><i :class="{'el-icon-error': err != ''}"></i>{{err}}</p>
        </li>
        <li>
          <div class="btn on" @click="login">登录</div>
        </li>
        <li>没有账号? <router-link to="/register" class="btn-text">去注册</router-link></li>
      </ul>
    </div>

    <!-- 正在登录 -->
    <el-dialog :close-on-click-modal="false" class="myDialog" :show-close='false' :visible.sync="dialogTableVisible">
      <div class="loading-box">
        <i class="el-icon-loading"></i><br>
        <span>loading...</span>
      </div>
    </el-dialog>

    <div class="footer-txt">
      <p>
        <span>版权所有©2017-{{new Date().getFullYear()}}</span>
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
  name: 'login',
  data () {
    return {
      user: '', //  18888888888 15946891588 13764618384  13761876603
      pwd: '', //  123456 admin123
      err: '',
      dialogTableVisible: false,
      isShow: false
    }
  },
  watch: {
    user (newVal) {
      if (newVal) this.err = ''
    }
  },
  methods: {
    nextInput (e) {
      // eslint-disable-next-line no-undef
      $($('li > input')[1]).focus()
    },
    seePwd (e) {
      this.isShow = !this.isShow
    },
    login () {
      if (this.user === '') {
        this.err = '账号不能为空'
      } else if (this.pwd === '') {
        this.err = '密码不能为空'
      } else {
        let isPhone = /^1[3456789]\d{9}$/.test(this.user)
        var data = {
          phone: isPhone ? this.user : '',
          name: !isPhone ? this.user : '',
          password: this.$SHA256(this.pwd).toString()
        }
        this.$axios.post(this.sApi.suxun + '/user/login', data).then((response) => {
          let res = response.data
          if (res.result !== 'success') {
            if (JSON.stringify(res).indexOf('Invalid username or password') > -1) {
              this.$alert('用户名或密码错误', '提示', {
                type: 'error',
                confirmButtonText: '确定',
                callback: action => {}
              })
            }
          } else {
            this.setCookie('token', res.token)
            this.setCookie('username', res.name)
            this.setCookie('userId', res.userId)

            this.checkIsLogin()
            this.$router.push({path: '/'})
          }
        })
      }
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login { position:fixed; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #ffffff url(../../static/img/bg.png) no-repeat center / cover;}
.login .box {text-align:center; box-shadow: 0px 0px 50px 0px rgba(3, 219, 226, 0.5); border-radius: 20px; overflow: hidden;}
.login .box .form-box {width: 600px; height: 100%; background: #fff; padding: 50px 70px 0; display: flex; flex-direction: column; align-items: center;}
.login .box .form-box li input {width: 222px; height: 36px; border: 1px solid #dfdcdb; border-top-width: 3px; border-bottom-width: 2px; border-radius: 4px; background: #fcfafafa; padding: 0 10px;}
.login .box .form-box li {width: 222px; margin-bottom: 38px; position: relative;}
.login .box .form-box li:nth-child(1) {margin-bottom: 46px;}
.login .btn {width: 222px; height: 40px; line-height: 40px; margin: 0 auto; background: #409eff; border-radius: 6px; color: #fff; cursor: pointer;}
.login .err {position: absolute; bottom: -20px; left: 0; font-size: 14px; color: red; text-align: center;}
.login .err i {margin-right: 5px;}
.login .box .form-box li:nth-child(6) a {display: inline-block; width: 60px; font-size: 12px; color: #666; position: relative; line-height: 12px;}
.login .box .form-box li:nth-child(6) a:after {content: ''; display: inline-block; height: 12px; border-right: 1px solid #999; position: absolute; right: -3px; top: 1px;}
.login .box .form-box li:nth-child(6) a:last-child:after {border: none;}
.login .lock-icon {position: absolute; right: 10px; top: 10px; cursor: pointer;}
.login .pwdIcon {width: 14px; position: absolute; top: 13px; left: 5px;}

.loading-box {width: 150px; height: 150px; background: #eee; border-radius: 10px;}
.loading-box i {font-size: 50px; line-height: 130px;}
.loading-box span {position: relative; top: -30px; font-size: 18px;}

.btn-text {color: #409eff;}
</style>
