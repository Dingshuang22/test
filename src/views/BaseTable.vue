<template>
    <div>
        <div class="crumbs" @click="tableToExcel">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i>
                    {{ $t("i18n.baseTable") }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>
                <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableDataList"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="用户名"></el-table-column>
                <el-table-column label="账户余额">
                    <template slot-scope="scope">￥{{scope.row.money}}</template>
                </el-table-column>
                <el-table-column label="头像(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="date" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
var _ = require('lodash')
export default {
  name: 'basetable',
  data () {
    return {
      query: {
        address: '',
        name: '',
        pageIndex: 1,
        pageSize: 4
      },
      tableData: [
        {
          'id': 1,
          'address': '广东省东莞市长安镇',
          'date': '2019-11-1',
          'money': 123,
          'name': '张三',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
        },
        {
          'address': '广东省广州市白云区',
          'date': '2019-10-11',
          'id': 2,
          'money': 456,
          'name': '李四',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          'address': '湖南省长沙市',
          'date': '2019-11-11',
          'id': 3,
          'money': 789,
          'name': '王五',
          'state': '失败',
          'thumb': 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          'address': '福建省厦门市鼓浪屿',
          'date': '2019-10-20',
          'id': 4,
          'money': 1011,
          'name': '赵六',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          'address': '广东省东莞市长安镇',
          'date': '2019-11-1',
          'id': 1,
          'money': 123,
          'name': '张三',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
        },
        {
          'address': '广东省广州市白云区',
          'date': '2019-10-11',
          'id': 2,
          'money': 456,
          'name': '李四',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          'address': '湖南省长沙市',
          'date': '2019-11-11',
          'id': 3,
          'money': 789,
          'name': '王五',
          'state': '失败',
          'thumb': 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          'address': '福建省厦门市鼓浪屿',
          'date': '2019-10-20',
          'id': 4,
          'money': 1011,
          'name': '赵六',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          'address': '广东省东莞市长安镇',
          'date': '2019-11-1',
          'id': 1,
          'money': 123,
          'name': '张三',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
        },
        {
          'address': '广东省广州市白云区',
          'date': '2019-10-11',
          'id': 2,
          'money': 456,
          'name': '李四',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          'address': '湖南省长沙市',
          'date': '2019-11-11',
          'id': 3,
          'money': 789,
          'name': '王五',
          'state': '失败',
          'thumb': 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          'address': '福建省厦门市鼓浪屿',
          'date': '2019-10-20',
          'id': 4,
          'money': 1011,
          'name': '赵六',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          'address': '广东省东莞市长安镇',
          'date': '2019-11-1',
          'id': 1,
          'money': 123,
          'name': '张三',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
        },
        {
          'address': '广东省广州市白云区',
          'date': '2019-10-11',
          'id': 2,
          'money': 456,
          'name': '李四',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          'address': '湖南省长沙市',
          'date': '2019-11-11',
          'id': 3,
          'money': 789,
          'name': '王五',
          'state': '失败',
          'thumb': 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          'address': '福建省厦门市鼓浪屿',
          'date': '2019-10-20',
          'id': 4,
          'money': 1011,
          'name': '赵六',
          'state': '成功',
          'thumb': 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        }
      ],
      multipleSelection: [],
      delList: [],
      editVisible: false,
      pageTotal: 15,
      form: {},
      idx: -1,
      id: -1
    }
  },
  computed: {
    // 处理分页数据
    tableDataList: function () {
      let pg = this.query
      // console.log("****");
      // console.log(this.query)
      // console.log(this.tableData)
      // return this.tableData
      // console.log(this.tableData,pg.pageIndex,pg.pageSize)
      return _.slice(this.tableData, (pg.pageIndex - 1) * pg.pageSize, pg.pageIndex * pg.pageSize) // 处理所有数据 分页显示
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    // console.log(this.tableDataList)
  },
  methods: {
    // 表格To Excel
    tableToExcel () {
      let jsonData = this.tableDataList
      // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
      let str = `地址,注册时间,ID,金额,姓名,状态,头像\n`
      // 增加\t为了不让表格显示科学计数法或者其他格式
      for (let i = 0; i < jsonData.length; i++) {
        for (let item in jsonData[i]) {
          str += `${jsonData[i][item] + '\t'},`
        }
        str += '\n'
      }
      // encodeURIComponent解决中文乱码
      let url = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)
      // 通过创建a标签实现
      let link = document.createElement('a')
      link.href = url
      // 对下载的文件命名
      link.download = 'channel.csv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    // 获取 easy-mock 的模拟数据
    getData () {
      fetch('../static/table.json')
        .then(res => res.json())
        .then(res => {
          // 获取到了数据
          // console.log(res)
          this.tableData = res
          // console.log(this.tableData)
          this.pageTotal = res.length
        })
        .catch(error => {
          // 解析错误或者获取数据失败
          console.log(error)
        })
    },

    // 触发搜索按钮
    handleSearch () {
      this.$set(this.query, 'pageIndex', 1)
      this.getData()
    },
    // 删除操作
    handleDelete (index, row) {
      // 二次确认删除
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.$message.success('删除成功')
          this.tableData.splice(index, 1)
        })
        .catch(() => {})
    },
    // 多选操作
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    delAllSelection () {
      const length = this.multipleSelection.length
      let str = ''
      this.delList = this.delList.concat(this.multipleSelection)
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + ' '
      }
      this.$message.error(`删除了${str}`)
      this.multipleSelection = []
    },
    // 编辑操作
    handleEdit (index, row) {
      this.idx = index
      this.form = row
      this.editVisible = true
    },
    // 保存编辑
    saveEdit () {
      this.editVisible = false
      this.$message.success(`修改第 ${this.idx + 1} 行成功`)
      this.$set(this.tableData, this.idx, this.form)
    },
    // 分页导航
    handlePageChange (val) {
      this.$set(this.query, 'pageIndex', val)
      this.getData()
    }
  }
}
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
