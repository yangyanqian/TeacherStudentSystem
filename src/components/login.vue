<template>
  <div class="WRAP">
    <div class="main">
      <h2>登录</h2>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <el-button type="primary" @click="login()">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "eric",
      password: "123456"
    };
  },
  methods: {
    login() {
      if(this.userName != '' && this.password != ''){
        this.$api.common.login({
          userName: this.userName,
          password: this.password
        })
        .then((res) => {
          console.log(res);
          var data;
          if(res.status == 200){
            data = res.data.resultValue;
            if(data.role == '0') this.$router.push({path: '/roleStudent'});
            else if(data.role == '1') this.$router.push({path: '/roleTeacher'});
          }
        });
      }
    }
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
  min-height: 350px;
  max-width: 420px;
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
.main h2 {
  margin-bottom: 50px;
}
.el-input {
  margin-bottom: 20px;
}
.el-button {
  width: 100%;
}
</style>