<template>
  <div>
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title">{{ 'HomeAccounting' | localize }}</span>
        <div class="input-field">
          <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email)
            }"
          />
          <label for="email">Email</label>
          <small
            v-if="$v.email.$dirty && !$v.email.required"
            class="helper-text invalid"
            >{{ 'EnterEmail' | localize }}</small
          >
          <small
            v-else-if="$v.email.$dirty && !$v.email.email"
            class="helper-text invalid"
            >{{ 'EnterCorrectEmail' | localize }}</small
          >
        </div>
        <div class="input-field">
          <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength)
            }"
          />
          <label for="password">{{ 'Password' | localize }}</label>
          <small
            v-if="$v.password.$dirty && !$v.password.required"
            class="helper-text invalid"
            >{{ 'EnterPassword' | localize }}</small
          >
          <small
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            class="helper-text invalid"
            >{{ 'LargerPassword' | localize }}
            {{ this.$v.password.$params.minLength.min }} {{ 'Characters' | localize }}</small
          >
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            {{ 'Login' | localize }}
            <i class="material-icons right">send</i>
          </button>
        </div>
        <p class="center">
          {{ 'DontHaveAccount' | localize }}
          <router-link to="/register">{{ 'SingUp' | localize }}</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (error) {}
    }
  }
}
</script>
