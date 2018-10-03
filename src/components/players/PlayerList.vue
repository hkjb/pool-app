<template>
  <div class="container-fluid">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PlayerList',
  data () {
    return {
      msg: 'Player List'
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
