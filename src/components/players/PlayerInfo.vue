<template>
  <div class="container-fluid">
    <PageTitle :title='player.firstName + " " + player.lastName' parent="Players" />
    <div class="row">
      <div class="col-xs-6 col-md-5">
        <input class="form-control" v-model="player.firstName" placeholder="First Name" v-on:keyup.enter="update">
      </div>
      <div class="col-xs-6 col-md-5">
        <input class="form-control" v-model="player.lastName" placeholder="Last Name" v-on:keyup.enter="update">
      </div>
      <div class="col-xs-6 col-md-2">
        <button class="btn btn-primary btn-block" v-on:click="update">
          <i class="fa fa-save"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../navigation/PageTitle'
import PlayerService from '../../services/PlayerService'

export default {
  name: 'PlayerInfo',
  components: { PageTitle },
  created () {
    this.player = PlayerService.getSingle(this.$route.params.id)
  },
  methods: {
    update () {
      PlayerService.update(this.player)
    }
  },
  data () {
    return {
      player: {}
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
.row div {
  margin-bottom: 15px;
}
button {
  font-size: 24px;
}
</style>
