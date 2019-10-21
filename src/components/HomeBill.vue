<template>
  <div class="card light-blue bill-card">
    <div class="card-content white-text">
      <span class="card-title">Счет в валюте</span>

      <p class="currency-line" v-for="currency of currencies" :key="currency">
        <span>{{ getCurrency(currency) | currency(currency) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['EUR', 'USD', 'RUB']
  }),
  methods: {
    getCurrency(currency) {
      return Math.floor(this.$store.getters.info.bill * this.rates[currency])
    }
  }
}
</script>
