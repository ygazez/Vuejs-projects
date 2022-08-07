<template>
  <div id="app">
    <div class="main-card">
      <PictureCard></PictureCard>

      <div class="back-card"></div>
    </div>
  </div>
</template>
<script>
import PictureCard from "./components/PictureCard.vue";

export default {
  components: { PictureCard },
};
</script>
<style lang="scss">
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.main-card {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-color: #dce3fb;
}
.back-card {
  display: flex;
  position: absolute;
  z-index: 0;
  left: 45%;
  top: 10%;
  border-radius: 20px;
  width: 350px;
  height: 300px;
  background-color: #2c1c6b;
  margin-top: 100px;
}
</style>
