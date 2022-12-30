<template>
  <div class="Footer">
    <div class="main">
      <p>Свяжитесь с нами</p>
      <br />
      <div class="span-w">
        <span
          >Позвоните, напишите на электронную почту или приезжайте в офис - мы
          всегда готовы к общению с вами</span
        >
      </div>
    </div>
    <div class="sub-main flex">
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
      <Contactus />
    </div>
    <div class="License">
      <div class="left-License flex items-center">
        <a href="#head"><i class="fa-solid fa-arrow-up bg-mainCol"></i></a>
        <span>Copyright © 2020 - 2022 Транспортно-логистическая компания</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Footer {
  padding-top: 7%;
  .main {
    padding: 0 7% 4% 7%;
    color: #fffffe;
    p {
      font-size: 3.5vw;
      line-height: normal;
    }
    .span-w {
      font-size: 20px;
      opacity: 0.6;
      max-width: 640px;
      line-height: 27px;
      letter-spacing: 0.3px;
    }
  }
  .sub-main {
    padding-left: 7%;
    padding-bottom: 100px;
    p,
    span,
    a {
      color: #fffffe;
    }
    .modal-header {
      width: 30%;
      padding-top: 5%;
      display: block;
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
  }
  .License {
    padding: 35px 7%;
    background: #fff;
    width: 100%;
    .left-License {
      width: 31%;
    }
    i {
      padding: 16px 19.5px;
      color: #fff;
      font-size: 28px;
      border-radius: 3px;
      cursor: pointer;
    }
    span {
      font-size: 17px;
      margin-left: 30px;
    }
  }
}
</style>

<script>
import Contactus from "./ContactusComp.vue";

export default {
  components: { Contactus },
};
</script>
