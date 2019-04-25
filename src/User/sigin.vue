<template>
    <div class="login" id="app_login">
      <div class="box">
        <p style="padding:60px;font-size: 30px;">照片墙管理系统</p>
        <el-button-group>
          <el-button type="info" plain class="btn1"  @click="jumpLogin">登录</el-button>
          <el-button type="info" plain class="btn" :class='{MyBgColor2:isActive2}'  @click="jumpSigin">注册</el-button>
        </el-button-group>
        <el-input placeholder="清输入用户名" v-model="uname"  clearable  style="width:300px;padding:20px"/>
        <el-input placeholder="请输用户密码" v-model="upwd" type="password"  style="width:300px;padding-bottom:10px"/><br>
        <el-button type="info" round plain style="width: 300px;margin-top:20px;">注册</el-button>
      </div>
    </div>
    </template>
    <script>
      export default {
        data() {
          return {
            uname:"",
            upwd:"",
            isActive2:true,
            radio_password:''
          }
        },
        methods:{
        jumpLogin(){
          this.isActive2=false;
          this.$router.push('/')  
      }    
        }
      }
    </script>
    <style>
     .login{
        position: fixed; 
        top:0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color:#ddd;
        margin: 0px auto;
      }
    .box{
        position: relative;
        border:2px solid #fdffff;
        border-radius: 5px;
        width: 550px;
        height: 500px;
        margin: 0 auto;
        line-height: 100%;
        top:20%;
        text-align: center;
    }
    #app_login .btn1{
      width:150px;
    }
    #app_login .btn{
      width:150px;
    }
    #app_login .MyBgColor{
      background: #909399;
      color: #fff;
    }
    </style>