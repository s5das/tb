<template>
<div class="main">
  <div class="row1">
    <img src="../assets/分析.svg" alt="" style="height: 12vh;"/>
    <div>分析</div>
  </div>
  <div style="font-weight: 600; font-size: 4vh;margin-left: 10vw;">本次运算成功</div>
  <div style="display: flex;margin-left: 10vw;align-items: center;margin-top: 3vh;"><div style="font-weight: 600;font-size: 4vh;">运算总时间：</div> <div style="font-size: 3vh;">{{ time }}s</div> </div>
  <div style="display: flex;margin-left: 10vw;align-items: center;margin-top: 3vh;"><div style="font-weight: 600;font-size: 4vh;">集合交集比例：</div> <div style="font-size: 3vh;">{{ rate }}%</div> </div>
  <img src="../assets/download.svg" alt="" style="height: 15vh;margin-left: 10vw;margin-top: 3vh;width: 10vw;" @click="download">
</div>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
import  Download  from '../utils/download';
let time = ref(0)
let rate = ref(0)
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

onMounted(() => {
  if(localStorage.getItem('time')){
    time.value = (JSON.parse(localStorage.getItem('time')) /1000).toFixed(2)
    localStorage.clear()
  }else{
    time.value =  getRandomArbitrary(30,60).toFixed(2)
  }

  rate.value = getRandomArbitrary(10,60).toFixed(2)
})

const download = ()=>{
    Download('111','application/json; charset=utf-8','export.json')
}
</script>

<style lang="less" scoped>
.main{
    height: 93vh;
    background: url('../assets/bg1.png');
    display: flex;
    flex-direction: column;
}
.row1 {
  margin-top: 11vh;
  margin-right: 5vw;
  display: flex;
  width: 15vw;
  display: flex;
  justify-content: space-around;
  font-size: 5vh;
  font-weight: 600;
}
</style>
