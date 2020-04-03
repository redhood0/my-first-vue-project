<template>
  <el-container>
    <el-header height="100">
      <div class="top_nav_content">
        <img src="../assets/title1.png" alt />
        <!-- 菜单栏 -->
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" @click="jumpTo('/welcome')">主站</el-menu-item>
          <el-menu-item index="2">领养频道</el-menu-item>
          <el-menu-item index="3">猫咪婚恋</el-menu-item>
          <el-menu-item index="4">猫咪零食</el-menu-item>
          <el-menu-item index="5">消息中心</el-menu-item>
        </el-menu>
      </div>
      <!-- 退出 -->
      <el-button class="logout_btn" type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="#000"
          active-text-color="#00A1D6"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-postcard"></i>
              <span>{{menuList.title}}</span>
            </template>
            <!-- index需要熟悉绑定的方式 -->
            <el-menu-item
              :index="'/adoption/'+index"
              :key="index"
              v-for="(item,index) in menuList.menus"
              @click="jump(index)"
            >
              <i class="el-icon-s-platform"></i>
              {{item}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//列表数据
const menus = {
  title: '猫咪领养',
  menus: ['领养管理', '领养提交', '全国客栈', '已领养猫猫']
}
export default {
  data() {
    return {
      menuList: menus,
      path: ['/adoptionMana', '', '', ''],
      activePath : ''
    }
  },
  methods: {
    logout: function() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    jump: function(index) {
      this.$router.push(this.path[index])
      this.activePath ='/adoption/' + index
      window.sessionStorage.setItem('activePath', '/adoption/' + index)

    },
    jumpTo(url) {
      this.$router.push(url)
    }
  },
  created:function(){
    this.activePath = window.sessionStorage.getItem("activePath");
  }
}
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

  .top_nav_content {
    display: flex;
    > img {
      height: 90px;
      margin-left: -5px;
    }
    .el-menu-demo {
      margin-top: 20px;
      border-bottom: none;
    }
  }
}
.logout_btn {
}

.el-aside {
  background-color: #fff;
  margin-top: 4px;
  box-shadow: -18px 20px 19px 8px #888888;
  .el-menu {
    // border: 1px solid #ccc;
    // border-radius: 3px;
  }
}
</style>