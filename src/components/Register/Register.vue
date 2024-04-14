<template>
  <div class="box_out">
    <div class="box_in">
      <div style="flex: 1; display: flex;align-items: center;justify-content: center;">
        <el-form :model="user" :rules="rules" style="width: 80%;" ref="signupRef">
          <div style="font-size: 2rem;color: white;font-weight: bold; text-align: center;margin: 30px auto 30px;">欢迎注册</div>
          <el-form-item prop="steamid">
            <el-input prefix-icon="el-icon-user-solid" placeholder="请输入SteamID" v-model="user.steamid"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input prefix-icon="el-icon-user" placeholder="请输入游戏id" v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input prefix-icon="el-icon-message" placeholder="请输入邮箱" v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" show-password placeholder="请输入密码" v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item prop="confirmpassword">
            <el-input prefix-icon="el-icon-lock" show-password placeholder="请重复输入密码" v-model="user.confirmpassword"></el-input>
          </el-form-item>
          <el-form-item prop="validcode">
            <div style="display: flex;align-items:flex-start;justify-content: space-between">
              <el-input prefix-icon="el-icon-circle-check" style="flex: 1" placeholder="请输入验证码" v-model="user.validcode"> </el-input>
              <div style="flex: 1;"><el-image :src="captchaUrl" style="cursor: pointer;" @click="getCaptcha"></el-image><span style="color: white;cursor: pointer;" @click="getCaptcha">看不清，换一张</span></div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="register">
              注 册
            </el-button>
          </el-form-item>
          <div style="display: flex; font-weight: bold;">
            <div style="flex: 1;color: white;">已经有账号？请<span style="color: #ffa500;cursor: pointer;" @click="$router.push('/login')">登录</span></div>
            <div style="flex: 1;color: #ffa500;text-align: right;cursor: pointer;">忘记密码</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'

export default {
  name: "Register",
  data() {
    // 验证SteamID格式规则
    const confirmSteamid = (rule, value, callback) => {
      let reg = /^STEAM_\d:\d:\d{0,10}$/;
      if (!reg.test(value)) {
        callback(new Error('请输入正确的SteamID'));
      } else {
        callback();
      }
    };

    // 验证游戏ID格式规则
    const confirmName = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_]{4,25}$/;
      if (!reg.test(value)) {
        callback(new Error('游戏ID必须是只由4到25位的字母、数字、下划线组成'));
      } else {
        callback();
      }
    };

    // 验证密码格式规则
    const validPassword = (rule, value, callback) => {
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if (!reg.test(value)) {
        callback(new Error('密码必须是由6-20位字母+数字组合'));
      } else {
        callback();
      }
    };

    // 验证重复密码格式规则
    const confirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    const confirmValidcode = (rule, value, callback) => {
      request.post('/verifyCaptcha', { validcode: value }).then((res) => {
        // console.log(res);
        // console.log(res.data.code);
        if (res.data.code === "200") {
          callback();
        } else {
          this.captchaUrl = '/genCaptcha?time=' + new Date().getTime();
          callback(new Error(res.data?.msg));
        }
      })
    };


    return {
      captchaUrl: '',
      picUrl: require('@/assets/images/login_reg/playagnow.webp'),

      user: {
        steamid: '',
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        validcode: '',
      },
      rules: {
        steamid: [
          { required: true, message: '请输入SteamID', trigger: 'blur' },
          { whitespace: true, message: '不能包含空格', trigger: 'blur' },
          { validator: confirmSteamid, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入游戏id', trigger: 'blur' },
          { whitespace: true, message: '不能包含空格', trigger: 'blur' },
          { validator: confirmName, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { whitespace: true, message: '不能包含空格', trigger: 'blur' },
          { validator: validPassword, trigger: 'blur' }
        ],
        confirmpassword: [
          { whitespace: true, message: '请输入正确的邮箱地址', trigger: 'blur' },
          { validator: confirmPassword, trigger: 'blur' },

        ],
        validcode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { whitespace: true, message: '不能包含空格', trigger: 'blur' },
          { validator: confirmValidcode, trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    register() {
      this.$refs['signupRef'].validate((valid) => {
        if (valid) {
          request.post('/signup', this.user).then((res) => {
            // console.log(res);
            // console.log(res.data.code);
            if (res.data.code === "200") {
              this.$router.push('/login');
              this.$message.success('注册成功，请登录');
            } else {
              this.$message.error(res.msg);
            }
          })
        }
      })
    },
    getCaptcha() {
      this.captchaUrl = "/genCaptcha?time=" + new Date().getTime();
    }
  },
  mounted() {
    document.title = " 注册 - CN-AGHL";
    this.getCaptcha();
  }
}

</script>
<style src="@/assets/css/register.css" scoped>
</style>