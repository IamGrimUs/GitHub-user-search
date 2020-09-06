<template>
  <div id="app">
    <v-app>
      <router-view :key="$route.fullPath" />
    </v-app>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171c21;
  margin-top: 40px;
  background-color: #f1f1f1;
}
body {
  background-color: #f1f1f1;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.text-center {
  text-align: center;
}
.bold {
  font-weight: 700;
}
a {
  text-decoration: none;
}
</style>
