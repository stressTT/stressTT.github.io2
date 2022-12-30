import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@fontsource/tenor-sans"
import "@fontsource/arsenal"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.less';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// var cc = myform.cardcode;
// // необходимые события добавить/изменить в массиве ниже
// // input - рекомендуется
// for (var i in ['input', 'change', 'blur', 'keyup']) {
//     cc.addEventListener('input', formatCardCode, false);
// }
// function formatCardCode() {
//     var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
//     cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
//     this.value = cardCode;
// }


