<template>
  <div class="weather-card">
    <div class="weather-searchbar">
      <input
        type="text"
        v-model="currentCity"
        @keyup.enter="updateCity"
        class="form-control weather-searchbar-input"
        placeholder="Type in the city..."
      />

      <button type="button" class="btn btn-primary">Search</button>
      <button type="button" class="btn btn-primary">
        <i class="fa-solid fa-location-dot"></i>
      </button>
    </div>
    <div class="city-name">
      <div>
        <h4>
          {{ getCity }}
        </h4>
        <span class="last-update">Last Updated {{ weather.last_updated }}</span>
      </div>
      <div class="weather-information">
        <span class="weather-info-humidity"
          >Humidity {{ weather.humidity }}</span
        >
        <span class="weather-info-wind">Wind {{ weather.wind }} m/s</span>
        <span class="weather-info-pressure"
          >Air pressure {{ weather.pressure }}</span
        >
      </div>
    </div>
    <div class="weather-icon-temperature">
      <img :src="weather.icon" :alt="weather.condition" class="weather-icon" />
      <div>
        <h1>{{ weather.temp }} ℃</h1>
      </div>
    </div>
    <p>Check the forecast for the upcoming hours</p>
    <div class="row">
      <div v-for="forecast in getForecast">
        <WeatherList :forecast="forecast" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import WeatherList from "../components/WeatherList.vue";
export default {
  name: "WeatherCard",
  data: () => ({
    currentCity: "",
  }),

  methods: {
    ...mapActions(["fetchWeathers"]),
    ...mapMutations(["setCity"]),

    updateCity: function () {
      console.log(this.currentCity);
      this.setCity(this.currentCity);
      this.fetchWeathers();
    },
  },
  components: {
    WeatherList,
  },
  props: {
    weather: [],
  },
  computed: {
    ...mapGetters(["getCity", "getForecast"]),
  },

  mounted() {
    console.log(this.weather);
  },
};
</script>

<style>
.weather-card {
  height: auto;
  width: 100%;
  max-width: 600px;
  padding: 20px 20px 20px;
  justify-content: space-between;
  background: #654ea3;
  background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
  background: linear-gradient(to right, #eaafc8, #654ea3);
  border-radius: 25px;
}
.weather-searchbar-input {
  display: initial;
  width: 70%;
  margin-right: 3px;
}
.city-name {
  margin-left: 45px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 0.7rem;
  display: flex;
  justify-content: flex-start;
}

.weather-icon-temperature {
  margin-left: 45px;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
}
.btn {
  margin-right: 3px;
  background-color: #f8bbd0;
}

.weather-searchbar {
  width: 400px;
}
.weather-information {
  margin-left: 250px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: grid;
  justify-content: flex-end;
}
.row {
  display: flex;
  justify-content: space-between;
}
</style>
