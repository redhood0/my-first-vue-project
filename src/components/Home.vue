<template>
  <el-container>
    <el-header height="100">
      <img src="../assets/title1.png" alt />
      <el-button class="logout_btn" type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="#000"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
           
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout: function() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>

.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background: #fff;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding-left: 0px;
  box-shadow: 8px -20px 6px 19px #888888;
  align-items: center;
  > img {
    height: 90px;
    margin-left: -5px;
  }
}
.logout_btn {

}

.el-aside {
    background-color: #F3F3F3;
  .el-menu {
    border: 1px solid #ccc;
    border-radius: 3px;
    
  }
}
</style>