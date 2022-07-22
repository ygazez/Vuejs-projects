<template>
  <div id="app">
    <div class="weather">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.weather {
  display: flex;
  justify-content: center;

  align-items: center;
  background-image: url("assets/images/weather.jpg");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
