<template>
  <div clas="app-container tab">
    <div class="btn">
      <el-button type="primary" size="small" round>新增订单</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" align="center" width="50" />
      <el-table-column prop="orderID" align="center" width="80" label="订单号" />
      <el-table-column prop="orderName" align="center" label="订单名称" />
      <el-table-column prop="orderType" align="center" label="订单类型" />
      <el-table-column prop="orderOrigin" align="center" label="发货地" />
      <el-table-column prop="orderTo" align="center" label="目的地" />
      <el-table-column prop="orderTime" align="center" label="订单日期" />
      <el-table-column prop="orderPrice" align="center" label="订单金额/元" />
      <el-table-column width="250" align="center" label="操作">
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
    editRow(index, rows) {},
    savaRow(index, rows) {},
    async getMeusList() {
      const res = await this.$http.get('/orderList')
      const {
        data: { data }
      } = res
      this.tableData = [...data.orderList]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  padding: 10px;
}
.btn {
  margin: 15px 10px 5px 0;
  text-align: right;
}
.el-pagination {
  text-align: center;
  padding: 10px;
}
</style>
