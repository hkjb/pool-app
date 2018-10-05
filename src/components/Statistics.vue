<template>
  <div class="container-fluid">
    <PageTitle title="Statistics" />

    <ul class="playerList">
      <table class="table table-striped table-sm" v-if="players">
        <thead>
          <tr>
            <td style="width: 60px; text-align: center;">ID</td>
            <td>Name</td>
            <td style="width: 75px; text-align: center;">Wins</td>
            <td style="width: 75px; text-align: center;">Losses</td>
            <td style="width: 75px; text-align: center;">Record</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id">
            <td style="text-align: center;">{{ player.id }}</td>
            <router-link tag="td" :to='"/players/" + player.id' style="display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              <a>{{ player.firstName }} {{ player.lastName }}</a>
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
    </ul>
  </div>
</template>

<script>
import PageTitle from './navigation/PageTitle'
import PlayerService from '../services/PlayerService'

export default {
  name: 'Statistics',
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
.playerList {
  list-style-type: none;
  padding: 0;
  margin: 0 0 15px 0;
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
