<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input id="description" type="text" v-model="name" />
        <label for="description">Имя</label>
        <small v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid">Введите имя</small>
        <small
          v-else-if="$v.name.$dirty && !$v.name.required"
          class="helper-text invalid"
        >Имя должен быть больше {{ this.$v.name.$params.minLength.min }} символов</small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
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
    name: ''
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
          name: this.name
        })
      } catch (error) {}
    }
  },
  mounted() {
    this.name = this.info.name
    setTimeout(() => {
      M.updateTextFields()
    })
  }
}
</script>
