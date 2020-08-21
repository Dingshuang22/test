<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i>
          {{ $t("i18n.excel") }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="uploadAndDownload">
      <!-- 上传excel -->
      <div class="upload">
        <input class="uploadExcel" type="file" accept=".xls, .xlsx" @change="uploadExcel($event)" />
        <a href="#">{{ $t('i18n.uploadExcel')}}</a>
      </div>
      <!-- 下载excel -->
      <button @click="exportExcelList()">{{ $t('i18n.downLoadExcel')}}</button>
    </div>
    <template>
      <el-table :data="excelList" style="width: 100%">
        <el-table-column prop="编号" label="编号" width="180"></el-table-column>
        <el-table-column prop="用户名称" label="用户名称" width="180"></el-table-column>
        <el-table-column prop="用户年龄" label="用户年龄"></el-table-column>
        <el-table-column prop="地址" label="地址"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
// 引入上传下载方法
import { importsExcel, exportExcel } from '@/func/excel.js'
export default {
  name: 'excel',
  data () {
    return {
      excelList: []
    }
  },
  mounted () {},
  methods: {
    //   upload
    uploadExcel (e) {
      var file = e.target.files // (利用console.log输出看file文件对象)
      //   console.log(file);
      importsExcel(e).then(
        (data) => {
        //   console.log(data);
          //   actionList(data);
          this.excelList = data
        },
        function (data) {
        //   console.log(data);
        }
      )
    },
    //   download
    exportExcelList () {
      //   设置好需要导出的数据（表头  内容  表名称） titel key 必要
      const header = [
        {
          title: '编号',
          dataIndex: '编号',
          key: '编号',
          className: 'text-monospace'
        },
        {
          title: '用户名称',
          dataIndex: '用户名称',
          key: '用户名称'
        },
        {
          title: '用户年龄', //
          // dataIndex: '用户年龄',
          key: '用户年龄' // value
        }
      ]
      // 内容
      const excelList = this.excelList
      exportExcel(header, excelList, '学生信息.xlsx')
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadAndDownload {
  position: relative;
  margin: 10px 0;
  .upload {
    display: inline-block;
    width: 300px;
    .uploadExcel {
      position: absolute;
      width: 100px;
      z-index: 500;

      margin-left: 0;

      opacity: 0;

      filter: alpha(opacity=0);

      margin-top: 0;
    }
    a{
        font:400 13.3333px Arial;
        display:inline-block;
        width:100px;
        border:2px solid buttonface;
        text-align:center;
        text-decoration: none;
        color:#000;
    }
  }

}
</style>
