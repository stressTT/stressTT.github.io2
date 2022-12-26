<template>
  <div>
    <Header />

    <Sliders />

    <BG />
    <Navbar />
  </div>
</template>

<script>
import Header from "./components/HeaderComp.vue";
import Navbar from "./components/NavbarComp.vue";
import BG from "./components/HeroBGComp.vue";
import Sliders from "./components/SlidersComp.vue";

export default {
  components: { Header, Navbar, BG, Sliders },
};
</script>
