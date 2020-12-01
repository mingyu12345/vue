<template>
  <div class="login-wrap">
    <el-form
      label-position="top"
      label-width="80px"
      :model="formdata"
      class='login-box'
    >
        <h1>用户登录</h1>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
        <el-button type="primary" class="login-btn" @click='login'>登录</el-button>
    </el-form>
  </div>
</template>

<script>
import login from '../model/login'
export default {
  data() {
    return {
        formdata:{
            username:'',
            password:''
        }
    };
  },
  methods:{
    login(){
      var username = this.formdata.username;
      var password = this.formdata.password;
     login.login({username,password}).then(res=>{
      if(res.data.meta.status===200){
         var token=res.data.data.token
          this.$message({
          message: '登录成功',
          type: 'success'
        });
        localStorage.setItem('token',token)
        this.$router.push('/')
      }else{
       this.$message.error('密码错误');
      }
     })
      
    }
  }
};
</script>

<style>
.login-wrap{
    height: 100%;
    background: #708090;
    display: flex;
    justify-content: center;
   align-items: center;
}
.login-box{
    /* height:400px; */
    width: 400px;
    background: #ffffff;
    padding: 30px;
}
.login-btn{
    width: 100%;
    }
</style>