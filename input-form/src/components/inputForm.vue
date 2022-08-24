<template>
  <div class="input">
    <div class="input-form">
      <div>
        <h3 class="input-form-header">Basic information</h3>
        <div class="input-form-picture">
          <img
            :src="`${user.picture.large}`"
            alt=""
            class="input-form-picture-img"
          />
        </div>
      </div>
      <div class="input-form-input-list">
        <ul class="input-form-input-list">
          <span class="input-form-input-list-desc">First Name</span>
          <li class="input-form-input-list-item">
            <input
              type="text"
              class="input-form-input-list-item-input"
              :value="`${user.name.first} `"
            />
          </li>
          <span class="input-form-input-list-desc">Last Name</span>
          <li class="input-form-input-list-item">
            <input
              type="text"
              class="input-form-input-list-item-input"
              :value="` ${user.name.last} `"
            />
          </li>
        </ul>
        <div class="input-form-column">
          <span class="input-form-column-desc">City</span>
          <input
            type="text"
            class="input-form-column-item"
            :value="` ${user.location.city} `"
          />
          <span class="input-form-column-desc">Country</span>
          <input
            type="text"
            class="input-form-column-item"
            :value="` ${user.location.country} `"
          />
          <button class="btn" @click="changeUser()">Change</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "inputForm",

  props: {
    user: Object,
  },

  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapMutations(["setUsers"]),

    changeUser: function () {
      this.fetchUsers();
    },
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  mounted() {
    console.log("asdsdfsF");
    console.log(this.user);
  },
};
</script>

<style lang="scss">
.input {
  display: flex;

  &-form {
    display: flex;
    height: 580px !important;
    width: 800px !important;
    background-color: #1e2749;
    border-radius: 15px;
    flex-direction: row;

    &-header {
      display: flex;
      padding: 84px;
      height: 50px;
    }
    &-picture {
      display: flex;
      width: 180px;
      height: 250px;
      border: 2px solid #7a6c9d;
      margin-left: 84px;
      border-radius: 8px;
      &-img {
        margin: auto;
        border-radius: 50%;
        width: 120px;
        height: 120px;
      }
    }

    &-input-list {
      margin-top: 90px;
      display: flex;
      gap: 15px;
      height: 50px;
      font-size: 14px;

      &-desc {
        margin-top: -25px;
        font-weight: 600;
      }
      &-item {
        display: flex;
        height: 50px;

        &-input {
          color: #f0f4ec;
          margin-left: -90px;
          background-color: #1e2749;
          border: 2px solid #7a6c9d;
          border-radius: 8px;
        }
      }
    }
    &-column {
      display: flex;
      flex-direction: column;
      margin-top: 170px;
      margin-left: -265px;
      height: 300px;
      gap: 10px;
      &-desc {
        display: flex;
        justify-content: flex-start;
        margin-left: -94px;
        font-weight: 600;
      }
      &-item {
        display: flex;
        height: 50px;
        width: 346px;
        margin-left: -94px;
        background-color: #1e2749;
        border: 2px solid #7a6c9d;
        border-radius: 8px;
        color: #f0f4ec;
      }
    }
  }
}
.btn {
  margin-top: 50px;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  border: transparent;
  cursor: pointer;
  background-color: #f0f4ec;
  color: #3d4768;
  font-size: 16px;
}
</style>
