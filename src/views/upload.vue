<template>
  <div class="main">
    <div class="form">
      <div class="box1">
        <div class="line">
          <img src="../assets/a.svg" alt="" class="icon" />
          <div>身份选择</div>
        </div>

        <div class="content">
          <el-radio-group v-model="form.resource">
            <el-radio label="sender" />
            <el-radio label="receiver" />
          </el-radio-group>
        </div>
      </div>
      <div class="box1">
        <div class="line">
          <img src="../assets/b.svg" alt="" class="icon" />
          <div>合作方用户ID</div>
        </div>

        <div class="content">
          <el-input v-model="form.id" />
        </div>
      </div>
      <div class="box1">
        <div class="line">
          <img src="../assets/c.svg" alt="" class="icon" />
          <div>上传本地数据集(TXT/EXCEL/CSV/JSON)</div>
        </div>

        <div class="content">
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </div>
      </div>
      <div style="margin-top: 30vh">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-input
              v-model="form.verify"
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
      </div>
      <div style="display: flex">
        <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="openFullScreen1"  color="#000000"
          >提交</el-button
        >
        <el-button type="primary" @click="clear" color="#d90101"
          >重置</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import sIdentify from '../components/sIdentify.vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElLoading } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()


let form = reactive({
  resource: '',
  id: '',
  verify: ''
})

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

const checkCode = () => {
  if (form.verify !== codeofverify.value) {
    console.log('error')
  } else {
    console.log('success')
  }
}


const clear = () => {
  form.resource = ''
  form.id = ''
  form.verify = ''
}


const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
    router.replace({
        path: '/TB/result'
      })
  }, 10000)
}

</script>

<style lang="less" scoped>
.main {
  height: 93vh;
  background: url('../assets/bg1.png');

  .form {
    padding: 3vh;
    .box1 {
      height: 15vh;
      width: 30vw;
      .line {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
