<template>
  <HomeNavbar/>
  <Jumbotron/>
  <CTA/>
  <Cards/>
  <Footer/>
</template>

<script>
import HomeNavbar from './components/homeComp/HomeNavbar.vue'
import Jumbotron from './components/homeComp/Jumbotron.vue'
import CTA from './components/homeComp/CTA.vue'
import Cards from './components/homeComp/Cards.vue'
import Footer from './components/homeComp/Footer.vue'

export default {
  name: 'App',
  components: {
    HomeNavbar,
    Jumbotron,
    CTA,
    Cards,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
