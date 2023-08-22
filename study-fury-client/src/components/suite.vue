<template>
    <div>
        <suiteNavbar/>
        <div class="container-fluid my-5" style="background-color: beige;">
            <div class="row">
                <div class="col-md">
                    <h1 class="font-page-light" style="font-size: 48px;">Welcome to Your Suite, {{ user.username }}!</h1>
                    <h3 class="mt-4 mb-4">
                        Choose what to do, and take action! 
                    </h3>
                    <button type="button" class="btn btn-dark" style="margin-right:5px" @click="this.$router.push('/focus');">Start a Focus Session</button>
                    <button type="button" class="btn btn-dark " style="margin-right:5px" @click="this.$router.push('/todo');">Add a Task to your ToDo list</button>
                    <button type="button" class="btn btn-dark" @click="this.$router.push('/blog');">Check Blog Page</button>
                </div>
            </div>
        </div>
        <hr>
        <h2>Stats</h2>
        <hr>
        <div class="my-5" style="background-color: whitesmoke;">
            <h1 class="font-page-light">General User Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.username }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        FuryPoints: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.FuryPoints }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        CreateDate: &nbsp;&nbsp;&nbsp;&nbsp; {{ user.createDate }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        CreateDate: &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon!</h3>
                </div>
            </div>
        </div>
        <div class="my-5" style="background-color: whitesmoke;">
            <h1 class="font-page-light">Task Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tasks Finished Today: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coming Soon!</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tasks Finished Last 7 Days: &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon!</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Task Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.totalTasks }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Task Finished: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ user.completedTasks }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Task Complete Rate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; %Coming Soon!</h3>    
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        CreateDate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon!</h3>
                </div>
            </div>
        </div>

        <div class="my-5" style="background-color: whitesmoke;">
            <h1 class="font-page-light">Social Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Blog Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.blogCount }}</h3>
                    
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Comment Number: &nbsp;&nbsp;&nbsp;&nbsp; {{ user.commentCount }}</h3>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import suiteNavbar from './suiteComp/suiteNavbar.vue'
    import Footer from './homeComp/Footer.vue'

    import axios from 'axios';

    export default {
        name: 'suite',
        components:{
            suiteNavbar,
            Footer
        },
        data(){
            return{
                user:{}
            }
        },
        created(){
            this.getStarted();
        },
        methods:{
            async getStarted(){
                await this.getUser();
            },
            async getUser(){
                try {
                    const accessToken = localStorage.getItem('access_token');
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    await axios.get('http://localhost:3500/api/auth/user').then((response)=>{
                        this.user=response.data;
                    });
                } catch (error) {
                    
                }
            }
        }
    }
</script>