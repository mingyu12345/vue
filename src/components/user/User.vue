<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

<el-row  class="input">
  <el-col>
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
<el-button type="primary" class="input-btn">主要按钮</el-button>
  </el-col>
</el-row>
  </el-card>
</template>

<script>
export default {
    data(){
        return{
            input:""
        }
    }
}
</script>

<style>
.input-with-select{
    width: 300px !important;
}
.input{
    margin-top: 30px;
}
.input-btn{
    margin-left: 30px !important;
}
</style>