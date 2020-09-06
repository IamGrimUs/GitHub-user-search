<template>
  <div class="container">
    <nav>
      <router-link to="/" class="nav-item">New Search</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  text-align: center;
}
.nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: #171c21;
  text-decoration: underline;
}
.nav-item:hover,
.nav-item:active,
.nav-item:focus {
  box-sizing: border-box;
  margin: 0 5px;
  color: orangered;
  text-decoration: none;
}
</style>
