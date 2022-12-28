import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@fontsource/fira-sans-condensed/100.css";
import "@fontsource/fira-sans-condensed/200.css";
import "@fontsource/fira-sans-condensed/300.css";
import "@fontsource/fira-sans-condensed/400.css";
import "@fontsource/fira-sans-condensed/500.css";
import "@fontsource/fira-sans-condensed/600.css";
import "@fontsource/fira-sans-condensed/700.css";
import "@fontsource/fira-sans-condensed/800.css";
import "@fontsource/fira-sans-condensed/900.css";
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


