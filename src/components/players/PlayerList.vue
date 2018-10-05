<template>
  <div class="container-fluid">
    <PageTitle title="Player List" />

    <ul class="playerList">
      <table class="table table-striped" v-if="players">
        <thead>
          <tr>
            <td style="width: 60px; text-align: center;">ID</td>
            <td>Name</td>
            <td style="width: 75px; text-align: center;">Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id">
            <td style="text-align: center; vertical-align: middle;">{{ player.id }}</td>
            <router-link tag="td" :to='"/players/" + player.id' style="vertical-align: middle;">
              <a>{{ player.firstName }} {{ player.lastName }}</a>
            </router-link>
            <td>
              <button class="btn btn-danger btn-block" v-on:click="remove(player.id)">
                <i class="fa fa-times"></i>
              </button>
            </td>
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
import PageTitle from '../navigation/PageTitle'
import PlayerService from '../../services/PlayerService'

export default {
  name: 'PlayerList',
  components: { PageTitle },
  created () {
    this.players = PlayerService.get()
  },
  methods: {
    remove (id) {
      PlayerService.remove(id)
    }
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
