import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './User/Login.vue'
import Sigin from "./User/sigin.vue"
import Admin from "./User/admin.vue"
import Select from "./User/Select.vue"
import Add from "./User/Add.vue"
import Delete from "./User/Delete.vue"
import Myself from "./User/Myself.vue"
import OtherIndex from "./User/OtherIndex"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '',component: Login},
    {path:'/Sigin',component:Sigin},
    {path:'/Admin',component:Admin,
    children:[
        {path:"",component:OtherIndex},
         {path:'/Album/Add',component:Add},
         {path:'/Album/Delete',component:Delete},
         {path:'/Album/Select',component:Select},
         {path:'/Album/Myself',component:Myself},
    ]
  }
  ]
})



// 全局路由守卫
router.beforeEach((to, from, next) => {
  const nextRoute = ['/Admin/'] // 需要登录的页面
  let isLogin = localStorage('accout')  // 判断是否登录，本地存储有用户数据则视为已经登录
  // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
  if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
    if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
      if (from.name === '') {
        next('/')
        return
      }
　　　　// 登录后，跳到到当前页面
      router.push({
        name: '',
        params: {redirect: to.fullPath}  
      })
    }
  }
  // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
  if (to.name === '/') {
    if (isLogin) {
      next('/')
      return
    }
  }
  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
