<template>
  <div class="home">
    <CopyLink :url="url" />

    <input class="input" type="text" ref="urlinput" :value="copiedUrl" />
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import CopyLink from "../components/CopyLink.vue";
export default {
  name: "HomeView",

  components: {
    CopyLink,
  },
  data() {
    return {
      url: "https://github.com/ygazez",
      copiedUrl: "",
    };
  },
  created() {
    eventBus.$on("copy", (copiedUrl) => {
      this.copiedUrl = copiedUrl;
      console.log(copiedUrl);
      this.copy();
    });
  },
  methods: {
    copy() {
      const urlValue = this.$refs.urlinput;
      urlValue.select();
      document.execCommand("copy");
      console.log("çalıştı");
    },
  },
};
</script>
<style scoped>
.input {
  position: absolute;
  top: -1000px;
  left: -1000px;
  opacity: 0;
}
</style>
