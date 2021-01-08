// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/common/utils/axios';
import '../src/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AMap from 'vue-amap';
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
Vue.use(AMap);
AMap.initAMapApiLoader({
  // 高德key
  key: '0f71ed1284c1a14749d80e0ec382a531',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder'],
  uiVersion: '1.0.11' // 版本号
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,form,next)=>{
 
 next()

})