<template>
    <HomeNavbar/>
    <Jumbotron/>
    <CTA/>
    <Cards/>
    <Footer/>
</template>


<script>
import HomeNavbar from './homeComp/HomeNavbar.vue'
import Jumbotron from './homeComp/Jumbotron.vue'
import CTA from './homeComp/CTA.vue'
import Cards from './homeComp/Cards.vue'
import Footer from './homeComp/Footer.vue'

export default {
  name: 'homeContent',
  components: {
    HomeNavbar,
    Jumbotron,
    CTA,
    Cards,
    Footer
  }
}
</script>