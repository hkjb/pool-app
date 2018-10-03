<template>
  <div class="header">
    <ul>
      <router-link tag="li" to="/">
        <a>Game Board</a>
      </router-link>
      <router-link tag="li" to="/statistics">
        <a>Statistics</a>
      </router-link>
      <router-link tag="li" to="/players">
        <a>Players</a>
      </router-link>
      <router-link tag="li" to="/settings">
        <a>Settings</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: rgba(0, 0, 0, 0.35);
}
.header ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 0;
}
.header ul li {
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  font-size: 15px;

  border-width: 0 1px 0 0;
  border-color: #04522e;
  border-style: solid;
}
.header ul li.router-link-exact-active {
  background-image: url('/static/felt.png');
}
.header ul li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.header ul li a {
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
}
</style>
