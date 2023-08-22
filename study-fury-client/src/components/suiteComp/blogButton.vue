<template>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Share Your Journey!</h3>
        <h5>Do you want to share your life story, experiences or study techniques? </h5>
        <p class="card-text">Click the button to create a Blog Post.</p>
        <a class="btn btn-warning" @click.prevent="goToCreateBlog">Create Blog</a>
      </div>
    </div>
</template>

<script>
    export default{
        name: 'blogButton',
        methods:{
            goToCreateBlog(){
                this.$router.push('/createBlog');
                return;
            }
        }
    }
</script>

<style scoped>
.card{
    background-color: aqua;
}
</style>