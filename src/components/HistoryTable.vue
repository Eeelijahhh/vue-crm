<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{ 'History_Amount' | localize }}</th>
        <th>{{ 'History_Date' | localize }}</th>
        <th>{{ 'History_Category' | localize }}</th>
        <th>{{ 'History_Type' | localize }}</th>
        <th>{{ 'History_Open' | localize }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, index) of records" :key="record.id">
        <td>{{ index + 1 }}</td>
        <td>{{ record.amount | currency }}</td>
        <td>{{ record.date | date('date') }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span class="white-text badge" :class="[record.typeClass]">{{
            record.typeText
          }}</span>
        </td>
        <td>
          <router-link
            tag="button"
            :to="`/detail/${record.id}`"
            class="btn-small btn"
            v-tooltip="viewRecord"
          >
            <i class="material-icons">open_in_new</i>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    viewRecord: localizeFilter('History_ViewRecord')
  })
}
</script>
