<template>
  <div class="WRAP">
    <div class="main">
      <h3>XX老师，您好：</h3>
      <p>请假申请列表：</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="sName" label="姓名" width="80"></el-table-column>
        <el-table-column prop="leaveId" label="请假流水号" width="200"></el-table-column>
        <el-table-column prop="leaveDateNum" label="请假天数"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button v-if="scope.row.leaveStatus == '2'" @click="approve(scope.row.leaveId, '0')" type="text" size="small">批准</el-button>
            <el-button v-if="scope.row.leaveStatus == '2'" @click="approve(scope.row.leaveId, '1')" 
              type="text" size="small" style="color: red;">拒绝</el-button>
            <span v-else>{{{'0': '已批准', '1': '已拒绝'}[scope.row.leaveStatus]}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    approve(id, state) {
      this.$api.teacher.operLeave({
        id,
        state
      })
      .then((res) => {
        if(res.status == 200){
          this.$message({message: '操作成功', type: 'success'});
          this.getData();
        }
      })
    },
    getData(){
      this.$api.teacher.getList({})
      .then((res) => {
        if(res.status == 200){
          this.tableData = res.data.resultValue.item;
        }
      })
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style scoped>
.WRAP {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.main {
  min-height: 50%;
  max-width: 50%;
  padding: 40px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3 {
  text-align: left;
  margin-bottom: 20px;
}
p {
  text-align: left;
  margin-bottom: 15px;
}
.el-table td,
.el-table th {
  padding: 4px 0;
}
</style>