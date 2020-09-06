<template>
  <div>
    <h1>{{ searchTitle }}</h1>
    <form>
      <label for="searchInput">
        <div id="magnifying-glass"></div>
        User Name:
        <input type="text" id="searchInput" v-model="input" />
      </label>
      <button @click.prevent="updateSearchInput">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    searchTitle: {
      type: String,
      default: 'Search more than 59M users',
    },
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
    updateSearchInput() {
      this.$store.dispatch('updateSearchInput', this.input)
      this.$store.dispatch('fetchUsers', 1)
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
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
