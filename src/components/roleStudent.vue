<template>
  <div class="WRAP">
    <div class="main">
      <h3>XX同学，您好：</h3>
      <div class="form">
        <div>
          <span>姓名：</span>
          <el-input v-model="userName" placeholder="输入姓名"></el-input>
        </div>
        <div>
          <span>请假天数：</span>
          <el-input v-model="leaveDay" placeholder="输入请假天数"></el-input>
        </div>
      </div>
      <div class="save_box">
        <el-button type="primary" @click="save()">保存</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="sName" label="姓名" width="80"></el-table-column>
        <el-table-column prop="leaveId" label="请假流水号"></el-table-column>
        <el-table-column prop="leaveDateNum" label="请假天数" width="80"></el-table-column>
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">{{{'0': '已批准', '1': '已拒绝', '2': '未处理'}[scope.row.leaveStatus]}}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      leaveDay: '',
      tableData: []
    };
  },
  methods: {
    save(){
      //保存请假信息
      this.$api.student.save_leave({
          studentName: this.userName,
          leaveDate: this.leaveDay
        })
        .then((res) => {
          if(res.status == 200){
            this.$message({message: '操作成功', type: 'success'});
            this.userName = '';
            this.leaveDay = '';
            this.getData();
          }
        })
    },
    //获取表格数据
    getData() {
      this.$api.student.getList({})
      .then((res) => {
        console.log(res);
        if(res.status == 200){
          this.tableData = res.data.resultValue.item;
        }
      });
    }
  },
  mounted() {
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
  /* overflow: hidden; */
}
.main {
  max-height: 94%;
  max-width: 50%;
  overflow: auto;
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
.form {
  display: flex;
  margin-bottom: 20px;
}
.form > div {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form > div:first-of-type {
  margin-right: 20px;
}
.form span {
  display: inline-block;
  width: 120px;
}
.el-table td,
.el-table th {
  padding: 4px 0;
}
.save_box {
  text-align: end;
  margin-bottom: 20px;
}
</style>