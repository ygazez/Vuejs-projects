import axios from "axios";
const state = {
  weathers: [],
  forecast: [],
  city: "Ankara",
};
const getters = {
  getWeathers: (state) => state.weathers,

  getCity: (state) => state.city,
  getForecast: (state) => state.forecast,
};
console.log(state);
const mutations = {
  setWeathers: (state, weathers) => {
    let currentweather = {
      last_updated: weathers.current.last_updated,
      temp: weathers.current.temp_c,
      humidity: weathers.current.humidity,
      wind: weathers.current.wind_mph,
      pressure: weathers.current.pressure_mb,
      icon: weathers.current.condition.icon,
    };
    //console.log(currentweather);
    state.weathers = currentweather;
    state.forecast = [];
    var currentHour = parseInt(new Date().getHours());
    for (var i = 1; i <= 5; i++) {
      if (currentHour + i == 24) {
        break;
      }
      var forecast = weathers.forecast.forecastday[0].hour;
      var add = {
        time: forecast[currentHour + i].time.split(" ")[1],
        temperature: forecast[currentHour + i].temp_c,
        condition: forecast[currentHour + i].condition.text,
        icon: forecast[currentHour + i].condition.icon,
      };
      state.forecast.push(add);
    }
    console.log(state.forecast);
  },

  //burda weatherlistte göstereceğin verileri tanımla üstteki gibi

  setCity: (state, city) => {
    state.city = city;
  },
};
const actions = {
  fetchWeathers: async ({ commit }, name) => {
    //console.log(process.env.VUE_APP_API_URL);
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      params: {
        key: process.env.VUE_APP_API_KEY,
        q: state.city,
        days: "1",
        aqi: "no",
        alerts: "no",
      },
    });

    const response = await client.get();
    //console.log(response.data);
    commit("setWeathers", response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
