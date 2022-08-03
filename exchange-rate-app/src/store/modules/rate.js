import axios from "axios";
const state = {
  rates: [],
};
const getters = {
  getRates: (state) => state.rates,
};
const mutations = {
  setRates: (state, rates) => {
    state.rates = rates;
  },
};
const actions = {
  fetchRates: async ({ commit }) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    const response = await client.get("/api/kurgetir");
    commit("setRates", response.data);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
