<template>
    <div class="card">
        <div class="card-body">
            <h3>{{blog.header}}</h3>
            <h5>{{blog.date.substring(0,10)}}</h5>
            <h5>{{author}}</h5>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: 'blogList',
        props:{
            blog:{}
        },
        computed:{
        },
        created(){
            try {
                this.getAuthorName();
            } catch (error) {
                console.error(error);
            }
        },
        data(){
            return{
                author:"default",
            }
        },
        methods:{
            async getAuthorName(){
                console.log(this.blog.userId);
                await axios.post('http://localhost:3500/api/auth/getUserById',{userId:this.blog.userId}).then((response)=>{
                    this.author=response.data.username;
                });
                return;
            }
        }
    }
</script>

<style scoped>
.card{
    background: beige;
    cursor:pointer;

}
</style>