<template>
    
    
    <SuiteNavbar/>
    <h1>
        Focus Page!
    </h1>
    <Countdown 
        :year="this.year"
        :month="this.month"
        :date="this.day"
        :hour="this.hour"
        :minute="this.minute"
        :second="this.second"
        :millisecond="this.millisecond"
        :notstopped="this.notStopped"
        :duration="this.minSet"
    />
    <div style="text-align: center; background-color: beige;border-style: solid;border-width: 2px;
                border-color: #252525;" >

        <div>
            <button type="button" class="btn btn-dark" style="margin:5px" @click="startTimer">Start</button>
            <button type="button" class="btn btn-dark" style="margin:5px" @click="stopTimer">Stop</button>
        </div>
        <div v-if="!this.notStopped">
            <h3>Set time in minutes</h3>
            <div style="display: flex; justify-content: center; align-items: center;" >
                <button style="min-width: 30px;" @click="()=>{this.minSet-=5;
                    if(this.minSet<25){
                        this.minSet=25;
                    }
                }">-</button>
                <input type="number" style="width: 100px; text-align: center;" v-model="minSet" placeholder="minutes" >
                <button style="min-width: 30px;" @click="()=>{this.minSet+=5;}">+</button>
            </div>
        </div>
    </div>
    
    <Footer/>
</template>

<script>

import SuiteNavbar from './suiteComp/suiteNavbar.vue';
import Footer from './homeComp/Footer.vue';
import Countdown from './suiteComp/countdown.vue';


import axios from 'axios';
    export default {
        name: 'focus',
        components:{
            SuiteNavbar,
            Footer,
            Countdown,
        },
        data(){
            return{
                minSet:55,
                currentDate:null,
                day:'0',
                month:'0',
                year:'0',
                hour:'0',
                minute:'0',
                second:'0',
                millisecond:'0',
                notStopped:false,
                progressData:67.5,
            }
        },
        created(){
            
        },
        watch: {
            minSet(newVal) {
                if (newVal < 0) {
                    this.minSet = 25;
                } else if (newVal > 180) {
                    this.minSet = 180;
                }
            },
        },
        methods:{
            startTimer(){
                const newDate = new Date();
                newDate.setTime(newDate.getTime() + this.minSet * 60 * 1000)
                console.log("clock started");
                this.currentDate = newDate;
                this.year=newDate.getFullYear();
                this.month=newDate.getMonth();
                this.day=newDate.getDate();
                this.hour=newDate.getHours();
                this.minute=newDate.getMinutes();
                this.second=newDate.getSeconds();
                this.millisecond=newDate.getMilliseconds();
                this.notStopped=true;

                this.craeteSession(this.minSet);

            },
            stopTimer(){
                const newDate = new Date();
                console.log("clock stopped");
                this.currentDate = newDate;
                this.year=newDate.getFullYear();
                this.month=newDate.getMonth();
                this.day=newDate.getDate();
                this.hour=newDate.getHours();
                this.minute=newDate.getMinutes();
                this.second=newDate.getSeconds();
                this.millisecond=newDate.getMilliseconds();
                this.notStopped=false;

                this.sessionFail();
            },
            async craeteSession(mins){
                console.log(mins);
                await axios.post('http://localhost:3500/api/session/startSession',{duration:mins}).then((response)=>{
                    console.log("created");
                });
            },
            async sessionFail(){
                await axios.get('http://localhost:3500/api/session/endSessionFail').then((response)=>{
                    console.log("failed");
                });
            }
        }
    }



</script>
