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
                <p>
                  Доставим в самые кратчайшие сроки Доставим в самые кратчайшие
                  сроки Доставим в самые кратчайшие сроки
                </p>
                <p>Автомобильные перевозки</p>
                <button>
                  Расчет Стоимости <i class="fa-solid fa-caret-right"></i>
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
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/train.jpg"
              class="d-block w-100"
              alt="..."
            />
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

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {};
</script>
