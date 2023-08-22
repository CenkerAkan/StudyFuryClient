<template>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Set a Goal, Create a Task!</h3>
        <h5>Keep track of your work, keep track of your life. </h5>
        <p class="card-text">Click the button to create a Task.</p>
        <a class="btn btn-warning" @click.prevent="openCreateMenu">{{ buttonText }}</a>
        
        <div class="card-body lightbg" v-if="createMenuVisible">
            <h3>Your Task</h3>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
            placeholder="task name" v-model="createTaskHeader">
            <p></p>
            <h3>Deadline</h3>
                <label for="startDate">Deadline Day</label>
                <input id="startDate" class="form-control" type="date" v-model="createDeadline"/>
            <button 
                class="btn btn-primary"
                :disabled="isTaskFormInvalid"
                @click.prevent="createTask"
                style="padding: 10px;"
            >Create</button>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'createTask',
        data(){
            return{
                createMenuVisible:false,
                createDeadline: '',
                createTaskHeader:'',
                buttonText:'Create Task',
                dateObject:new Date(),
            }
        },
        methods:{
            openCreateMenu(){
                if(!this.createMenuVisible){
                    this.buttonText=" Close ";
                }else{
                    this.buttonText='Create Task';
                }
                this.createMenuVisible=!this.createMenuVisible;
                
                return;
            },
            async createTask(){
                console.log("taskheader: " + this.createTaskHeader);
                console.log("deadline: " + this.createDeadline);
                this.dateObject = new Date(this.createDeadline);
                console.log(this.dateObject);
                console.log(this.createTaskHeader);
                await axios.post('http://localhost:3500/api/task/createTask',{header: this.createTaskHeader,deadline:this.dateObject});

                return;
            }
        },
        computed:{
            isTaskFormInvalid() {
                return !this.createTaskHeader || !this.createDeadline;
            },
        },
    }

   
</script>

<style scoped>
.card{
    background-color: #252525;
    border-style: solid;
    border-width: 3px;
    border-color: orangered;
    color: cyan;
}

.lightbg{
    background-color:beige;
    border-style: solid;
    border-width: 3px;
    border-color: blue;
    color: black;
}
</style>