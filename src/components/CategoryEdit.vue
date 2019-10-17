<template>
  <div>
    <div class="page-subtitle">
      <h4>Редактировать</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="select" v-model="current">
          <option
            v-for="category of categories"
            :key="category.id"
            :value="category.id"
          >{{ category.title }}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <div class="input-field">
        <input
          id="nameEdit"
          type="text"
          v-model="title"
          :class="{ invalid: $v.title.$dirty && !$v.title.required }"
        />
        <label for="nameEdit">Название</label>
        <span
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
        >Введите название категории</span>
      </div>

      <div class="input-field">
        <input
          id="limitEdit"
          type="number"
          v-model.number="limit"
          :class="{ invalid: ($v.limit.$dirty && !$v.limit.minValue) || ($v.limit.$dirty && !$v.limit.required) }"
        />
        <label for="limitEdit">Лимит</label>
        <span
          class="helper-text invalid"
          v-if="($v.limit.$dirty && !$v.limit.minValue) || ($v.limit.$dirty && !$v.limit.required)"
        >Минимальное значение {{ $v.limit.$params.minValue.min }}</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Изменить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import CategoryFormValidation from "@/mixins/categoryFormValidation";

export default {
  props: ["categories"],
  mixins: [CategoryFormValidation],
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
        await this.$store.dispatch("updateCategory", categoryData);
        this.$message(`Категория успешно изменена`);
        this.$emit("updated", categoryData);
      } catch (error) {}
    }
  },
  watch: {
    current(currentCategoryId) {
      const { title, limit } = this.categories.find(category => category.id === currentCategoryId);
      this.title = title;
      this.limit = limit;
    }
  },
  created() {
    const { title, limit, id } = this.categories[0];
    this.current = id;
    this.title = title;
    this.limit = limit;
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  }
};
</script>
