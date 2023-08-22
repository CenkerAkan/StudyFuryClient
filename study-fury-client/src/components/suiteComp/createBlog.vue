<template>
    <SuiteNavbar/>
    <h1>
        This is blog create
    </h1>
    <div style="display: flex; justify-content: center; align-items: center;background-color: beige;min-height: 500px;">
        <ul style="border-style: groove;border-width: 3px;border-color: red;margin-top: 15px;">
            <label for="basic-url" class="form-label" style="margin-top: 30px;">Your Blog Header</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Header of Your Blog" aria-label="Username" 
                aria-describedby="basic-addon1" v-model="header">
            </div>
    
            <label for="basic-url" class="form-label">Your Blog Content</label>
            <div class="input-group wide-text">
                <textarea class="form-control" aria-label="With textarea" placeholder="Blog Content" v-model="content"></textarea>
            </div>
            <button 
                class="btn btn-success"
                @click.prevent="createBlog"
                :disabled="iscreateBlogFormInvalid"
                style="padding: 10px; margin-bottom: 30px;"
            >Create</button>
        </ul>
    </div>
    <Footer/>
</template>

<script>
import SuiteNavbar from './suiteNavbar.vue';
import Footer from '../homeComp/Footer.vue';

import axios from 'axios';

export default{
    name: 'createBlog',
    components:{
        SuiteNavbar,
        Footer
    },
    computed:{
        iscreateBlogFormInvalid() {
            return !this.header || !this.content;
        }
    },
    data(){
        return{
            header:'',
            content:''
        }
    },
    methods: {
        createBlog() {
            if (!this.header || !this.content) {
                alert('Please fill the form.');
                return;
            }
            
            axios.post(`http://localhost:3500/api/blog/createBlog`,
            {header:this.header,description:this.content}
            ).then((response)=>{
                console.log(response);
            });
            
            this.password= '',
            this.email= '' 
            this.$router.push('/blog');
        }
    }
}

</script>

<style scoped>
.input-group{
    min-width: 500px;
    padding-right: 30px;
}
.wide-text{
    min-height: 300px;
    margin-bottom: 30px;
}
</style>