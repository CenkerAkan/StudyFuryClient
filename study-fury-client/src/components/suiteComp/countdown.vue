<template>
    <div>
        <div style="text-align: center; background-color: beige;border-style: solid;border-width: 2px;
                border-color: #252525;" >
            <h1>
                <div style="background: whitesmoke;border-style: solid;border-width: 2px;
                border-color: #252525;display: inline-block;margin: 10px;padding: 10px;">
                    {{ displayHours }}
                </div>
                :
                <div style="background: whitesmoke;border-style: solid;border-width: 2px;
                border-color: #252525;display: inline-block;margin: 10px;padding: 10px;">
                    {{ displayMinutes }}
                </div>
                :
                <div style="background: whitesmoke;border-style: solid;border-width: 2px;
                border-color: #252525;display: inline-block;margin: 10px;padding: 10px;">
                    {{ displaySeconds }}
                </div>
                
            </h1>
        </div>

        <p v-if="this.finished">
            Session Complete
        </p>
    </div>
    <CountdownProgress :percentage="this.percentage" v-if="myBool"/>
</template>

<script>
import axios from 'axios';
import CountdownProgress from './countdownProgress.vue';
export default{
    name:'countdown',
    props:['year','month','date','hour','minute','second','millisecond',"notstopped","duration"],
    components:{
        CountdownProgress
    },
    data:()=>({
        displayHours:'00',
        displayMinutes:'00',
        displaySeconds:'00',
        finished:false,
        timerPermission:false,
        completeSessionSuccessfully:false,
        percentage:0,
        durationData:0,
        myBool:true,
    }),
    computed:{
        _seconds:()=>1000,
        _minutes(){
            return this._seconds*60;
        },
        _hours(){
            return this._minutes*60;
        },
        end(){
            return new Date(this.year,this.month,this.date,this.hour,this.minute,this.second,this.millisecond);
        }
    },
    mounted(){
        this.showRemaining();
    },
    watch:{
        year(newYear) {
            this.resetTimer();
        },
        month(newMonth) {
            this.resetTimer();
        },
        date(newDate) {
            this.resetTimer();
        },
        hour(newHour) {
            this.resetTimer();
        },
        minute(newMinute) {
            this.resetTimer();
        },
        second(newSecond) {
            
            this.resetTimer();
        },
        millisecond(newMillisecond) {
            this.resetTimer();
        },
        notstopped(newNotstopped){
            console.log(newNotstopped)
            this.completeSessionSuccessfully=newNotstopped;
        },
        duration(newDuration){
            this.durationData=newDuration;
            this.resetTimer();
        },
        displaySeconds(newDisplaySeconds){
            const passedTime=((parseInt(this.displayHours))*3600+60*(parseInt(this.displayMinutes))+(parseInt(this.displaySeconds)));
            console.log("1 - "+typeof(parseInt(this.displayHours))+"-"+parseInt(this.displayHours))
            console.log("2 - "+typeof(parseInt(this.displayMinutes))+"-"+parseInt(this.displayMinutes))
            console.log("3 - "+typeof(this.displaySeconds)+"-"+this.displaySeconds)
            console.log("4 - "+typeof(passedTime)+"-"+passedTime);

            const totalTime=this.duration*60;
            this.percentage=Math.floor(100-(100*(passedTime/totalTime)));
            console.log("4 - "+typeof(this.percentage)+"-"+this.percentage);
            this.$forceUpdate();
        }
    },
    methods:{
        resetTimer() {
            clearInterval(this.timer);
            this.finished = false;
            this.showRemaining();
        },
        showRemaining(){
            const timer=setInterval( async ()=>{
                const now=new Date();
                const distance=this.end.getTime()-now.getTime();
                console.log("distance: " +distance);
                if(distance<0){
                    clearInterval(timer);
                    if(this.completeSessionSuccessfully){
                        this.finished=true;
                        console.log("finished");
                        this.sessionSuccess();
                        this.completeSessionSuccessfully=false;
                    }
                    return;
                }

                const hours=Math.floor((distance/this._hours));
                const minutes=Math.floor((distance%this._hours)/this._minutes);
                const seconds=Math.floor((distance%this._minutes)/this._seconds);
                
                this.displaySeconds=seconds<10?"0"+seconds:seconds;
                this.displayMinutes=minutes<10?"0"+minutes:minutes;
                this.displayHours=hours<10?"0"+hours:hours;
            },1000);
        },
        async sessionSuccess(){
            await axios.get('http://localhost:3500/api/session/endSessionSuccess').then((response)=>{
                    console.log("success");
            });
        }
    }
}
/**
 * const passedTime=this.displayHours*3600+this.displayMinutes+60+this.displaySeconds;
            const totalTime=this.duration*60;
            this.percentage=100*(passedTime/totalTime);
 * 
 */

</script>
