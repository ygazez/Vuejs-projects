<template>
  <div id="app">
    <div class="main-card">
      <PictureCard></PictureCard>

      <div class="back-card"></div>

      <WorldCard></WorldCard>
    </div>
  </div>
</template>
<script>
import PictureCard from "./components/PictureCard.vue";
import WorldCard from "./components/WorldCard.vue";
export default {
  components: { PictureCard, WorldCard },
};
</script>
<style lang="scss">
#app {
  display: flex;
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c1c6b;
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
  justify-content: center;
  align-items: center;
  top: 20%;
  position: absolute;
  z-index: 1;

  border-radius: 20px;
  width: 350px;
  height: 250px;
  background-color: #2c1c6b;
  margin-top: 100px;
}
</style>
