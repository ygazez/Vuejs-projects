<template>
  <div class="weather-list">
    <nav class="list">
      <ul>
        <li>
          <span class="forecast-time"> {{ forecast.time }}</span>
          <img
            :src="forecast.icon"
            :alt="forecast.condition"
            class="forecast-icon"
          />
          <small>{{ forecast.temperature }}℃</small>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WeatherList",
  props: {
    forecast: [],
  },

  mounted() {
    console.log(this.forecast);
  },
};
</script>
<style>
.weather-list {
  margin-top: 35px;
  display: initial;
}

.list ul {
  padding: 0;
  margin: 0;
  display: flex;
  grid-gap: 20px 0;
  list-style-type: none;
}
.list ul li {
  margin-right: 50px;
  display: grid;
  grid-gap: 10px 0;
  text-align: center;
}
</style>
