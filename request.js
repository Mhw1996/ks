import Vue from 'vue'
import store from '@/store'
import axios from 'axios'

const request = axios.create({
  // 仅在开发环境走代理
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://api.wxf666.top/picture-collection'
})

request.interceptors.request.use(
  config => {
    // 登录后所有请求附带token
    if (store.state.isLogin) {
      config.headers.token = store.state.token
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  res => {
    if (res.data.suc && res.data.msg) {
      // success
       
    } else if (res.data.msg) {
      // fail
      
    }

    if (res.data.suc) return res.data
    return Promise.reject(res.data)
  },
  err => {
    // token 失效
    if (err.response && err.response.status === 401) {
   
    } else {
       
    }

    return Promise.reject(err)
  }
)

Vue.prototype.$http = request

export default request
