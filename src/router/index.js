import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/components/Settings'
import GameBoard from '@/components/GameBoard'
import Statistics from '@/components/Statistics'
import PlayerList from '@/components/players/PlayerList'
import PlayerInfo from '@/components/players/PlayerInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameBoard',
      component: GameBoard
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/players',
      name: 'Players',
      component: PlayerList
    },
    {
      path: '/players/:id',
      name: 'Players',
      component: PlayerInfo
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
