<template>
  <div class="container-fluid">
    <h2>{{ msg }}</h2>
    <div class="row" style="padding-bottom: 15px;">
      <div class="col-8">
        Mat
      </div>
      <div class="col-4" style="border-width: 0 0 0 1px; border-style: solid; border-color: #dddddd;">
        Players
        <ul class="playerList">
          <router-link tag="li" :to='"/players/" + player.id' v-for="player in players" :key="player.id">
            <a>{{ player.name }}</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      msg: 'Game Board',
      players: [
        {
          name: 'Hayden',
          id: 1
        },
        {
          name: 'John-Michael',
          id: 2
        },
        {
          name: 'Doug',
          id: 3
        },
        {
          name: 'Radi',
          id: 4
        }
      ]
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
