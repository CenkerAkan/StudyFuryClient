<template>
    <HomeNavbar/>
    <div class="d-flex justify-content-center align-items-center" style="min-height: 800px;" >
        <div style="border-width: 4px;border-color: blue;border-style: groove;min-width: 400px;min-height: 600px;">
            <div>
                <h1 style="padding: 15px;"> Signup</h1>
            </div>
            
            <div class="input-group mb-3" style="padding: 15px;">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="username" v-model="username">
            </div>

            <div class="input-group mb-3" style="padding: 15px;">
                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="password" v-model="password">
            </div>

            <div class="input-group mb-3" style="padding: 15px;">
                
                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                placeholder="confirm password" v-model="confirmPassword">
            </div>

            <div class="input-group mb-3" style="padding: 15px;">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="email" v-model="email">
            </div>
            <button 
                class="btn btn-primary"
                :disabled="isFormInvalid"
                @click.prevent="submitForm"
                style="padding: 10px;"
            >Create Account</button>
        </div>
    </div>
    
    <Footer/>   
</template>

<script>
    import axios from 'axios';
    import HomeNavbar from './homeComp/HomeNavbar.vue';
    import Footer from './homeComp/Footer.vue'
    export default {
        name: 'signupContent',
        components:{
            HomeNavbar,
            Footer
        },
        data(){
            return{
                firstName:'',
                lastName:'',
                username:'',
                password:'',
                confirmPassword:'',
                email:''
            }
        },
        computed:{
            isFormInvalid() {
                return !this.username || !this.password || !this.confirmPassword || !this.email;
            }
        },
        methods: {
            submitForm() {
                if (!this.username || !this.password || !this.confirmPassword || !this.email) {
                    alert('Please fill the form.');
                    return;
                }
                console.log(this.firstName);
                console.log(this.lastName);
                console.log(this.username);
                console.log(this.password);
                console.log(this.confirmPassword);
                console.log(this.email);
                
                axios.post(`http://localhost:3500/api/auth/register`,
                {first_name:this.firstName, last_name:this.lastName, username:this.username, password:this.password,password_confirm:this.confirmPassword,email:this.email}
                ).then((response)=>{
                    console.log(response);
                });
                

                this.username= '',
                this.password= '',
                this.confirmPassword= '',
                this.email= '' 
            }
        }
    }
</script>