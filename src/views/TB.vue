<template>
  <div class="logout" @click="logout">
    <img
      src="../assets/logout.svg"
      style="height: 5vh; width: 2vw; margin-right: 10px"
      alt=""
    />
    <div>logout</div>
  </div>
  <div class="head">
    <img src="../assets/icon.png" alt="" class="icon" style="height: 5vh;">
    <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
        style="height: 5vh;width: 10vw;margin-right: 3vw;"
      />
  </div>
  <div class="main">
    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo left"
      @select="handleSelect"
      background-color="#3b3838"
      text-color="#fff"
      style="height: 100vh"
    >
      <el-menu-item index="1">
        <el-icon><Setting /></el-icon>
        <span>个人主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Setting /></el-icon>
        <span>上传</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Location /></el-icon>
        <span>分析结果</span>
      </el-menu-item>
    </el-menu>

    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Search 
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let input2 = ref()

const handleSelect = (key) => {
  switch (key) {
    case '1':
      router.replace({
        path: 'main'
      })
      break
    case '2':
      router.replace({
        path: 'upload'
      })
      break
    case '3':
      router.replace({
        path: 'analyze'
      })
      break
  }
}

const logout = () => {
  router.replace({
    path: '/login'
  })
}
</script>

<style lang="less" scoped>
.head{
  height: 7vh;
  box-sizing: border-box;
  background-color: #333f50;
  border: #2f528f 3px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon{
    margin-left: 3vw;
  }
}

.main {
  display: flex;
  justify-content: space-around;
}

.left {
  position: fixed;
  top: 7vh;
  left: 0;
  width: 10%;
  height: 100%;

  .el-menu-item {
    color: #fff;
  }
}
.logout {
  position: absolute;
  z-index: 99;
  bottom: 1vh;
  left: 1vw;
  display: flex;
  align-items: center;
  color: white;
}

.right {
  margin-left: 10vw;
  width: 90%;
}
</style>
