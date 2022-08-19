<template>
  <div class="home">
    <CopyLink :url="url" />

    <input type="hidden" ref="urlinput" :value="copiedUrl" />
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
