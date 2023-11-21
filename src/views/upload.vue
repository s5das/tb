<template>
<div class="mask" v-show="loading">
  <div class="pop">
      <div class="title">正在请求...</div>
      <div class="loding" v-loading="loading"></div>
      <el-progress class="pro" :text-inside="true" :stroke-width="26" :percentage="pro" />
  </div>
</div>

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
                josn/xml files with a size less than 500kb
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
        <el-button type="primary"  color="#000000" @click="submit"
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
let loading = ref(false)
let pro = ref(0)



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



const clear = () => {
  form.resource = ''
  form.id = ''
  form.verify = ''
}

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

let timer;
let loding_time;
const submit =() =>{
  loading.value = true;
  pro.value = 0;
  loding_time = getRandomArbitrary(10000,30000);
  timer = setInterval(() => {
     pro.value = pro.value + 10;
  }, loding_time/10)
  setTimeout(
    ()=>{
     clearInterval(timer)
     localStorage.setItem('time',JSON.stringify(loding_time))
     router.replace({
        path: '/TB/result',
      })
    },loding_time
  )
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
.mask{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 98;
 .pop{
  position: absolute;
  padding: 40px;
  box-sizing: border-box;
  top: 35vh;
  left: 30vw;
  height: 35vh;
  width: 45vw; 
  background-color: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title{
    font-size: 5vh;
    font-weight: 600;
  }
  .loding{
    height: 8vh;
  }
  .pro{
    width: 20vw;
  }
} 
}

</style>
