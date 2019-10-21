<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      Записей пока нет. 
      <router-link to="/record">Добавить новую запись</router-link>
    </p>

    <div v-else>
      <div class="history-chart">
        <canvas></canvas>
      </div>

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
        >
        </Paginate>
      </section>
    </div>
  </div>
</template>

<script>
import HistoryTable from "@/components/HistoryTable";
import paginationMixin from "@/mixins/pagination.mixin";

export default {
  name: "history",
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch("fetchRecords");
    const categories = await this.$store.dispatch("fetchCategories");

    this.paginationSetup(this.records.map(record => {
      return {
        ...record,
        categoryName: categories.find(category => category.id === record.categoryId).title,
        typeClass: record.type === "income" ? "green" : "red",
        typeText: record.type === "income" ? "Доход" : "Расход"
      }
    }));
    this.loading = false;
  },
  components: {
    HistoryTable
  }
};
</script>
