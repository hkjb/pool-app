import Vue from 'vue'
import Router from 'vue-router'
import GameBoard from '@/components/GameBoard'
import Statistics from '@/components/Statistics'
import PlayerAdd from '@/components/players/PlayerAdd'
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
      path: '/add',
      name: 'Add Player',
      component: PlayerAdd
    },
    {
      path: '/players',
      name: 'Player List',
      component: PlayerList
    },
    {
      path: '/players/:id',
      name: 'Player Info',
      component: PlayerInfo
    }
  ]
})
