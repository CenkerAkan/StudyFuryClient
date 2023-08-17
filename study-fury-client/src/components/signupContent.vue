<template>
    <HomeNavbar/>
    <h1>
        This is Signup Page
    </h1>    
    <p>
        Paragraph about how significant signup is
    </p>
    <p>
        Lorem ipsum dolor sit amet
    </p>
    <Footer/>   
</template>

<script>
    import HomeNavbar from './homeComp/HomeNavbar.vue';
    import Footer from './homeComp/Footer.vue'
    export default {
        name: 'signupContent',
        components:{
            HomeNavbar,
            Footer
        },
    }
</script>