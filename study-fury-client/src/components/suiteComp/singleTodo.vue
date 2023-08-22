<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <div class="buttons" style="display: flex; justify-content: flex-end;" v-if="true">
        <button class="btn" style="margin:0px;color: cyan; border-style: solid;border-width: 3px; border-color: cyan; border-radius: 10px;" 
        @click="finishTask" v-if="!updatePanelOpen">
            
        Complete Task</button>
        <button class="btn" style="margin:0px;color: cyan;" @click="activateUpdatePanel">
            <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-danger" @click="discardTask" v-if="!updatePanelOpen">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    <h1>{{ header }}</h1>
    <h2>Deadline: {{ deadline.substring(0,10) }}</h2>
    <div class="card-body lightbg" v-if="updatePanelOpen">
        <h3>Updated Task Name</h3>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
        placeholder="updated task name" v-model="this.header">
        <p></p>
        <h3>Updated Deadline</h3>
            <label for="startDate">Updated Deadline Day</label>
            <input id="startDate" class="form-control" type="date" v-model="this.deadline"/>
        <button 
            class="btn btn-success"
            :disabled="isTaskFormInvalid"
            @click.prevent="UpdateTask"
            style="padding: 10px;"
        >Save</button>
    </div>
</template>




<script>
    import axios from 'axios';

    export default{
        name:'singleTodoPage',
        props:{
            todoProp:{},
        },
        created(){
            this.getStarted();
        },
        data(){
            return{
                task:{},
                header:'def',
                deadline:'def',
                taskId:'def',
                updatePanelOpen:false,
            }
        },
        methods:{
            getStarted(){
                console.log("this.todoProp: " +this.todoProp);
                this.task=this.todoProp;
                this.header=this.todoProp.header;
                this.deadline=this.todoProp.deadline;
                this.taskId=this.todoProp._id;
            },
            async finishTask(){
                await axios.post('http://localhost:3500/api/task/completeTask',{taskId:this.taskId});
            },
            async discardTask(){
                await axios.post('http://localhost:3500/api/task/discardTask',{taskId:this.taskId});
            },
            activateUpdatePanel(){
                this.updatePanelOpen=!this.updatePanelOpen;
            },
            async UpdateTask(){
                this.dateObject = new Date(this.deadline);
                await axios.post('http://localhost:3500/api/task/updateTask',{taskId:this.taskId,header: this.header,deadline:this.dateObject});
                this.activateUpdatePanel();
                return;
            }
        },
        computed:{
            isTaskFormInvalid() {
                return !this.header || !this.deadline;
            },
        },
    }

</script>

<style scoped>
.lightbg{
    background-color:beige;
    border-style: solid;
    border-width: 3px;
    border-color: blue;
    color: black;
}
</style>