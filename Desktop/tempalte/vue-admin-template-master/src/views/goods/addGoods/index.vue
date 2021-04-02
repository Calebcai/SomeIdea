<template>
  <div clas="app-container tab">
    <div class="btn">
      <el-button type="primary" size="small" round>新增商品+</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    ><el-table-column
       type="index"
       label="序号"
       align="center"
       width="50"
     />
      <el-table-column
        prop="goodName"
        align="center"
        label="商品名称"
      />
      <el-table-column
        prop="goodType"
        align="center"
        label="商品类型"
      />
      <el-table-column
        prop="goodFrom"
        align="center"
        label="生产地"
      />
      <el-table-column
        prop="goodNum"
        align="center"
        label="商品编码"
      />
      <el-table-column
        prop="goodTime"
        align="center"
        label="生产日期"
      />
      <el-table-column
        prop="goodPrice"
        align="center"
        label="商品价格/元"
      />
      <el-table-column
        width="250"
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="small"
            type="warning"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
          >
            移除
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click.native.prevent="editRow(scope.$index, tableData)"
          >
            编辑
          </el-button>
          <el-button
            size="small"
            type="success"
            @click.native.prevent="savaRow(scope.$index, tableData)"
          >
            保存
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getMeusList()
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    editRow(index, rows) {
    },
    savaRow(index, rows) {
    },
    async getMeusList() {
      const res = await this.$http.get('/goodList')
      const { data: { data }} = res
      this.tableData = [...data.goodList]
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-table{
    padding: 10px
  }
  .btn{
    margin:15px 10px 5px 0;
    text-align: right;
  }
  .el-pagination{
    text-align: center;
    padding: 10px;
  }
</style>
