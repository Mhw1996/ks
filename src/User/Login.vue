<template>
<div class="login" id="app_login">
  <div class="box">
    <p style="padding:60px;font-size: 30px;">照片墙管理系统</p>
    <el-button-group>
      <el-button type="info" plain class="btn1" :class='{MyBgColor:isActive}'>登录</el-button>
      <el-button type="info" plain class="btn"  @click="jumpSigin">注册</el-button>
    </el-button-group>
    <el-input placeholder="清输入用户名" v-model="account"  clearable  style="width:300px;padding:20px"/>
    <el-input placeholder="请输用户密码" v-model="password" type="password"  style="width:300px;padding-bottom:30px"/><br>
    <el-checkbox v-model="radio_password" label="1" style="text-align: left;font-size: 15px">记住密码</el-checkbox>
    <span style="margin-left:117px;font-size: 14px;color: #606266">忘记密码？</span>
    <el-button type="info" round plain style="width: 300px;margin-top:20px;" @click="ToLogin">登陆</el-button>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        account:"",
        password:"",
        isActive:true,
        isActive2:false,
        radio_password:''
      }
    },
    methods:{
      jumpSigin(){
        this.$router.push("/Sigin")
        this.isActive=false;
        this.isActive2=true
      },    
      ToLogin(){
        var account=this.account;
        var password=this.password;
        if(account==''){
          this.$notify.error({
              title: '用户名错误',
              message: '请输入正确字符！！！'
            })
            return
        }
        if(password==''){
          this.$notify.error({
              title: '密码错误',
              message: '请输入正确字符！！！'
            })
            return
        }
        var url="/u/login"
        var myLoginData=this.qs.stringify({
          'account':this.account,'password':this.password
        })
        this.$http.post(url,myLoginData).then(result=>{
            this.$message({
            message: '登录成功！！！',
            type: 'success'
          });
          this.$router.push('/Admin')
          localStorage.setItem('accout',this.account)
        }
      ).catch((result)=>{
        this.$message.error('登录失败！！！');
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
#app_login .MyBgColor2{
  background: #909399;
  color: #fff;
}
</style>