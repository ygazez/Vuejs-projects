<template>
  <div class="home">
    <div class="weathers">
      <weather-card :weather="getWeathers" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import WeatherCard from "../components/WeatherCard.vue";
import WeatherList from "../components/WeatherList.vue";
export default {
  name: "Home",
  components: {
    WeatherCard,
    WeatherList,
  },

  created() {
    this.fetchWeathers("bursa");
    console.log("home created");
  },
  methods: {
    ...mapActions(["fetchWeathers"]),
  },
  computed: {
    ...mapGetters(["getWeathers"]),
  },
};
</script>
<style>
.weathers {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
