<template>
  <div class="box_out">
    <div class="box_in">
      <div class="login-media">
        <el-image :src="picUrl" class="login-media__img" fit="cover"></el-image>
      </div>
      <div class="login-form">
        <el-form :model="user" :rules="rules" class="login-form__inner" ref="signinRef">
          <div style="font-size: 2rem;color: white;font-weight: bold; text-align: center;margin: 30px auto 30px;">欢迎登录</div>
          <el-form-item prop="email">
            <el-input :prefix-icon="Message" placeholder="请输入邮箱" v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" show-password placeholder="请输入密码" v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item prop="validcode">
            <div class="captcha-row">
              <el-input :prefix-icon="CircleCheck" style="flex: 1" placeholder="请输入验证码" v-model="user.validcode"> </el-input>
              <div style="flex: 1;"><el-image :src="captchaUrl" style="cursor: pointer;" @click="getCaptcha"></el-image><div style="color: white;cursor: pointer;" @click="getCaptcha">看不清，换一张</div></div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="login">
              登 录
            </el-button>
          </el-form-item>
          <div style="display: flex; font-weight: bold;">
            <div style="flex: 1;color: white;">还没有账号？请<span style="color: #ffa500;cursor: pointer;" @click="router.push('/register')">注册</span></div>
            <div style="flex: 1;color: #ffa500;text-align: right;cursor: pointer;">忘记密码</div>
          </div>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { Message, Lock, CircleCheck } from '@element-plus/icons-vue';
import { asset } from '@/utils/asset.js';
import request from '@/utils/request';

const router = useRouter();
const signinRef = ref(null);
const user = ref({
  email: '',
  password: '',
  validcode: '',
});
const picUrl = asset('images/login_reg/playagnow.webp');
const captchaUrl = ref('');

const validPassword = (rule, value, callback) => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  if (!reg.test(value)) {
    callback(new Error('密码必须是由6-20位字母+数字组合'));
  } else {
    callback();
  }
};

const confirmValidcode = (rule, value, callback) => {
  request.post('/verifyCaptcha', { validcode: value }).then((res) => {
    if (res.data.code === '200') {
      callback();
    } else {
      captchaUrl.value = '/genCaptcha?time=' + new Date().getTime();
      callback(new Error(res.data?.msg));
    }
  });
};

const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { whitespace: true, message: '不能包含空格', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { whitespace: true, message: '不能包含空格', trigger: 'blur' },
    { validator: validPassword, trigger: 'blur' },
  ],
  validcode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { whitespace: true, message: '不能包含空格', trigger: 'blur' },
    { validator: confirmValidcode, trigger: 'blur' },
  ],
};

function login() {
  signinRef.value.validate((valid) => {
    if (valid) {
      request.post('/user/signin/', user.value).then((res) => {
        if (res.data.code === '200') {
          ElMessage.success('登录成功');
          localStorage.setItem('user-token', JSON.stringify(res.data.data));
          router.push('/playag');
        } else {
          ElMessage.error(res.data.msg);
        }
      });
    }
  });
}

function getCaptcha() {
  captchaUrl.value = '/genCaptcha?time=' + new Date().getTime();
}

onMounted(() => {
  getCaptcha();
});
</script>

<style src="@/assets/css/login.css" scoped>
</style>
