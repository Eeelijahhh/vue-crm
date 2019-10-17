<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div v-else class="row">
        <div class="col s12 m6">
          <CategoryCreate @created="addNewCategory" />
        </div>
        <div class="col s12 m6">
          <CategoryEdit 
            :categories="categories"
            @updated="updateCategories"
            @deleted="deleteCategory"
            :key="categories.length + updateCount"
            v-if="categories.length"
          />
          <p class="center" v-else>Категорий пока нет</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/CategoryCreate";
import CategoryEdit from "@/components/CategoryEdit";

export default {
  name: "categories",
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(updatedCategory) {
     const index = this.categories.findIndex(category => category.id === updatedCategory.id);
     this.categories[index].title = updatedCategory.title;
     this.categories[index].limit = updatedCategory.limit;
     this.updateCount++;
    },
    deleteCategory(deletedCategoryId) {
      const index = this.categories.findIndex(category => category.id === deletedCategoryId);
      this.categories.splice(index, 1);
    }
  },
  components: {
    CategoryCreate, CategoryEdit
  }
}
</script>