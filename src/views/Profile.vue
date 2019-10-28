<template>
  <div>
    <div class="page-title">
      <h3>{{ 'Profile_Title' | localize }}</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input id="description" type="text" v-model="name" />
        <label for="description">{{ 'Profile_Name' | localize }}</label>
        <small v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid">{{ 'Profile_EnterName' | localize }}</small>
        <small
          v-else-if="$v.name.$dirty && !$v.name.minLength"
          class="helper-text invalid"
        >{{ 'Profile_NameLarger' | localize }} {{ this.$v.name.$params.minLength.min }} {{ 'Profile_Simbols' | localize }}</small>
      </div>

      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale" />
          <span class="lever"></span>
          Русский
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Profile_Update' | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'profile',
  data: () => ({
    name: '',
    isRuLocale: true
  }),
  computed: {
    ...mapGetters(['info'])
  },
  validations: {
    name: { required, minLength: minLength(3) }
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        this.updateInfo({
          name: this.name,
          locale: this.isRuLocale ? 'ru-RU' : 'en-US'
        })
      } catch (error) {}
    }
  },
  mounted() {
    this.name = this.info.name
    this.isRuLocale = this.info.locale === 'ru-RU'
    setTimeout(() => {
      M.updateTextFields()
    })
  }
}
</script>

<style lang="scss" scoped>
  .switch {
    margin-bottom: 1rem;
  }
</style>
