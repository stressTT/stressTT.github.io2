<template>
  <div class="Header flex justify-between items-center">
    <div class="HeadLeft flex items-center">
      <i class="fa-solid fa-image text-7xl mr-5"></i>
      <div>
        <h2 class="text-4xl">SapaSendGroup</h2>
        <h5>Транспортно-логистическая компания</h5>
      </div>
    </div>
    <div class="HeadRight flex items-center">
      <h5 class="font-semibold text-2xl tracking-wider numbers">
        +7 771 232 3307
      </h5>
      <div
        class="relative ddbutton ml-5"
        @click="myFilter()"
        v-bind:class="{ active: isActive }"
      >
        <button>
          <i class="fa-solid fa-sort-down text-sm"></i>
        </button>
        <div class="modal-header">
          <!-- <div class="ddHeader-1 block">
            <span>Астана, Ленинский проспект, дом</span> <br />
            <a href="">Показать на карте</a>
          </div> -->
          <div class="ddHeader-2 flex items-center">
            <span class="numbers">+7 771 232 3307</span>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div class="ddHeader-3">
            <span>test@example.com</span>
          </div>
          <div class="ddHeader-4">
            <span class="numbers">Работаем 24/7</span>
          </div>
          <div class="ddHeader-5">
            <img src="../assets/img/vk.svg" alt="" />
            <img src="../assets/img/insta.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Header {
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 25px 120px 25px 30px;

  button {
    padding: 13px 20.625px;
    border: 1px solid #121212;
    opacity: 0.4;
    border-radius: 3px;
    i {
      transition: 0.4s all;
      display: flex;
    }
    &:hover {
      opacity: 1;
    }
  }
}
.ddbutton {
  z-index: 2;
}
.modal-header {
  width: 460px;
  background: #fff;
  top: 100%;
  right: 0;
  z-index: 2;
  position: absolute;
  padding: 0 55px;
  margin-top: 10px;
  transition: 0.4s all;
  display: block;
  height: 0;
  overflow: hidden;
}
.ddbutton.active .modal-header {
  height: 300px;
  padding: 30px 55px 20px 55px;
}
.ddbutton.active button i {
  transform: rotate(180deg) translateY(-25%);
}

.fa-telegram {
  color: #229ed9;
  font-size: 40px;
  margin: 0 20px 0 10px;
}
.fa-whatsapp {
  color: #25d366;
  font-size: 40px;
}

span {
  font-size: 18px;
  color: #121212;
}
a {
  color: #121212;
}
.ddHeader-2 {
  margin: 20px 0;
  span {
    font-size: 24px;
    font-weight: 600;
  }
}
.ddHeader-4 {
  margin: 20px 0;
}
.ddHeader-5 {
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
  img:nth-child(1) {
    margin-left: 0;
  }
}
</style>
<script>
export default {
  name: "HeadersComp",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
      // some code to filter users
    },
  },
};
</script>
