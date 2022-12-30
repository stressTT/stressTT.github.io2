<template>
  <div class="w-full relative z-0">
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

                <button class="btnPrice">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right iconPrice"></i>
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

                <button class="btnPrice">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right iconPrice"></i>
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

                <button class="btnPrice">
                  Расчет Стоимости
                  <i class="fa-solid fa-caret-right iconPrice"></i>
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
.carousel-indicators {
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  border-radius: 10px;
  padding: 2px;
}
.btnPrice {
  margin-bottom: 70px;
  margin-top: 25px;
}

.carousel-indicators button {
  width: 4px !important;
  height: 4px !important;
  border-radius: 100%;
  margin-left: 2px !important;
  margin-right: 2px !important;
  border-top: none !important;
  border-bottom: none !important;
}

.carousel-indicators button.active {
  width: 10px !important;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
}

.carousel-control-prev,
.carousel-control-next {
  height: fit-content;
  width: fit-content;
  color: #000;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  padding: 10.5px 14px;
  border-radius: 100%;
  opacity: 0;
  border: 1px solid rgb(114, 111, 111);
}

.carousel:hover .carousel-control-next,
.carousel:hover .carousel-control-prev {
  opacity: 1;
}

.carousel-control-prev {
  left: 1rem;
}

.carousel-control-next {
  right: 1rem;
}

.slide-text {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  z-index: 1;
  width: 80%;
  flex-direction: column;
  flex-grow: 1;

  p:nth-child(1) {
    font-size: 22px;
    opacity: 0.8;
  }
  p:nth-child(2) {
    font-size: 4.1vw;
    letter-spacing: 0.7px;
    line-height: normal;
  }
  // button {

  // }
  p:nth-child(4) {
    padding-bottom: 50px;
    font-size: 18px;
    opacity: 0.6;
    font-weight: 400;
  }
}
.carousel-inner {
  height: 780px;
  img {
    height: 780px;
    object-fit: cover;
  }
}
.carousel-item:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}
</style>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {};
</script>
