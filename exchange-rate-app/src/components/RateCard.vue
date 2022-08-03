<template>
  <div class="rate-card">
    <div class="name">
      <input
        type="text"
        v-model="number"
        class="input-seconds"
        placeholder="number"
      />
      <button @click="this.ChangeSec">
        Update every {{ this.number }} milisecond
      </button>

      <div class="rate-information" v-for="item in rate" :key="item.id">
        <div class="rate-name">
          <p>{{ item.Isim }}</p>
        </div>
        <div class="banknote-buying">Buying:{{ item.BanknoteBuying }}</div>
        <div class="banknote-selling">Selling:{{ item.BanknoteSelling }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "RateCard",
  data() {
    return {
      number: 5000,
    };
  },
  props: {
    rate: [],
  },
  methods: {
    ...mapActions(["fetchRates"]),
    ...mapMutations(["setRates"]),

    ChangeSec: function () {
      this.setRates(this.currentCity);
      this.fetchRates();
      setTimeout(this.ChangeSec, this.number);
      console.log(this.number);
      this.number = this.number + 5000;
      console.log(this.number);
    },
    setTime: function () {
      setTimeout(this.ChangeSec, number);
    },
  },
  computed: {
    ...mapGetters(["getRates"]),
  },
  mounted() {
    console.log(this.rate);
  },
};
</script>

<style>
.rate-information {
  display: grid;
  border: 1px solid #0c0c0d;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.banknote-buying {
  margin-bottom: 10px;
}
</style>
