<template>
    <SuiteNavbar/>
    <h1>
        Focus Page!
    </h1>
    <Footer/>
</template>

<script>
    import SuiteNavbar from './suiteComp/suiteNavbar.vue';
    import Footer from './homeComp/Footer.vue';
    export default {
        name: 'focus',
        components:{
            SuiteNavbar,
            Footer
        }
    }
</script>