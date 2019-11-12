<template>
  <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="addr"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="editItemx(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="deleteItem(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// 文档参见：http://element.eleme.io/#/zh-CN/component/table
  export default {
    props:{
      editItem:[Function]
    }
    ,methods: {
      handleClick() {
        console.log(1);
      }
      // 注意 template中的click 绑定，scope.row可以传递当前行数据
      // 进而可以获取要编辑数据的详细信息，至于是从当前表格数据中拿还是发ajax请求去拿，根据业务
      ,editItemx(row) {
        this.$props.editItem(row);
      }
      ,deleteItem(row){
        var index = this.tableData.findIndex(x=>x.id===row.id)
        this.tableData.splice(index,1);
      }
    },

    data() {
      return {
        tableData: [{
          id: "1",
          date: '2016-05-03',
          name: '王小虎',
          province: '非洲',
          city: '普陀区',
          addr: '上海市普陀区金沙江路 xxxx',
          zip: 200333
        }, {
          id: "2",
          date: '2016-05-02',
          name: '张小虎',
          province: '上海',
          city: '普陀区',
          addr: '上海市普陀区金沙江路 asxasx',
          zip: 200333
        }, {
          id: "3",
          date: '2016-05-04',
          name: '李小虎',
          province: '上海',
          city: '普陀区',
          addr: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: "4",
          date: '2016-05-01',
          name: '陈小虎',
          province: '上海',
          city: '普陀区',
          addr: '上海市普陀区金沙江路 123123123123 弄',
          zip: 200333
        }]
      }
    }
  }
</script>