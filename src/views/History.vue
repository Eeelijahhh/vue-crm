<template>
  <div>
    <div class="page-title">
      <h3>{{ 'History_RecordsHistory' | localize }}</h3>
    </div>

    <Loader v-if="loading" />

    <div v-else-if="records.length">
      <HistoryChart :records="records" :categories="categories" />

      <section>
        <HistoryTable :records="items" />

        <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="paginationHandler"
          :prev-text="prevText"
          :next-text="nextText"
          :container-class="containerClass"
          :page-class="pageClass"
        ></Paginate>
      </section>
    </div>

    <p class="center" v-else>
      {{ 'NoRecordsYet' | localize }}.
      <router-link to="/record">{{ 'AddNewRecord' | localize }}</router-link>
    </p>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable'
import HistoryChart from '@/components/HistoryChart'
import paginationMixin from '@/mixins/pagination.mixin'
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'history',
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: [],
    categories: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.categories = await this.$store.dispatch('fetchCategories')

    this.paginationSetup(
      this.records.map(record => {
        return {
          ...record,
          categoryName: this.categories.find(category => category.id === record.categoryId).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? localizeFilter('Income') : localizeFilter('Outcome')
        }
      })
    )
    this.loading = false
  },
  components: {
    HistoryTable,
    HistoryChart
  }
}
</script>
