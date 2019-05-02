<template>
<div id="app-admin">
  <div class="myHeader">
    <span>上传你喜欢的照片</span>
    <img src="../../public/img/end.png" alt="" style="float:right;margin-right:30px;cursor: pointer;margin-top:5px;" title="退出" @click='end'>
    <span style="float: right;cursor: pointer;margin-right: 20px" @click="jumpMyself" title="个人主页">
      <img src="../../public/img/我的.png" alt="">

  
 <el-dropdown>
      <span class="el-dropdown-link">
      {{uname}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-setting" >
           <router-link to="/Album/ChangePassword">修改密码</router-link>
          </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    </span>

  </div>
  <br>
  <div class="myBox"><router-view/></div>
</div>
</template>
<script>
export default {
  data() {
    return {
        uname:localStorage.getItem('accout')
    }
  },
  methods:{
    jumpMyself(){
      this.$router.push("/Album/Myself")
    },
    end(){
      localStorage.clear('accout')
      localStorage.clear('password')
      localStorage.clear('set_token')
      this.$router.push('/')
    },
  }
}
</script>
<style>
#app-admin{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
#app-admin .myHeader{
  width: 100%;
  color:aliceblue;
  padding:12px;
  font-size: 20px;
  background: #909399;;
  position: fixed;
  border:1px solid #fdffff;;
  box-shadow: 0 0 14px #e9e9e9;
}
.myBox{
  margin:40px auto;
  width: 80%;
  border: 1px solid #b8b8b8;
  box-shadow: 0 0 14px #e9e9e9;
  background: #eee;
}
  .el-dropdown-link {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
