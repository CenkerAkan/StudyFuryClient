<template>
    <HomeNavbar/>
    <h1>
        This is Login Page
    </h1>    
    <p>
        Paragraph about how significant login is
    </p>
    <p>
        Lorem ipsum
    </p>
    <Footer/>
</template>

<script>
    import HomeNavbar from './homeComp/HomeNavbar.vue';
    import Footer from './homeComp/Footer.vue';
    export default {
    name: 'loginContent',
    components:{
        HomeNavbar,
        Footer
    },
}
</script>