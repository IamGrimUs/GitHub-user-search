<template>
  <div>
    <User />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import User from '../components/User';
export default {
  components: {
    User
  },
  created() {
    console.log('created');
    this.$store.dispatch('fetchUsers');
  },
  computed: mapState(['user'])
};
</script>

<style lang="scss" scoped></style>
