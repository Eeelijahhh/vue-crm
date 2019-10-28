<template>
  <div class="card orange darken-3 bill-card">
    <div class="card-content white-text">
      <div class="card-header">
        <span class="card-title">{{ 'Home_ExchangeRates' | localize }}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>{{ 'Home_Currency' | localize }}</th>
            <th>{{ 'Home_Exchange' | localize }}</th>
            <th>{{ 'Home_Date' | localize }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="currency of currencies" :key="currency">
            <td>{{ currency }}</td>
            <td>{{ rates[currency] }}</td>
            <td>{{ date | date('date') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['EUR', 'USD', 'RUB']
  })
}
</script>
