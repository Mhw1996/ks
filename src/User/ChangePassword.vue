<template>
    <div class="login" id="app_change">
      <div class="box">
        <p style="padding:60px;font-size: 30px;">照片墙修改密码</p>
        <el-input placeholder="请输初始密码" v-model="oldPassword" type="password" @change="mychangeOld" style="width:300px;padding-bottom:20px"/><br>
        <el-input placeholder="请输新密码" v-model="newPassword2" type="password"  style="width:300px;padding-bottom:20px"/><br>
        <el-input placeholder="请输确认密码" v-model="newPassword" type="password"  style="width:300px;padding-bottom:20px"/><br>
        <el-button type="info" round plain style="width: 300px;margin-top:20px;" @click="ToChange">确定修改</el-button>
      </div>
    </div>
    </template>
    <script>
      export default {
        data() {
          return {
            oldPassword:"",
            newPassword:"",
            newPassword2:"",
            myPassword:localStorage.getItem('password')
           }
        },
        methods:{
          mychangeOld(){
            var oldPassword=this.oldPassword;  
            var myPassword=this.myPassword;
             if(oldPassword!=myPassword){
              this.$notify.error({
                title: '错误',
                message: '请保与登录密码一致！！！'
              })
            return
          }
          },
        ToChange(){
          
          var newPassword=this.newPassword;
          var newPassword2=this.newPassword2;
        
          var u=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]|[a-z]{3,10}$/;
          var p=/^.{6,}$/;
          if(!p.test(newPassword2)){
            this.$notify.error({
              title: '错误',
              message: '请保持密码为至少六个字符！！！'
            })
            return
          }
          if(newPassword!=newPassword2){
            this.$notify.error({
              title: '错误',
              message: '请保持两次密码一致！！！'
            })
            return
          }
          var url="/u/password"
          this.$http.post(url,{'oldPassword':this.oldPassword,'newPassword':this.newPassword}).then(result=>{
            console.log(result)
            // if(result.data.suc){
            //   this.$message({
            //     message: '修改密码成功！！！',
            //     type: 'success'
            //   });
            //   this.oldPassword='';
            //   this.newPassword='';
            //   this.newPassword2='';
            //   this.$router.push('/Admin')
            // }else{
            //   this.$message.error('修改密码失败！！！！');
            // }
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