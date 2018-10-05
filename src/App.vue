<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/navigation/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-image: url('../static/felt.png');
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
  border-radius: 5px;
  border: 4px solid #dddddd;
  background-color: #ffffff;
  margin: 15px;
  width: auto !important;
}
h2, h4 {
  text-align: left;
  margin: 15px 0;
}
</style>
