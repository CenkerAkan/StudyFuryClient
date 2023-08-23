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
            <hr>
            <h1 class="font-page-light">General User Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.username }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        FuryPoints: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.FuryPoints }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        CreateDate: &nbsp;&nbsp;&nbsp;&nbsp; {{ this.createDate }}</h3>
                </div>
            </div>
        </div>
        <div class="my-5" style="background-color: whitesmoke;">
            <hr>
            <h1 class="font-page-light">Focus Session Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Focus Sessions Finished Today: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        {{this.yesterdayFocusCount}} & {{this.yesterdayFocusDuration}} minutes</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Focus Sessions Finished Last 7 Days: &nbsp;&nbsp;&nbsp;&nbsp;
                        {{this.weeklyFocusCount}} & {{this.weeklyFocusDuration}} minutes</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Focus Session Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.totalFocusSessions }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Focus Session Finished: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {{ user.completedFocusSessions }} & {{ user.totalMinsWorked }} minutes</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Focus Session Complete Rate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; %{{this.focusRate}}</h3>    
                        <PieChart :uncompletedSessions="this.user.totalFocusSessions-this.user.completedFocusSessions"
                        :completedFocusSessions="this.user.completedFocusSessions"
                        />
                </div>
                <div style="background-color: whitesmoke;">
                </div>
                        
            </div>
        </div>
        <div class="my-5" style="background-color: whitesmoke;">
            <hr>
            <h1 class="font-page-light">Task Stats</h1>
            <div class="row">
                <div class="col-md" style="text-align: start;">
                    <hr>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tasks Finished Today: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{this.yesterdayTaskCount}}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tasks Finished Last 7 Days: &nbsp;&nbsp;&nbsp;&nbsp; {{this.weeklyTaskCount}}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Task Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ user.totalTasks }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Total Task Finished: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ user.completedTasks }}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Task Complete Rate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; %{{ this.taskRate }}</h3>    
                </div>
            </div>
        </div>

        <div class="my-5" style="background-color: whitesmoke;">
            <hr>
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

    import PieChart from './suiteComp/charts/pieChart.vue'


    export default {
        name: 'suite',
        components:{
            suiteNavbar,
            Footer,
            PieChart
        },
        data(){
            return{
                user:{},
                createDate:'',
                focusRate:'',
                taskRate:'',
                yesterdayFocusCount:-1,
                yesterdayFocusDuration:-1,
                weeklyFocusCount:-1,
                weeklyFocusDuration:-1,
                yesterdayTaskCount:-1,
                weeklyTaskCount:-1,
                sessionChartData:[],
            }
        },
        created(){
            this.getStarted();
        },
        methods:{
            async getStarted(){
                await this.getUser();
                await this.setData();
            },
            async getUser(){
                try {
                    const accessToken = localStorage.getItem('access_token');
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    await axios.get('http://localhost:3500/api/auth/user').then((response)=>{
                        this.user=response.data;
                    });
                } catch (error) {
                    console.error(error);
                }
            },
            async setData(){
                const rawData=this.user.createDate;
                this.createDate=(rawData.substring(8,10)+"/"+rawData.substring(5,7)+"/"+rawData.substring(0,4));
                if(this.user.totalFocusSessions>0){
                    this.focusRate=(Math.round(10000*(this.user.completedFocusSessions /this.user.totalFocusSessions))/100);
                }else{
                    this.focusRate='No Data'
                }
                if(this.user.totalTasks>0){
                    this.taskRate=(Math.round(10000*(this.user.completedTasks /this.user.totalTasks))/100);
                }else{
                    this.taskRate='No Data'
                }

                const yesterdayResponse=await axios.post('http://localhost:3500/api/auth/getSpesificFocusData',{day:1});
                this.yesterdayFocusCount=yesterdayResponse.data.sessionCount;
                this.yesterdayFocusDuration=yesterdayResponse.data.totalDuration;
                this.yesterdayTaskCount=yesterdayResponse.data.taskCount;

                const weekResponse=await axios.post('http://localhost:3500/api/auth/getSpesificFocusData',{day:7});
                this.weeklyFocusCount=weekResponse.data.sessionCount;
                this.weeklyFocusDuration=weekResponse.data.totalDuration;
                this.weeklyTaskCount=weekResponse.data.taskCount;
            },
        },
        computed:{
        }
    }
</script>