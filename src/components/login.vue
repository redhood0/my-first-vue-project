<template>
  <div class="login_container">
    <img class="left_bg" src="../assets/bg_cat2.jpg" alt />
    <div class="login_box">
      <img class="title" src="../assets/title_logo.png" alt />
      <!-- 登录表单区 -->
      <el-form
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="rules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            prefix-icon="el-icon-s-goods"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button class="button" type="primary" v-throttle="{fun:login,time:2000}">登录</el-button>
          <el-button class="button" type="info" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: ""
      },
      //这里是表单的验证规则对象
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 1, max: 16, message: "长度在 1 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login: function(isWaiting) {
      console.log("====>" + isWaiting);

      //预校验
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          // console.log(event.target.disabled);
          // event.target.disabled = true;
          console.log(">>>>login input invalidate>>>");
          return;
        } else {
          // this.$axios
          //   .post("login", this.loginForm)
          //   .then(resp => console.log(resp)) //获取数据，进行处理
          //   .catch(error => console.log(error)); //异常处理
          console.log("=====>");
          this.axiosfun(isWaiting);
        }
      });
    },
    register: function() {
      //todo:跳转至注册界面
      alert("注册成功");
    },
    //es7处理异步
    async axiosfun(data) {
      //解构赋值写法，好东西。。
      try {
        var { data: res, head: xxx } = await this.$axios.post(
          "login",
          this.loginForm
        );
      }catch(e){
        console.log(e)
        data.isWaiting = false;
        return;
      }

      data.isWaiting = false;
      console.log("es7处理异步----------");
      // console.log(res);
      //弹框提示
      this.$message.success("登陆成功");
      //路由跳转，数据通过路由进行传递
      window.sessionStorage.setItem("token", res.token);
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #fff;
  height: 100%;
  .left_bg {
    height: 100%;
    width: 50%;
    object-fit: cover;
  }
}
.login_box {
  background: #fff;
  position: absolute;
  right: 0%;
  top: 0%;
  width: 50%;
  height: 100%;
  // width: 600px;
  // height: 350px;
  // background-color: #fff;
  // border-radius: 6px;
  // position: absolute;
  // left: 50%;
  // top:50%;
  // transform: translate(-50%,-50%);
  // box-shadow: 7px 8px 4px 5px #303133;

  // .avatar_box{
  //     height: 150px;
  //     width: 150px;
  //     border:10px solid #ddd;
  //     border-radius: 50%;
  //     box-shadow: -5px 4px 8px 0px #777;
  //     position: absolute;
  //     left: 50%;
  //     transform: translate(-50%,-50%);

  //     img{
  //         width: 100%;
  //         height: 100%;
  //         border-radius: 50%;
  //     }
  // }
}
.login_form {
  position: absolute;
  box-sizing: border-box;
  top: 300px;
  padding: 0 100px 0 100px;
  width: 100%;
}

.btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .button {
    width: 200px;
  }
}

.title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  width: 70%;
}
</style>