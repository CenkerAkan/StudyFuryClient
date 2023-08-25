<template>
    <div class="container py-5">
        <div class="row">
            <div class="progress mx-auto" :data-value="`${this.progress}`">
                  <span class="progress-left">
                                <span class="progress-bar border-danger"></span>
                  </span>
                  <span class="progress-right">
                                <span class="progress-bar border-danger"></span>
                  </span>
                  <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div class="h2 font-weight-bold">{{this.progress}}<sup class="small">%</sup></div>
                  </div>
             </div>
        </div>
    </div>

    <div>
      <b-progress :value="progress" :max="max" show-progress animated></b-progress>
      <b-progress class="mt-2" :max="max" show-value>
        <b-progress-bar :value="progress * (6 / 10)" variant="success"></b-progress-bar>
        <b-progress-bar :value="progress * (2.5 / 10)" variant="warning"></b-progress-bar>
        <b-progress-bar :value="progress * (1.5 / 10)" variant="danger"></b-progress-bar>
      </b-progress>
      <b-button class="mt-3" @click="randomValue">Click me</b-button>
    </div>
    <div>Deneme</div>
</template>

<script>
    import $ from "jquery";
    export default{
      name:'countdownProgress',
      props:{
          percentage:0,
      },
      data(){
          return{
              progress:25,
              max:100,
          }
      },
      watch:{
          percentage(newPercentage){
            this.progress=newPercentage;
            console.log(this.progress);
            this.freq=false;
            this.freq=true;
          }
      },
      methods:{
        randomValue() {
          this.progress=this.progress+10; 
        }
      }
    }

    $(function() {
        console.log("progress: "+this.progress);
    $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
        if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
    }

    })

    function percentageToDegrees(percentage) {
        return percentage / 100 * 360
    }

    });
</script>


<style scoped>
.progress {
  width: 150px;
  height: 150px;
  background: none;
  position: relative;
}

.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
}

.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 6px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.progress .progress-value {
  position: absolute;
  top: 0;
  left: 0;
}


</style>