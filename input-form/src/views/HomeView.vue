<template>
  <div class="home">
    <div class="users">
      <input-form :user="getUsers" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import inputForm from "../components/inputForm.vue";
export default {
  name: "HomeView",
  components: {
    inputForm,
  },
  created() {
    this.fetchUsers();
    console.log("Home created");
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>
