<template>
  <div>
    <template v-for="user in users">
      <div :key="user.id">{{ user.login }}</div>
    </template>
    <template>
      <div class="text-xs-center">
        <v-pagination
          :length="Math.round(totalUserCount / 50) + 1"
          v-model="page"
          total-visible="10"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapState(['users', 'totalUserCount']),
  },
  watch: {
    page() {
      this.$store.dispatch('fetchUsers', this.page)
    },
  },
}
</script>

<style lang="scss" scoped></style>
