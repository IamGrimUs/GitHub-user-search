<template>
  <div>
    <h1>{{ searchTitle }}</h1>
    <form>
      <label for="userName">
        User Name:
        <input type="text" v-model="input" />
      </label>
      <p>{{ getSearchInput }}</p>
      <button @click.prevent="updateSearchInput">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    searchTitle: {
      type: String,
      default: "Search more than 59M users"
    }
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    getSearchInput() {
      return this.$store.getters.getSearchInput;
    }
  },
  methods: {
    updateSearchInput() {
      this.$store.dispatch("updateSearchInput", this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
