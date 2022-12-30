<template>
  <div class="contact-us">
    <form @submit.prevent="" novalidate action="">
      <span>Напишите нам</span> <br />
      <span
        >Заполните форму, наш менеджер свяжется с Вами в ближайшее время.</span
      >
      <input
        type="text"
        class="contactus numbers mt-6"
        placeholder="Ваше имя"
      />
      <input type="number" class="contactus numbers" placeholder="Телефон" />
      <input type="e-mail" class="contactus numbers" placeholder="E-mail" />
      <textarea
        class="numbers"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Коментарий"
      ></textarea>
      <div class="flex items-center mb-4">
        <input class="checkbox" type="checkbox" />
        <span>Ознакомлен(на) с пользовательским соглашением</span>
      </div>
      <button class="btnPrice">
        Отправить
        <i class="fa-solid fa-caret-right iconPrice"></i>
      </button>
    </form>
  </div>
</template>
<style lang="less" scoped>
.contact-us {
  width: 70%;
  padding: 5%;
  background: #fff;
  span {
    font-size: 18px;
  }

  span:first-child {
    font-size: 30px;
    margin-bottom: 7px;
  }
  input {
    width: 100%;
    border: 1px solid rgba(18, 18, 18, 0.1);
    padding: 8px 20px;
    margin-bottom: 15px;
    outline-style: none;
    font-size: 17px;
    min-height: 60px;
  }

  .checkbox {
    width: fit-content;
    margin: 0 10px 0 0;
    height: fit-content;
  }
  textarea {
    width: 100%;
    outline-style: none;
    border: 1px solid rgba(18, 18, 18, 0.1);
    padding: 8px 20px;
    height: 150px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
