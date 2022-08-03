<template>
  <div class="home">
    <div class="rates" v-for="rate in getRates">
      <rate-card :rate="rate" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import RateCard from "../components/RateCard.vue";
export default {
  name: "Home",
  components: {
    RateCard,
  },

  created() {
    this.fetchRates();
    console.log("Home created");
  },
  methods: {
    ...mapActions(["fetchRates"]),
  },
  computed: {
    ...mapGetters(["getRates"]),
  },
};
</script>

<style>
.rates {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
