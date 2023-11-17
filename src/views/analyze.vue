<template>
  <div class="main">
    
    <el-table :data="tableData" :border="true" style="width: 100%" max-height="700">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <h3>详细数据</h3>
            <el-table :data="props.row.family" :border="true">
              <el-table-column label="运算总时间" prop="name" />
              <el-table-column label="交集比例" prop="state" />
              <el-table-column align="right">
                <template #header>
                <div>操作</div>
                </template>
                <template #default="scope">
                  <el-button size="small" @click="download">下载输出文件</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="日期" prop="date" />
      <el-table-column label="ID" prop="name" />
    </el-table>
  </div>
</template>

<script  setup>
import Download from '../utils/download'
import { ref ,onMounted, reactive} from 'vue'

let time = reactive([])
let rate = reactive([])
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

onMounted(() => {
  for(let i =0;i<tableData.length;i++){
  tableData[i].family[0].name = getRandomArbitrary(10,40).toFixed(2)
  tableData[i].family[0].state = getRandomArbitrary(10,60).toFixed(2)
  }

})

const download = () => {
  Download('111', 'application/json; charset=utf-8', 'export.json')
}

const tableData =reactive([
  {
    date: '2023-05-03',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-02',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-04',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-01',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-08',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-06',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  },
  {
    date: '2023-05-07',
    name: '18257',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
      }
    ]
  }
])
</script>

<style lang="less" scoped></style>
