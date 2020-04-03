<template>
  <div class="content">
    <img class="welcome" src="../assets/welcome1.png" alt />
    <div class="right_imgs">
      <img class="welcome2" src="../assets/welcome2.png" alt />
      <p class="title"> 欢迎来到猫咪之家</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  align-items: flex-start;
  justify-content: start;
}
.welcome {
  width: 50%;
//   border: 2px solid #ccc;
  border-radius: 5px;
//   box-shadow: 1px 1px 1px 1px #ccc;
}

.right_imgs {
  width: 40%;
  height: 100%;
  margin-left: 20px;
  padding: 0;
  margin: 0;
   margin-left: 30px;
   
  .welcome2 {
    width: 80%;
    margin-top: 150px;
  }
  .title{
      font-size: 50px;
      margin-left: 20px;
      font-family: Microsoft Yahei;
  }
}
</style>