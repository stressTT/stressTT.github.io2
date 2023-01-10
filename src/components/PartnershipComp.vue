<template>
  <div class="partnership">
    <div class="topbar">
      <p>Наши партнеры</p>
      <span>Нас уже выбрали</span>
    </div>
    <div class="slider-hero">
      <div class="main">
        <div class="slider d-none slider-for">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </div>
        <div class="slider slider-nav">
          <div class="imgSpace">
            <div class="imageFit">
              <img src="../assets/img/logo.svg" alt="" />
            </div>
          </div>
          <div class="imgSpace">
            <div class="imageFit">
              <img src="../assets/img/logo_tassay.svg" alt="" />
            </div>
          </div>
          <div class="imgSpace">
            <div class="imageFit">
              <img src="../assets/img/kargo63.png" alt="" />
            </div>
          </div>
          <div class="imgSpace">
            <div class="imageFit">
              <img src="../assets/img/logo-pc.png" alt="" />
            </div>
          </div>
          <div class="imgSpace">
            <div class="imageFit">
              <img src="../assets/img/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.partnership {
  padding-top: 7%;
  width: 100%;
  background: rgba(var(--pseudo-white));
  background-image: linear-gradient(
    to top,
    rgba(54, 32, 77, 0.03) 0%,
    rgba(54, 32, 77, 0.03) 33%,
    rgba(var(--pseudo-white), 1) 66%,
    rgba(var(--pseudo-white), 1) 100%
  );
  .topbar {
    padding: 0 7% 3.8%;
    width: 100%;
    text-align: center;
    p {
      font-size: 3.5vw;
      line-height: normal;
    }
    span {
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 0.3px;
      opacity: 0.7;
    }
  }
  .slider-hero {
    padding: 0 7% 7%;
    .main {
      font-family: Arial;
      width: 100%;
      display: block;
    }
    .slider-nav {
      .imgSpace {
        padding: 0.76%;
        background: #fff;
        border-right: 1px solid rgba(var(--black), 0.05);
        .imageFit {
          color: rgba(var(--black));
          width: 100%;
          height: 150px;

          position: relative;
          text-align: center;
          display: flex;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 5%;
          }
        }
      }
    }
  }
}
</style>

<script>
import $ from "jquery";

export default {
  setup() {
    $(document).ready(function () {
      console.log("scipt");
      $("p").click(function () {
        console.log("You clicked a paragraph!");
      });
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        focusOnSelect: true,
      });

      $("a[data-slide]").click(function (e) {
        e.preventDefault();
        var slideno = $(this).data("slide");
        $(".slider-nav").slick("slickGoTo", slideno - 1);
      });
      console.log("worked");
    });
  },
};
</script>
