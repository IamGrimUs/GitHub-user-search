<template>
  <div>
    <p>The user is:</p>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
