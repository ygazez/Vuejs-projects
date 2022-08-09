<template>
  <div class="world-card">
    <h3 class="world-card-header">Worlds</h3>
    <div class="world-card-statistics">
      <div class="world-card-statistics-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="world-card-statistics-item-icon"
        >
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
          ></path>
        </svg>
        <span class="world-card-statistics-item-number">78</span>
      </div>
      <div class="world-card-statistics-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="world-card-statistics-item-icon"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span class="world-card-statistics-item-number">125</span>
      </div>
      <div class="world-card-statistics-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="world-card-statistics-item-icon"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
        <span class="world-card-statistics-item-number">50</span>
      </div>
    </div>
    <span class="world-card-date">Published: March 7th 2022</span>
  </div>
</template>
<style lang="scss">
.world-card {
  display: flex;
  border-radius: 20px;
  right: 25%;
  top: 32%;
  width: 275px;
  height: 200px;
  background-color: #ffff;
  position: absolute;
  z-index: 2;
  flex-direction: column;
  color: #2c1c6b;
  &-header {
    display: flex;
    margin-top: 15%;
    margin-left: 15%;
  }
  &-statistics {
    display: flex;
    gap: 30px;
    flex-flow: row nowrap;
    margin-left: 15%;
    margin-top: 8%;
    &-item {
      display: flex;
      gap: 5px;
      &-number {
        display: flex;
        align-items: center;
        font-size: small;
      }
    }
  }
  &-date {
    display: flex;
    margin-top: 5%;
    justify-content: center;
    font-size: small;
    color: #8a88af;
  }
}
</style>
