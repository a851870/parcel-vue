import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Seacrh from  '../views/header/Search'
import Play from '../../libs/progress/index'
import Player from '../views/Player'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				keepAlive: true // 需要被缓存
			  }
		},
        {
            path: '/search',
            name: 'Seacrh',
            component: Home
		}
		,
		{
			path: '/player/:songId',
			name: 'player',
			component :Player,
			meta: {
				keepAlive: true // 需要被缓存
			  }
		}
	]
})
