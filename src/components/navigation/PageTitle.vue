<template>
  <div class="title">
    <div class="d-none d-md-inline-block">
      <router-link tag="h2" to="/players" class="parent" v-if="parent">
        <a>{{ parent }}</a> <i class="fa fa-chevron-right"></i>
      </router-link>
      <h2 class="child">{{ title }}</h2>
    </div>

    <div class="d-md-none d-inline-block">
      <router-link tag="h4" to="/players" class="parent" v-if="parent">
        <a>{{ parent }}</a> <i class="fa fa-chevron-right"></i>
      </router-link>
      <h4 class="child">{{ title }}</h4>
    </div>

    <div class="icons">
      <router-link tag="button" to="/add" class="btn btn-success btn-block" v-if="$route.path !== '/add'">
        <span class="label">New Player</span>
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['title', 'parent']
}
</script>

<style scoped>
.title {
  text-align: left;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 15px;
}
.parent {
  display: inline-block;
}
.parent a {
  text-decoration: none;
  color: inherit;
}
.child {
  display: inline-block;
  user-select: none;
}
.icons {
  float: right;
  padding: 20px 0;
}
@media (max-width: 768px) {
  .icons {
    padding: 15px 0 !important;
  }
}
.label {
  user-select: none;
  pointer-events: none;

  font-size: 12px;
  color: #2a6743;
  position: absolute;
  right: 80px;
  opacity: 0;
  transition: 0.25s;
}
.btn:hover .label {
  opacity: 1;
}
</style>
