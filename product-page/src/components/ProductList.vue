<template>
  <div class="container">
    <div class="product">
      <div class="product-header"><h2 class="header-text">SHOPPING</h2></div>
      <div class="products">
        <ul class="products-list">
          <li class="products-list-item">
            <img
              src="../assets/images/agactablosu.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Ağaç Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/çiçektablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Çiçek Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/çiçektablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Çiçek Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/çiçektablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Çiçek Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/deniztablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Deniz Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/deniztablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Deniz Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/deniztablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Deniz Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/deniztablo.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yağlı Boya Deniz Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
          <li class="products-list-item">
            <img
              src="../assets/images/yelkenli-yagli-boya-tablo-032d65.jpg"
              class="products-list-item-img"
              alt=""
            />
            <p>Yelkenli Yağlı Boya Tablosu</p>
            <p>200.00 ₺</p>
            <button class="btn">SEPETE EKLE</button>
          </li>
        </ul>
      </div>
      <div class="pages">
        <a class="pages-item" href=""><</a><a class="pages-item" href="">1</a
        ><a class="pages-item" href="">2</a><a class="pages-item" href="">3</a
        ><a class="pages-item" href="">></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 77.5rem;
  margin-left: auto;
  margin-right: auto;
}

.product-header {
  background-color: #ac7088;
  display: flex;
  justify-content: center;
  color: #f5e8c7;
}

.products-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  &-item {
    list-style: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #deb6ab;
    border: 2px, #ac7088;
    border-radius: 20px;
    color: black;

    &-img {
      width: 300px;
      height: 300px;
    }
  }
}

.product {
  background-color: #f5e8c7;
}
.btn {
  background-color: #ac7088;
  border-radius: 20px;
  font-family: Apple Chancery, cursive;
}

.pages-item {
  border: 1px solid #ac7088;
  font-size: 25px;
  background-color: #ecccb2;
  text-decoration: none;
  color: black;
}
</style>
