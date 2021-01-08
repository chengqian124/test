
import axios from 'axios';
import VueAxios from 'vue-axios'
import Qs from 'qs'
import Vue from 'vue'
Vue.use(VueAxios, axios)
axios.interceptors.request.use(config=>{
    // console.log(cofig)
   let BASE_API= "http://192.168.135.242:1080/pubset"
//    config.url = BASE_API + config.url
   config.headers['product'] = 'PS'
   let trans = config.url !== '/subfile/upload' && (config.method !== 'post' || config.url == '/login' || config.url == '/logout');
   config.url = BASE_API + config.url
   if (trans) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = Qs.stringify(config.data)
}
//    config.headers['Authorization']='eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNWIxOTk0My1lYTM3LTQ0MGQtOTIyMy1mMzU2MDZhNDE2MjMiLCJpc3MiOiJCdXp6bHkiLCJzdWIiOiJidXp6bHlfQF9OU0lTWCIsImlhdCI6MTYwNTE0MzEyNCwiZXhwIjoyNjA1MTQzMTIzLCJhdWQiOiJFdmVyeU9uZSJ9.UDvR15D7rWF6c5xcM30LR_D1HDfLE4g_T8b4TdSe18o'
//    console.log(config)
   return config
})

axios.interceptors.response.use(response=>{

    // console.log(response)
    return response.data
})
