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
import vueEsign from 'vue-esign'
import SlideVerify from '../node_modules/vue-monoplasty-slide-verify'
import Antd from 'ant-design-vue' //Antd-design-vue的一个组件库，也有react版本的
// import store from './store/index'
import store from '@/store/index.js'
import 'ant-design-vue/dist/antd.css'
import { Button, Cell, CellGroup, Field, Checkbox, Toast, Tabbar, TabbarItem, Icon, Loading, Popup, Dialog, RadioGroup, Radio, CheckboxGroup } from 'vant'
Vue.use(Button).use(Cell).use(CellGroup).use(Field).use(Checkbox).use(Toast).use(Tabbar).use(TabbarItem).use(Icon).use(Loading).use(Popup).use(Dialog).use(RadioGroup).use(Radio).use(CheckboxGroup)


Vue.use(vueEsign)
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
Vue.use(AMap);
Vue.use(SlideVerify);
Vue.use(Antd);


AMap.initAMapApiLoader({
    // 高德key
    key: '0f71ed1284c1a14749d80e0ec382a531',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'],
    uiVersion: '1.0.11' // 版本号
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

router.beforeEach((to, form, next) => {

    next()

})