<template>
  <div class="w-full relative z-10">
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-full"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/truck.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="absolute slide-text h-15 text-white text-center">
              <div class="flex-col justify-end">
                <p>Доставим в самые кратчайшие сроки</p>
                <p>Автомобильные перевозки</p>

                <button class="btn5">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right icon-m"></i>
                </button>
                <p>
                  Транспортно-логистическая компания организует грузоперевозки
                  по всему миру
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/plane.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="absolute slide-text h-15 text-white text-center">
              <div class="flex-col justify-end">
                <p>Доставим в самые кратчайшие сроки</p>
                <p>Авиа перевозки</p>

                <button class="btn5">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right icon-m"></i>
                </button>
                <p>
                  Транспортно-логистическая компания организует грузоперевозки
                  по всему миру
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/train.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="absolute slide-text h-15 text-white text-center">
              <div class="flex-col justify-end">
                <p>Доставим в самые кратчайшие сроки</p>
                <p>Железнодорожные перевозки</p>

                <button class="btn5">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right icon-m"></i>
                </button>
                <p>
                  Транспортно-логистическая компания организует грузоперевозки
                  по всему миру
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i class="fas fa-chevron-left text-black text-xs"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i class="fas fa-chevron-right text-black text-xs"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- <div
          id="carouselExampleIndicators1"
          class="carousel slide w-19"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              v-for="(indi, index) of allPhones" :key="indi.id"
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>
          <div class="carousel-inner h-full bg-white rounded-lg p-4">
            <h2 class="text-2xl font-black mb-4 text-center">Товар дня</h2>
            <div
              v-for="(product, index) of allPhones"
              :key="product.id"
              class="carousel-item act-set min-h-full "
              :class="{ active: index === 0 }"
            >
              <img class="my-2 mb-4" :src="product.images[0].first" alt="" />
              <h3 class="font-medium">{{ product.name }}</h3>
              <p class="text-2xl font-medium">{{ product.price }} тг.</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <i class="fas fa-chevron-left text-black text-xs"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <i class="fas fa-chevron-right text-black text-xs"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.icon-m {
  background: white;
  color: #fba311;
  padding: 14px 16.75px;
  border-radius: 100%;
  margin-left: 20px;
  font-size: 12px;
  transition: 0.4s all;
}
.btn5 {
  position: relative;
  text-decoration: none;
  display: inline-block;
  z-index: 1;
  transition: 0.4s all;
}
.btn5:hover {
  color: #fba311;
}
.btn5:hover .icon-m {
  background: #fba311;
  color: #fff;
  transform: rotate(360deg);
}
.btn5::before {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: -1;
  border-radius: 37px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 0px #fff;
  display: block;
  -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
}
/* if you want it to show from the right use -300px instead */
.btn5:hover::before {
  box-shadow: inset 300px 0px 0px #fff;
  border-radius: 37px;
}
</style>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {};
</script>
