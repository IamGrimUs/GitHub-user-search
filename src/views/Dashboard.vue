<template>
  <div>
    <Navbar />
    <h1>Here's a list of users matching the serach term {{ searchInput }}.</h1>
    <div class="user-grid mt-6">
      <template v-for="user in users">
        <v-card class="pa-4" @click="gotoGitHub(user.html_url)" :key="user.id">
          <v-avatar :size="80">
            <img :src="user.avatar_url" />
          </v-avatar>
          <p class="text-center user-name mt-4">{{ user.name }}</p>
          <p class="text-center mt-1">{{ user.city }}</p>
          <p class="text-center mt-2">@{{ user.login }}</p>
          <p class="text-center mt-4 user-bio" v-if="user.bio">
            {{ user.bio }}
          </p>
          <p v-else class="text-center mt-4 user-bio">No user bio provided</p>
          <div class="flex mt-6">
            <div>
              <p class="bold">Followers</p>
              <p class="text-center mt-1">
                {{ user.followers }}
              </p>
            </div>
            <div>
              <p class="bold">Following:</p>
              <p class="text-center mt-1">
                {{ user.following }}
              </p>
            </div>
          </div>
        </v-card>
      </template>
    </div>
    <div class="mt-8">
      <v-pagination
        :length="Math.round(totalUserCount / 1000)"
        v-model="page"
        total-visible="7"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
      <p class="text-center mt-2">
        Total number of users found:
        <span class="bold">{{ totalUserCount }}</span>
      </p>
      <p class="msg">
        <span class="bold">Message from GitHub:</span> "Only the first 1000
        search results are available."
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
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
.user-bio {
  height: 60px;
}
.flex > div {
  width: 48%;
}
.span {
  font-size: 0.875rem;
}
.v-application p {
  margin-bottom: 0;
}
@media screen and (min-width: 520px) {
  .user-grid {
    grid-template-columns: 1fr 1fr;
  }
  .user-bio {
    height: 180px;
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
