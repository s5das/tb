<template>
  <div class="main">
    <el-table :data="tableData" :border="true">
      <el-table-column label="日期" prop="date" />
      <el-table-column label="进度">
        <template #header>
          <div>进度</div>
        </template>
        <template #default="scope">
          <el-progress
            style="width: 10vw; height: 5vh"
            :text-inside="true"
            :stroke-width="26"
            :percentage="scope.row.rate"
          />
        </template>
      </el-table-column>
      <el-table-column label="剩余时间(分)" prop="lefttime" />
      <el-table-column label="总时间(分)" prop="tataltime" />
      <el-table-column label="任务ID" prop="ID" />
      <el-table-column align="right">
        <template #header>
          <div>下载</div>
        </template>
        <template #default="scope">
          <el-button
            size="small"
            @click="download"
            :disabled="scope.row.rate < 100"
            >下载输出文件</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import Download from '../utils/download'
import { ref, onMounted, reactive, onUnmounted } from 'vue'

let time = reactive([])
let rate = reactive([])
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

let timer
onMounted(() => {
  tableData[0].starttime = (
    Date.now() - getRandomArbitrary(1000 * 60 * 5, 1000 * 60 * 15)
  ).toFixed(2)
  tableData[0].endtime = Date.now().toFixed(2)
  tableData[0].rate = (
    ((Date.now() - tableData[0].starttime) /
      (tableData[0].endtime - tableData[0].starttime)) *
    100
  ).toFixed(2)
  tableData[0].lefttime = (
    (tableData[0].endtime - Date.now()) /
    1000 /
    60
  ).toFixed(2)
  tableData[0].tataltime = (
    (tableData[0].endtime - tableData[0].starttime) /
    1000 /
    60
  ).toFixed(2)

  for (let i = 1; i < tableData.length; i++) {
    tableData[i].starttime = (
      Date.now() - getRandomArbitrary(1000 * 60 * 5, 1000 * 60 * 15)
    ).toFixed(2)
    tableData[i].endtime = (
      Date.now() + getRandomArbitrary(1000 * 60 * 5, 1000 * 60 * 15)
    ).toFixed(2)
    tableData[i].rate = (
      ((Date.now() - tableData[i].starttime) /
        (tableData[i].endtime - tableData[i].starttime)) *
      100
    ).toFixed(2)
    tableData[i].lefttime = (
      (tableData[i].endtime - Date.now()) /
      1000 /
      60
    ).toFixed(2)
    tableData[i].tataltime = (
      (tableData[i].endtime - tableData[i].starttime) /
      1000 /
      60
    ).toFixed(2)
  }
  timer = setInterval(() => {
    for (let i = 1; i < tableData.length; i++) {
      if (
        ((Date.now() - tableData[i].starttime) /
          (tableData[i].endtime - tableData[i].starttime)) *
          100 >
        100
      ) {
        tableData[i].rate = 100
      } else {
        tableData[i].rate = (
          ((Date.now() - tableData[i].starttime) /
            (tableData[i].endtime - tableData[i].starttime)) *
          100
        ).toFixed(2)
      }

      if ((tableData[i].endtime - Date.now()) / 1000 / 60 < 0) {
        tableData[i].lefttime = 0
      } else {
        tableData[i].lefttime = (
          (tableData[i].endtime - Date.now()) /
          1000 /
          60
        ).toFixed(2)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const download = () => {
  Download('111', 'application/json; charset=utf-8', 'export.json')
}

const tableData = reactive([
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  },
  {
    date: '2023-11-20',
    ID: '082134'
  }
])
</script>

<style lang="less" scoped></style>
