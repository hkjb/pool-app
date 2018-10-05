<template>
  <div class="container-fluid">
    <PageTitle title="New" parent="Players" />
    <div class="row">
      <div class="col-xs-6 col-md-5">
        <input class="form-control" v-model="player.firstName" placeholder="First Name" v-on:keyup.enter="submit">
      </div>
      <div class="col-xs-6 col-md-5">
        <input class="form-control" v-model="player.lastName" placeholder="Last Name" v-on:keyup.enter="submit">
      </div>
      <div class="col-xs-6 col-md-2">
        <button class="btn btn-primary btn-block" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../navigation/PageTitle'
import PlayerService from '../../services/PlayerService'

export default {
  name: 'PlayerAdd',
  components: { PageTitle },
  methods: {
    submit () {
      PlayerService.add(this.player)
    }
  },
  data () {
    return {
      player: {
        firstName: '',
        lastName: ''
      }
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
</style>
