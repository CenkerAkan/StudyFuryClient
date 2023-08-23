<template>
    <div class="mychart">
      <h2>{{ this.title }}</h2>
      <GChart
        type="PieChart"
        :options="options"
        :data="data"
      />    
    </div>
  </template>
   
  <script>
  import { GChart } from "vue-google-charts";
  export default {
    name: "PieChart",
    components: {
      GChart
    },
    props:{
        uncompletedSessions:Number,
        completedFocusSessions:Number, 
    },
    created(){
      this.getStarted();
    },
    data() {
      return {
        data: [],
        title:"",
        options: {
          width: 700,
          height: 400
        }
      };
    },
    beforeUpdate() {
      this.getStarted();
    },
    methods:{
      getStarted(){
        this.data=[
                ['Sessions created','Number of completed or uncompleted focus sessions'],
                ['Incompleted Sessions',this.uncompletedSessions],
                ['Completed sessions',this.completedFocusSessions],
                ]
      }
    }
  };
  </script>

<style scoped>
.mychart{
  background-color: whitesmoke;
}

</style>