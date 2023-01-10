<template>
  <div class="company">
    <div class="binder">
      <div class="profile absolute w-1/2">
        <img src="../assets/img/profile1.jpeg" alt="" />
      </div>
      <div class="main">
        <div class="quote"><img src="../assets/img/quota.svg" alt="" /></div>
        <div class="nav">
          <i class="fa-solid fa-image mr-5"></i>
          <div>
            <p>BekLogistics</p>
            <span class="text-lg">Транспортно-логистическая компания</span>
          </div>
        </div>
        <div class="submain">
          <p>
            Наша компания - это команда опытных логистов, грамотных менеджеров,
            аккуратных складских работников с бережным отношением к грузу
            клиента. Мы составим выгодный маршрут, поможем выбрать вид
            транспорта, а также проконсультируем по оформлению сопроводительных
            документов.
          </p>
        </div>
        <div class="foot">
          <p>Сапакбай Бекнурзат</p>
          <span>Генеральный директор</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.company {
  background: rgba(var(--white));
  padding: 7%;
  position: relative;
  .binder {
    position: relative;
    height: 100%;
    padding-top: 200px;
  }
  .profile {
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .main {
    background: rgba(var(--white));
    width: 60%;
    padding: 9% 7% 9% 0;
    position: relative;

    .quote {
      width: 70px;
      height: 70px;
      background: rgba(var(--main-1));
      position: absolute;
      z-index: 1;
      top: 25%;
      right: 0;
      transform: translate(50%, -50%);
      display: flex;
      img {
        width: 30px;
        height: 20px;
        align-self: center;
        margin: auto;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      margin-bottom: 7%;
      i {
        font-size: 70px;
      }
      p {
        font-size: 40px;
        line-height: 45px;
      }
      span {
        font-size: 20px;
      }
    }
    .submain {
      p {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.3px;
      }
    }
    .foot {
      margin-top: 7%;
      text-align: end;
      p {
        font-size: 25px;
        line-height: normal;
        letter-spacing: 0.3px;
      }
      span {
        font-size: 18px;
        letter-spacing: 0.3px;
        opacity: 0.5;
        margin-top: 5px;
      }
    }
  }
}
</style>
