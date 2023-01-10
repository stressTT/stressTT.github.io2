<template>
  <div>
    <a name="head" href=""></a>
    <Header />

    <Sliders />

    <Achive />
    <Services />
    <Company />
    <Partnership />
    <BG />
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderComp.vue";
import Navbar from "./components/NavbarComp.vue";
import BG from "./components/HeroBGComp.vue";
import Sliders from "./components/SlidersComp.vue";
import Footer from "./components/FooterComp.vue";
import Achive from "./components/AchiveComp.vue";
import Services from "./components/ServicesComp.vue";
import Company from "./components/CompanyComp.vue";
import Partnership from "./components/PartnershipComp.vue";

export default {
  components: {
    Header,
    Navbar,
    BG,
    Sliders,
    Footer,
    Achive,
    Services,
    Company,
    Partnership,
  },
};
</script>
