import { required, minValue } from "vuelidate/lib/validators";

export default {
  data: () => ({
    title: "",
    limit: 1
  }),
  validations: {
    title: {
      required
    },
    limit: {
      required,
      minValue: minValue(1)
    }
  },
  mounted() {
    M.updateTextFields();
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.validFormHandler();
    }
  }
}