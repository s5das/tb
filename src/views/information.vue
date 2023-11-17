<template>
  <div class="main">
    <el-dialog v-model="dialogTableVisible" title="历史数据集">
      <el-table :data="gridData" @row-click="jump(4)" v-loading.fullscreen.lock="fullscreenLoading">
        <el-table-column property="date" label="日期" width="150" />
        <el-table-column property="sf" label="身份" width="200" />
        <el-table-column property="id" label="ID" />
      </el-table>
    </el-dialog>
    <div class="left">
      <div class="box1">
        <img
          src="../assets/头像.svg"
          style="margin-top: 10vh; height: 30vh"
          alt=""
        />
      </div>
      <div class="box2" style="font-size: 3vh; margin-bottom: 1vh">
        个人信息
      </div>
      <div class="box3" style="font-size: 2vh; margin-bottom: 1vh">
        用户名： 31232
      </div>
      <div class="box4" style="font-size: 2vh; margin-bottom: 1vh">
        用户id： 2323-ui
      </div>
    </div>
    <div class="right"></div>
    <div class="middle">
      <div class="item" @click="jump(1)">
        <div class="content">
          <div>上传</div>
          <img
            src="../assets/上传.svg"
            style="height: 15vh; width: auto"
            alt=""
          />
        </div>
      </div>
      <div class="item" @click="jump(2)">
        <div class="content">
          <div>寻找</div>
          <img
            src="../assets/寻找.svg"
            style="height: 15vh; width: auto"
            alt=""
          />
        </div>
      </div>
      <div class="item" @click="jump(3)">
        <div class="content">
          <div>分析</div>
          <img
            src="../assets/分析.svg"
            style="height: 15vh; width: auto"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
let dialogTableVisible = ref(false)

const gridData = [
  {
    date: '2023-05-02',
    sf: 'sender',
    id: '1825736'
  },
  {
    date: '2023-05-04',
    sf: 'receiver',
    id: '1825736'
  },
  {
    date: '2023-05-01',
    sf: 'receiver',
    id: '1825736'
  },
  {
    date: '2023-05-03',
    sf: 'sender',
    id: '1825736'
  }
]

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

const jump = (flag) => {
  switch (flag) {
    case 1:
      router.replace({
        path: '/TB/upload'
      })
      break
    case 2:
      dialogTableVisible.value = true
      break
    case 3:
      router.replace({
        path: '/TB/analyze'
      })
      break
    case 4:
    openFullScreen1()
      break
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  height: 93vh;
  background: url('../assets/bg1.png');
  .left {
    width: 25vw;
    height: 93vh;
    border-radius: 0 0 25% 25%;
    background: url('../assets/dot.svg');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .right {
    width: 65vw;
  }
  .middle {
    position: absolute;
    top: 40vh;
    left: 30vw;
    height: 30vh;
    width: 60vw;
    background: #e7e6e6;
    border-radius: 30px;
    padding: 2vh 2vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      width: 11vw;
      height: 23vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #525252;
      .content {
        width: 9vw;
        height: 20vh;
        display: flex;
        flex-direction: column;
        background: #e7e6e6;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
