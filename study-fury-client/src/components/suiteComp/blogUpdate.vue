<template>
    <h1>
        this is blog update Page
    </h1>

</template>

<script>


    export default{
        name:"updatePage",
        props:{
            oldHeader:"def",
            oldDescription:"def",
            blogId:""
        },
        data(){
            return{
                newHeader:this.oldHeader,
                newDescription:this.oldDescription,
            }
        }
    }



</script>