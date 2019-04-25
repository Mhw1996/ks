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
