<template>
  
    <div class="container py-5">
        <div class="row">
            
                  
                  <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div class="h2 font-weight-bold">{{this.progress}}<sup class="small">%</sup></div>
                  </div>
             
        </div>
    </div>
    
      <div class="progress" style="margin: 20px;">
        <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
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
            progress:0,
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

