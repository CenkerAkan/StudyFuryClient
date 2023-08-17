<template>
    <HomeNavbar/>
    <div class="d-flex justify-content-center align-items-center" style="min-height: 700px;" >
        <div style="border-width: 4px;border-color: blue;border-style: groove;min-width: 400px;min-height: 400px;">
            <div>
                <h1 style="padding: 15px;">Login</h1>
            </div>

            <div class="input-group mb-3" style="padding: 15px;">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                placeholder="email" v-model="email">
            </div>

            <div class="input-group mb-3" style="padding: 15px;">
                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                placeholder="password" v-model="password">
            </div>
            <button 
                class="btn btn-primary"
                :disabled="isLoginFormInvalid"
                @click.prevent="submitLoginForm"
                style="padding: 10px;"
            >Login</button>
        </div>
    </div>
    
    <Footer/>
</template>

<script>
    import axios from 'axios';
    import HomeNavbar from './homeComp/HomeNavbar.vue';
    import Footer from './homeComp/Footer.vue';
    export default {
    name: 'loginContent',
    components:{
        HomeNavbar,
        Footer
    },
    data(){
        return{
            password:'',
            email:''
        }
    },
    computed:{
        isLoginFormInvalid() {
            return !this.password || !this.email;
        }
    },
    methods: {
        submitLoginForm() {
            if (!this.password || !this.email) {
                alert('Please fill the form.');
                return;
            }
            console.log(this.email);
            console.log(this.password);
            
            axios.post(`http://localhost:3500/api/auth/login`,
            {password:this.password,email:this.email}
            ).then((response)=>{
                localStorage.setItem('access_token', response.data.access_token);
                console.log(response);
            });
            
            this.password= '',
            this.email= '' 
            this.$router.push('/suite');
        }
    }
}
</script>