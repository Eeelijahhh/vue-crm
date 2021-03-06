<template>
  <div>
    <div class="page-title">
      <h3>{{ 'Record_NewRecord' | localize }}</h3>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      {{ 'NoCategoriesYet' | localize }}
      <router-link to="/categories">{{ 'AddNewCategory' | localize }}</router-link>
    </p>

    <form v-else class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="select" v-model="currentCategoryId">
          <option
            v-for="category of categories"
            :key="category.id"
            :value="category.id"
            >{{ category.title }}
          </option>
        </select>
        <label>{{ 'Record_SelectCategory' | localize }}</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>{{ 'Income' | localize }}</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>{{ 'Outcome' | localize }}</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{
            invalid:
              ($v.amount.$dirty && !$v.amount.minValue) ||
              ($v.amount.$dirty && !$v.amount.required)
          }"
        />
        <label for="amount">{{ 'Amount' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="
            ($v.amount.$dirty && !$v.amount.minValue) ||
              ($v.amount.$dirty && !$v.amount.required)
          "
          >{{ 'Record_MinValue' | localize }} {{ $v.amount.$params.minValue.min }}</span
        >
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{
            invalid: $v.description.$dirty && !$v.description.required
          }"
        />
        <label for="description">{{ 'Record_Description' | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.description.$dirty && !$v.description.required"
          >{{ 'Record_EnterDescription' | localize }}</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Record_Create' | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'record',
  data: () => ({
    loading: true,
    categories: [],
    currentCategoryId: null,
    amount: 1,
    description: '',
    type: 'outcome'
  }),
  validations: {
    amount: { required, minValue: minValue(1) },
    description: { required }
  },
  computed: {
    ...mapGetters(['info']),
    canCreateRecord() {
      if (this.type === 'income') {
        return true
      }
      return this.info.bill >= this.amount
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      if (this.canCreateRecord) {
        await this.$store.dispatch('createRecord', {
          categoryId: this.currentCategoryId,
          type: this.type,
          amount: this.amount,
          description: this.description,
          date: new Date().toJSON()
        })
        const bill =
          this.type === 'income'
            ? this.info.bill + this.amount
            : this.info.bill - this.amount
        await this.$store.dispatch('updateInfo', { bill })

        this.$message('Новая запись была создана')
        this.$v.$reset()
        this.type = 'outcome'
        this.amount = 1
        this.description = ''
      } else {
        this.$message(
          `Недостаточно средств на счету (${this.amount - this.info.bill})`
        )
      }
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false

    if (this.categories.length) {
      this.currentCategoryId = this.categories[0].id
    }

    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select)
      M.updateTextFields()
    })
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>
