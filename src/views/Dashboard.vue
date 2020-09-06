<template>
  <div>
    <h1>Here's a list of users matching the serach term {{ searchInput }}.</h1>
    <div class="user-grid mt-6">
      <template v-for="user in users">
        <v-card class="pa-4" @click="gotoGitHub(user.html_url)" :key="user.id">
          <v-avatar :size="80">
            <img :src="user.avatar_url" />
          </v-avatar>
          <p class="text-center user-name mt-4">{{ user.login }}</p>
          <p class="text-center mt-4" v-if="user.bio">{{ user.bio }}</p>
          <p v-else>No description provided.</p>
          <div class="flex">
            <div>
              <p class="bold">Followers</p>
              <p class="text-center mt-4" v-if="user.followers">
                {{ user.followers }}
              </p>
              <p v-else>0</p>
            </div>
            <div>
              <p class="bold">Following:</p>
              <p class="text-center mt-4" v-if="user.following">
                {{ user.following }}
              </p>
              <p v-else>0</p>
            </div>
          </div>
        </v-card>
      </template>
    </div>
    <div class="mt-8">
      <v-pagination
        :length="Math.round(totalUserCount / 50) + 1"
        v-model="page"
        total-visible="7"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
      <p class="text-center mt-2">
        Total number of users found:
        <span class="bold">{{ totalUserCount }}</span>
      </p>
    </div>
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
    ...mapState(['users', 'totalUserCount', 'searchInput']),
  },
  watch: {
    page() {
      this.$store.dispatch('fetchUsers', this.page)
    },
  },
  methods: {
    gotoGitHub(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.user-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin: 0 auto;
  width: 98%;
}
.user-name {
  font-size: 1.25rem;
  font-weight: 700;
}
.flex > div {
  width: 48%;
}
@media screen and (min-width: 520px) {
  .user-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 740px) {
  .user-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 980px) {
  .user-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
