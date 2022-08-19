<template>
  <div class="copy-link">
    <div class="copy-link-card">
      <h3 class="copy-link-card-header">Share document</h3>
      <div class="copy-link-card-input">
        <input
          class="copy-link-card-input-url"
          v-on:focus="$event.target.select()"
          ref="clone"
          :value="url"
        />
        <button class="copy-link-card-input-btn" @click="copyUrl">
          Copy link
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main.js";
export default {
  name: "CopyLink",
  props: {
    url: String,
  },
  methods: {
    copyUrl() {
      eventBus.$emit("copy", this.url + "abc");
    },
  },
};
</script>
<style lang="scss">
.copy-link {
  height: 100vh;

  background: linear-gradient(
    90deg,
    rgba(83, 76, 187, 1) 0%,
    rgba(5, 139, 101, 1) 0%,
    rgba(96, 121, 170, 1) 55%,
    rgba(14, 109, 166, 1) 76%,
    rgba(49, 127, 143, 1) 91%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  &-card {
    box-sizing: border-box;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 1000px;
    height: 400px;
    border-radius: 24px;
    background-color: #fff;

    &-header {
      margin: 56px;
      font-weight: 500;
      font-size: 32px;
    }
    &-input {
      width: 895px;
      height: 184px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 16px;
      background-color: #e8f5f3;

      &-url {
        width: 640px;
        height: 72px;
        border-radius: 8px;
        margin: 56px;
        border: 20px double transparent;
        font-size: 16px;
      }
      &-btn {
        width: 123px;
        height: 72px;
        border-radius: 8px;
        margin-left: -20px;
        border: 20px double transparent;
        background-color: #4e7d75;
        color: #fff;
      }
    }
  }
}
</style>
