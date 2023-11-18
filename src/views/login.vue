<template>
  <div class="main">
    <div class="head"></div>
    <div class="body">
      <div class="icon">
        <img src="../assets/icon.png" alt="" />
      </div>
      <div class="des">
        <div style="font-size: 5vh">WELCOME TO</div>
        <div style="font-size: 6vh; font-weight: 600; margin-bottom: 1vh">
          TB-PSI
        </div>
        <div style="font-size: 3vh; margin-bottom: 1vh">获得更多服务请登录</div>
      </div>
      <div class="box">
        <div class="title">用户登录</div>
        <el-form
          :model="formEl"
          ref="form"
          label-width="80px"
          :inline="false"
          :rules="rules"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formEl.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formEl.password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verify">
            <el-row :gutter="20">
              <el-col :span="12" :offset="0">
                <el-input
                  v-model="formEl.verify"
                  placeholder="请输入验证码"
                ></el-input
              ></el-col>
              <el-col :span="12" :offset="0">
                <sIdentify
                  :identifyCode="codeofverify"
                  @click="changecode"
                ></sIdentify>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="onSubmit(form)" color="#000000"
              >登录</el-button
            >
            <el-button type="primary" @click="onSubmit(form)" color="#d90101"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="bottom">
      联系我们：31232321@qq.com
    </div>
  </div>
</template>

<script setup>
import sIdentify from '../components/sIdentify.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 生成验证码
let codes = '1234567890'
const gencode = () => {
  let code = ''
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * codes.length)
    code += codes.slice(index, index + 1)
  }
  return code
}
// 验证码
let codeofverify = ref(gencode())
const changecode = () => {
  codeofverify.value = gencode()
}

const form = ref()
let formEl = reactive({
  username: '',
  password: '',
  verify: ''
})

const checkCode = (rule, value, callback) => {
  if (value !== codeofverify.value) {
    callback(new Error('请输入正确验证码'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  verify: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: checkCode, trigger: 'blur' }
  ]
})

const onSubmit = async (form) => {
  await form.validate((valid) => {
    if (valid) {
      router.replace({
        path: '/TB/main'
      })
    }
  })
}

const keyDown = ()=>{
  onSubmit(form.value)
}

onMounted(() => {
  window.addEventListener('keydown',keyDown);
})


</script>

<style lang="less" scoped>
.main {
  height: 100vh;
  background: url('../assets/bg1.png');
  .head{
    height: 30vh;
  }
  .body {
    display: flex;
    align-items: center;
    .des {
      display: flex;
      flex-direction: column;
      height: 40vh;
      width: 20vw;
      justify-content: center;
      align-items: center;
      margin-left: 5vw;
    }
    .icon{
      height: 40vh;
      width: 20vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 25vw;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25vw;
    height: 40vh;
    border-radius: 20px;
    border: dashed #fff 1px;
    flex-direction: column;
    .title {
      padding: 0.5vh 0.8vw;
      font-size: 3vh;
      color: #fff;
      background: linear-gradient(
          0deg,
          rgba(8, 8, 8, 0.002),
          rgba(245, 4, 4, 0.002)
        ),
        linear-gradient(
          90deg,
          rgb(8, 8, 8)01%,
          rgb(10, 10, 10) 35.01%,
          rgb(241, 1, 1) 100%
        );
      border-radius: 15px;
      font-weight: 600;
    }
  }
  .bottom{
    position: absolute;
    bottom: 1vh;
    left: 2vw;
  }
}
</style>
