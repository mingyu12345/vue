<template>
  <div class="home">
    <el-container class="container">
      <!-- 头部 -->
      <el-header class="header">
        <el-row>
          <el-col :span="2"
            ><div class="grid-content bg-purple">
              <div class="img">
                <img src="../assets/images/2.jpg" alt="" />
              </div></div
          ></el-col>
          <el-col :span="18"
            ><div class="grid-content bg-purple-light">
              电商后台管理系统
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <el-button type="primary" class="btn" @click="signOut"
                >退出</el-button
              >
            </div></el-col
          >
        </el-row>
      </el-header>
      <!-- 左侧和主要内容区域 -->
      <el-container >
        <el-aside width="200px" class="aside">
          <!-- 侧边栏 -->
          <el-menu 
            :unique-opened="true"
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="user">
                  <i class="el-icon-menu"></i>
                  用户列表</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-info"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <i class="el-icon-menu"></i>
                  角色列表</el-menu-item
                >
                <el-menu-item index="2-2">
                  <i class="el-icon-menu"></i>
                  权限列表</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-present"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <i class="el-icon-menu"></i>
                  商品列表</el-menu-item
                >
                <el-menu-item index="3-2">
                  <i class="el-icon-menu"></i>
                  分类参数</el-menu-item
                >
                <el-menu-item index="3-3">
                  <i class="el-icon-menu"></i>
                  商品分类</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <i class="el-icon-menu"></i>
                  订单列表</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  数据列表</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    signOut() {
      localStorage.clear();
      this.$message({
        message: "退出成功",
        type: "success",
      });
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.container {
  height: 100%;
}
.header {
  background: #708090;
}
.aside {
  background:#708090;
}
.main {
  background:#ffffff;
}
.img {
  height: 60px;
  width: 60px;
  border-radius: 60px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.bg-purple-light {
  line-height: 60px;
  color: aliceblue;
  font-weight: bolder;
}
.bg-purple {
  line-height: 60px;
}
.btn {
  margin-left: 100px;
}

</style>