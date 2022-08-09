<template>
 
    <div class="picture-card">
      <div class="picture-card-row">
        <img src="../assets/woman.png" alt="" class="picture-card-row-img" />
        <h3 class="picture-card-row-text">
          Debra Stephens
          <div class="row-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="picture-card-row-text-location">Minneapolis,MN,USA</span>
          </div>
        </h3>
      </div>
      <div class="buttons">
        <button class="buttons-style-follow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather-user-plus"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line></svg
          >Follow
        </button>
        <button class="buttons-style-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather-mail"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline></svg
          >Message
        </button>
      </div>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "PictureCard",
 
};
</script>
<style lang="scss">

.picture-card {
  display: flex;
  left: 35%;
  margin-left:-100px;
  margin-top:100px;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 20px;
  width: 350px;
  height: 300px;
  
  
  position: absolute;
  z-index: 2;
  &-row {
    display: flex;
    align-items:center;
    margin: 40px;
    gap: 30px;
    height: 100px;
    &-img {
      margin-top: 10px;
      width: 70px;
      height: 70px;
    }
    &-text {
      &-location {
        font-size: 0.8rem;
      }
    }
  }
}
.feather {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-user-plus {
    margin-right: 5px;
  }
  &-mail {
    margin-right: 5px;
  }
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: -30px;
  gap: 10px;

  &-style-follow {
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    background-color: #2c1c6b;
    border-radius: 5px;
    border: 0px;
    color: #ffff;
  }
  &-style-message {
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    background-color: #ffff;
    border-radius: 5px;
    border: 1px solid #2c1c6b;
    color: #2c1c6b;
  }
}
.row-column {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
