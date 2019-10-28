<template>
  <div>
    <div class="page-subtitle">
      <h4>{{ 'Category_Create' | localize }}</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model="title"
          :class="{ invalid: $v.title.$dirty && !$v.title.required }"
        />
        <label for="name">{{ 'Category_Name' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
          >{{ 'Category_EnterCategoryName' | localize }}</span
        >
      </div>

      <div class="input-field">
        <input
          id="limit"
          type="number"
          v-model.number="limit"
          :class="{
            invalid:
              ($v.limit.$dirty && !$v.limit.minValue) ||
              ($v.limit.$dirty && !$v.limit.required)
          }"
        />
        <label for="limit">{{ 'Category_Limit' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="
            ($v.limit.$dirty && !$v.limit.minValue) ||
              ($v.limit.$dirty && !$v.limit.required)
          "
          >{{ 'Category_MinValue' | localize }} {{ $v.limit.$params.minValue.min }}</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Category_Create' | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import categoryFormValidationMixin from '@/mixins/categoryFormValidation.mixin'
import localizeFilter from '@/filters/localize.filter'

export default {
  mixins: [categoryFormValidationMixin],
  methods: {
    async validFormHandler() {
      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        })
        this.title = ''
        this.limit = 1
        this.$v.$reset()
        this.$message(`${localizeFilter('Message_Category')} «${category.title}» ${localizeFilter('Message_Created')}`)
        this.$emit('created', category)
      } catch (error) {}
    }
  }
}
</script>
