<template>
<div id="app-admin">
  <div class="myHeader">
    <span>上传你喜欢的照片</span>
    <span style="float: right;margin-right: 30px;cursor: pointer;" @click="jumpMyself">
      <img src="../../public/img/我的.png" alt="">
      孙博
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

    }
  },
  methods:{
    jump(){
      // this.$router.push("/Sigin")
      console.log(123)
    },
    jumpMyself(){
      this.$router.push("/Album/Myself")
    }
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
  background: #0e045a;
  position: fixed;
  border:1px solid #0aaeed
}
.myBox{
  margin:40px auto;
  width: 80%;
  border: 1px solid #0aaeed;
  background: #eee;
}
</style>
