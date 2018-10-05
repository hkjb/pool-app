<template>
  <div class="container-fluid">
    <PageTitle title="Game Board" />
    <div class="row" style="padding-bottom: 15px;">
      <div class="col-xs-12 col-md-8">
        <h5>Mat</h5>
      </div>
      <div class="d-none d-md-block col-md-4 playerHolder">
        <h5>Players</h5>
        <ul class="playerList">
          <router-link tag="li" :to='"/players/" + player.id' v-for="player in players" :key="player.id" v-if="players">
            <a>{{ player.firstName }} {{ player.lastName }}</a>
          </router-link>
          <span v-if="!players">
            None Found
          </span>
        </ul>
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
  data () {
    return {
      players: []
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
</style>
