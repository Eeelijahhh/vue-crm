<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>{{ this.info.bill | currency }}</h4>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      Категорий пока нет.
      <router-link to="/categories">Добавить новую категорию</router-link>
    </p>

    <section v-else>
      <div
        v-for="category of categories"
        :key="category.id"
        v-tooltip="category.tooltip"
      >
        <p>
          <strong>{{ category.title }}:</strong>
          {{ category.spend | currency }} из {{ category.limit | currency }}
        </p>
        <div class="progress">
          <div
            class="determinate"
            :class="[category.progressColor]"
            :style="{ width: `${category.progressPercent}%` }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import currencyFilter from '@/filters/currency.filter'

export default {
  data: () => ({
    loading: true,
    categories: []
  }),
  computed: {
    ...mapGetters(['info'])
  },
  async mounted() {
    const categories = await this.$store.dispatch('fetchCategories')
    const records = await this.$store.dispatch('fetchRecords')

    this.categories = categories.map(category => {
      const spend = records
        .filter(record => record.categoryId === category.id)
        .filter(record => record.type === 'outcome')
        .reduce((total, record) => {
          return (total += +record.amount)
        }, 0)
      const percent = (spend / category.limit) * 100
      const progressPercent = percent > 100 ? 100 : percent
      const progressColor =
        percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red'
      const tooltipValue = category.limit - spend
      const tooltip = `${
        tooltipValue < 0 ? 'Превышение на' : 'Осталось'
      } ${currencyFilter(Math.abs(tooltipValue))}`
      return {
        ...category,
        progressPercent,
        progressColor,
        spend,
        tooltip
      }
    })
    this.loading = false
  }
}
</script>
