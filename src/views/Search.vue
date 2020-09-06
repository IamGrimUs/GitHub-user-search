<template>
  <div>
    <v-card class="container pa-8">
      <h1 class="text-center">Search more than 59M users on GitHub</h1>
      <v-form class="mt-6" @submit.prevent="searchUsers">
        <div id="magnifying-glass" class="mr-4 float-left mt-6"></div>
        <v-text-field
          v-model="input"
          id="searchInput"
          label="User Name"
          required
        ></v-text-field>
        <div class="mt-6">
          <v-btn color="primary" type="submit">Search</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
  methods: {
    searchUsers() {
      this.$store.dispatch('updateSearchInput', this.input)
      this.$store.dispatch('fetchUsers', 1)
      this.$router.push('allUsers')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 880px;
  margin: 0 auto;
}
.float-left {
  float: left;
}
/* CSS magnifying glass from CSS Tricks article https://css-tricks.com/the-shapes-of-css/ */
#magnifying-glass {
  font-size: 1.5em;
  display: inline-block;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid #171c21;
  position: relative;
  border-radius: 0.35em;
}
#magnifying-glass:before {
  content: '';
  display: inline-block;
  position: absolute;
  right: -0.25em;
  bottom: -0.1em;
  border-width: 0;
  background: #171c21;
  width: 0.35em;
  height: 0.08em;
  transform: rotate(45deg);
}
</style>
