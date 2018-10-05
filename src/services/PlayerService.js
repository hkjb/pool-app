import router from '../router'

export default {
  get () {
    this.players = localStorage.getItem('players')
    if (this.players) {
      return JSON.parse(this.players)
    } else {
      return false
    }
  },
  getSingle (id) {
    this.players = localStorage.getItem('players')
    if (this.players) {
      var players = JSON.parse(this.players)
      for (var p = 0; p < players.length; p++) {
        if (parseInt(id) === players[p].id) {
          return players[p]
        }
      }
    }
  },
  add (data) {
    data = JSON.parse(JSON.stringify(data))
    this.newPlayer = data
    this.newPlayer.id = 0
    this.newPlayer.wins = 0
    this.newPlayer.losses = 0

    this.players = localStorage.getItem('players')
    if (this.players) {
      parsePlayers(this.players, this.newPlayer)
    } else {
      addPlayer(this.players, this.newPlayer)
    }

    function parsePlayers (oldPlayers, newPlayer) {
      oldPlayers = JSON.parse(oldPlayers)
      var highest = -1
      for (var p = 0; p < oldPlayers.length; p++) {
        if (oldPlayers[p].id >= highest) {
          highest = (oldPlayers[p].id + 1)
        }
      }
      newPlayer.id = highest
      oldPlayers = JSON.stringify(oldPlayers)
      addPlayer(oldPlayers, newPlayer)
    }
    function addPlayer (oldPlayers, newPlayer) {
      oldPlayers = JSON.parse(oldPlayers)
      oldPlayers.push(newPlayer)
      const parsed = JSON.stringify(oldPlayers)
      localStorage.setItem('players', parsed)
      router.go(-1)
    }
  },
  remove (id) {
    this.players = localStorage.getItem('players')
    if (this.players) {
      var players = JSON.parse(this.players)
      for (var p = 0; p < players.length; p++) {
        if (id === players[p].id) {
          players.splice([p], 1)
        }
      }
    }
    const parsed = JSON.stringify(players)
    localStorage.setItem('players', parsed)
    router.go('/')
  },
  update (player) {
    player = JSON.parse(JSON.stringify(player))
    this.players = localStorage.getItem('players')
    if (this.players) {
      var players = JSON.parse(this.players)
      for (var p = 0; p < players.length; p++) {
        if (player.id === players[p].id) {
          players[p] = player
        }
      }
    }
    const parsed = JSON.stringify(players)
    localStorage.setItem('players', parsed)
    router.go('/')
  },
  processGame (winner, loser) {
    this.players = localStorage.getItem('players')
    if (this.players) {
      var players = JSON.parse(this.players)
      for (var p = 0; p < players.length; p++) {
        if (winner === players[p].id) {
          players[p].wins = (players[p].wins + 1)
        }
        if (loser === players[p].id) {
          players[p].losses = (players[p].losses - 1)
        }
      }
    }
    const parsed = JSON.stringify(players)
    localStorage.setItem('players', parsed)
    router.go('/')
  },
  players: [],
  newPlayer: {
    id: 0,
    firstName: '',
    lastName: ''
  }
}
