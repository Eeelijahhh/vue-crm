<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <div class="col s12 m6 l4">
        <HomeBill />
      </div>

      <div class="col s12 m6 l8">
        <HomeCurrency />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/HomeBill";
import HomeCurrency from "@/components/HomeCurrency";

export default {
  name: "home",
  data: () => ({
    loading: true
  }),
  components: {
    HomeBill,
    HomeCurrency
  }
}
</script>
