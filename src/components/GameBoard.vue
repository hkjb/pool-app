<template>
  <div class="container-fluid">
    <PageTitle title="Game Board" />
    <div class="row" style="padding-bottom: 15px;">
      <div class="col-xs-12 col-md-8">
        <h5>Mat</h5>
        <div class="row">
          <div class="col-6">
            <select class="form-control" v-model="player1">
              <option value="-2">
                Player 1
              </option>
              <option v-for="player in players" :key="player.id" :value="player.id" :disabled="player.id === player2">
                {{ player.firstName }} {{ player.lastName }}
              </option>
            </select>
            <button class="btn btn-info btn-block" :disabled="player1 === -2 || player2 === -2" v-on:click="player1wins">Winner</button>
          </div>
          <div class="col-6">
            <select class="form-control" v-model="player2">
              <option value="-2">
                Player 2
              </option>
              <option v-for="player in players" :key="player.id" :value="player.id" :disabled="player.id === player1">
                {{ player.firstName }} {{ player.lastName }}
              </option>
            </select>
            <button class="btn btn-info btn-block" :disabled="player1 === -2 || player2 === -2" v-on:click="player2wins">Winner</button>
          </div>
        </div>
      </div>
      <div class="d-none d-md-block col-md-4 playerHolder">
        <h5>Players</h5>
        <table class="table table-striped table-sm" v-if="players">
          <thead>
            <tr>
              <td style="text-align: center;">ID</td>
              <td>Name</td>
              <td style="text-align: center;">W</td>
              <td style="text-align: center;">L</td>
              <td style="text-align: center;">R</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in recordRating" :key="player.id">
              <td style="text-align: center;">{{ player.id }}</td>
              <router-link tag="td" :to='"/players/" + player.id' style="display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <a>{{ player.firstName | firstLetter }}. {{ player.lastName }}</a>
              </router-link>
              <td style="text-align: center;">{{ player.wins }}</td>
              <td style="text-align: center;">{{ player.losses }}</td>
              <td style="text-align: center;">{{ player.wins + player.losses }}</td>
            </tr>
          </tbody>
        </table>
        <span v-if="!players">
          None Found
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './navigation/PageTitle'
import PlayerService from '../services/PlayerService'

export default {
  name: 'GameBoard',
  components: { PageTitle },
  created () {
    this.players = PlayerService.get()
  },
  methods: {
    player1wins () {
      this.submitWinner(this.player1, this.player2)
    },
    player2wins () {
      this.submitWinner(this.player2, this.player1)
    },
    submitWinner (winner, loser) {
      PlayerService.processGame(winner, loser)
    }
  },
  data () {
    return {
      players: [],
      player1: -2,
      player2: -2
    }
  },
  computed: {
    recordRating () {
      return JSON.parse(JSON.stringify(this.players)).sort(function (a, b) {
        return (a.wins + a.losses) < (b.wins + b.losses)
      })
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
.playerHolder {
  padding-bottom: 15px;
  border-left: 1px solid #dddddd !important;
}
.playerList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.playerList li {
  text-align: left;
}
.playerList li:hover {
  background-color: #dddddd;
}
.playerList li a {
  display: block;
  text-decoration: none;
  padding: 0 5px;
}
button {
  margin-top: 15px;
}
</style>
