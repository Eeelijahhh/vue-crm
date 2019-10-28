<template>
  <div>
    <div class="app-main-layout">
      <Navbar @click="isOpen = !isOpen" />
      <Sidebar v-model="isOpen" :key="locale" />
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <Loader v-if="loading" />
          <router-view v-else />
        </div>
      </main>
      <div class="fixed-action-btn" v-tooltip:left="tooltipCreateNewRecord">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true,
    tooltipCreateNewRecord: localizeFilter('Tooltip_CreateNewRecord')
  }),
  computed: {
    locale() {
      return this.$store.getters.info.locale
    }
  },
  async mounted() {
    // User's info is not empty
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>
