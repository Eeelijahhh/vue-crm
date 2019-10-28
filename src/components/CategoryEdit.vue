<template>
  <div>
    <div class="page-subtitle">
      <h4>{{ 'Category_Edit' | localize }}</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="select" v-model="current">
          <option
            v-for="category of categories"
            :key="category.id"
            :value="category.id"
            >{{ category.title }}</option
          >
        </select>
        <label>{{ 'Category_SelectCategory' | localize }}</label>
      </div>

      <div class="input-field">
        <input
          id="nameEdit"
          type="text"
          v-model="title"
          :class="{ invalid: $v.title.$dirty && !$v.title.required }"
        />
        <label for="nameEdit">{{ 'Category_Name' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
          >{{ 'Category_EnterCategoryName' | localize }}</span
        >
      </div>

      <div class="input-field">
        <input
          id="limitEdit"
          type="number"
          v-model.number="limit"
          :class="{
            invalid:
              ($v.limit.$dirty && !$v.limit.minValue) ||
              ($v.limit.$dirty && !$v.limit.required)
          }"
        />
        <label for="limitEdit">{{ 'Category_Limit' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="
            ($v.limit.$dirty && !$v.limit.minValue) ||
              ($v.limit.$dirty && !$v.limit.required)
          "
          >{{ 'Category_MinValue' | localize }} {{ $v.limit.$params.minValue.min }}</span
        >
      </div>

      <button class="btn btn-margin waves-effect waves-light" type="submit">
        {{ 'Category_Change' | localize }}
        <i class="material-icons right">send</i>
      </button>

      <button
        class="btn waves-effect red darken-1"
        type="button"
        @click="deleteCategory"
      >
        {{ 'Category_Delete' | localize }}
        <i class="material-icons right">delete</i>
      </button>
    </form>
  </div>
</template>

<script>
import categoryFormValidationMixin from '@/mixins/categoryFormValidation.mixin'
import localizeFilter from '@/filters/localize.filter'

export default {
  props: ['categories'],
  mixins: [categoryFormValidationMixin],
  data: () => ({
    select: null,
    current: null
  }),
  methods: {
    async validFormHandler() {
      try {
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit
        }
        await this.$store.dispatch('updateCategory', categoryData)
        this.$message(localizeFilter('Message_CategoryChanged'))
        this.$emit('updated', categoryData)
      } catch (error) {}
    },
    async deleteCategory() {
      try {
        await this.$store.dispatch('deleteCategory', this.current)
        this.$message(`${localizeFilter('Message_Category')} «${this.title}» ${localizeFilter('Message_Deleted')}`)
        this.$emit('deleted', this.current)
      } catch (error) {}
    }
  },
  watch: {
    current(currentCategoryId) {
      const { title, limit } = this.categories.find(
        category => category.id === currentCategoryId
      )
      this.title = title
      this.limit = limit
    }
  },
  created() {
    const { title, limit, id } = this.categories[0]
    this.current = id
    this.title = title
    this.limit = limit
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select)
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>

<style lang="scss">
.btn-margin {
  margin-right: 1rem;
}
</style>
