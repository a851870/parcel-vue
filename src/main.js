import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//vant-ui
import { Swipe, SwipeItem, Tab, Tabs, Cell, CellGroup, Collapse, CollapseItem, Progress } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Cell).use(CellGroup).use(Progress);

//自定义指令
Vue.directive('unmove', function (el, binding) {
    if(binding.value){
        el.addEventListener('touchmove',function(){ event.preventDefault();event.stopPropagation(); })
        el.addEventListener('touchend',function(){ event.stopPropagation();event.stopPropagation(); })
    }
})

//移动端适应
import 'amfe-flexible/index.js'
//prototype类型修改
import '&/utils/prototype.js'

// 自定义vue插件
import myprogress from '../libs/progress/index'
Vue.use(myprogress)

//vue懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('~/lazyload/loader.gif'),
    loading: require('~/lazyload/loader.gif'),
    attempt: 1,
    // listenEvents: [ 'scroll' ]
})


//vuex状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
        homeScroll: 'visible', 
		rollShow: true,//滚动条显示
        navNum: 0,//当前touch的位置
        sheelShow: true,//歌单显示
        controlShow: false//播放界面
	}
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})