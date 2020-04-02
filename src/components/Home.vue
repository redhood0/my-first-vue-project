<template>
  <el-container>
    <el-header>
      <el-button class="logout_btn" type="primary" @click="logout" >退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
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
  background: gray;
}
.logout_btn{
   
}

.el-aside {
  background-color: antiquewhite;
}
</style>