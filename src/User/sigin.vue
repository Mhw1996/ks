<template>
    <div class="login" id="app_login">
      <div class="box">
        <p style="padding:60px;font-size: 30px;">照片墙管理系统</p>
        <el-button-group>
          <el-button type="info" plain class="btn1"  @click="jumpLogin">登录</el-button>
          <el-button type="info" plain class="btn" :class='{MyBgColor2:isActive2}'>注册</el-button>
        </el-button-group>
        <el-input placeholder="清输入用户名" v-model="account"  clearable  style="width:300px;padding:20px"/>
        <el-input placeholder="请输用户密码" v-model="password2" type="password"  style="width:300px;padding-bottom:20px"/><br>
        <el-input placeholder="请输确认密码" v-model="password" type="password"  style="width:300px;padding-bottom:10px"/><br>
        <el-button type="info" round plain style="width: 300px;margin-top:20px;" @click="ToSigin">注册</el-button>
      </div>
    </div>
    </template>
    <script>
      export default {
        data() {
          return {
            account:"",
            password:"",
            password2:'',
            isActive2:true,
            radio_password:''
          }
        },
        methods:{
        jumpLogin(){
          this.isActive2=false;
          this.$router.push('/')  
        },
        ToSigin(){
          var account=this.account;
          var password=this.password;
          var password2=this.password2;
          var u=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]|[a-z]{3,10}$/;
          var p=/^.{6,}$/;
          if(!u.test(account)){
              this.$notify.error({
              title: '错误',
              message: '请保持用户名为至少三个字符！！！'
            })
            return
          }
          if(!p.test(password2)){
            this.$notify.error({
              title: '错误',
              message: '请保持密码为至少六个字符！！！'
            })
            return
          }
          if(password!=password2){
            this.$notify.error({
              title: '错误',
              message: '请保持两次密码一致！！！'
            })
            return
          }
          var url="/u/register"
          var mySiginData=this.qs.stringify({'account':this.account,'password':this.password})
          this.axios.post(url,mySiginData).then(result=>{
            console.log(result)
            if(result.data.suc){
              this.$message({
                message: '注册成功！！！',
                type: 'success'
              });
              this.account='';
              this.password='';
              this.password2='';
              this.$router.push('/')
            }else{
              this.$message.error('注册失败！！！！');
            }
          })
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
        height: 450px;
        margin: 0 auto;
        line-height: 100%;
        top:15%;
        text-align: center;
        box-shadow: 0 0 14px #e9e9e9;
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