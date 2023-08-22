<template>
    <SuiteNavbar/>
    <h1>
        ToDo Page!
    </h1>
    <div>
        <div class="whole-content"  style="display: flex; justify-content: center; align-items: center;">
            <ul style="list-style-type: none">
                <CreateTask/>
                <hr>
                <h5>To Do List</h5>
                <hr>
                <li class="list" v-for="todo in reversedTodos" :key="!todo.id" style="border: 2px; border-color: orangered; border-style: solid;background-color: #252525; color: cyan;">
                    <SingleTodo :todoProp="todo" />
                </li>
                <!--

                -->
            </ul>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import SuiteNavbar from './suiteComp/suiteNavbar.vue';
    import Footer from './homeComp/Footer.vue';
    import CreateTask from './suiteComp/createTask.vue'
    import SingleTodo from './suiteComp/singleTodo.vue'

    import axios from 'axios';

    export default {
        name: 'ToDoPage',
        components:{
            SuiteNavbar,
            Footer,
            CreateTask,
            SingleTodo
        },
        created(){
            this.fetchTodoContent();
            this.showListComp();
        },
        data(){
            return{
                todos:[],
                userId:'',
                todo:{},
                showOnlyMine:false,
            }
        },
        computed: {
            reversedTodos() {
                return this.todos.slice().reverse();
            }
        },
        methods:{
            async fetchTodoContent(){
                try {
                    const accessToken = localStorage.getItem('access_token');
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    const response = await axios.get('http://localhost:3500/api/task/getCurrentTasks');
                    console.log("response.data: "+response.data)
                    this.todos = response.data;
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
            },
            logId(){
                console.log(this.blog.header);
            },
            async fetchUserBlogContent(){
                try {
                    const accessToken = localStorage.getItem('access_token');
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    const response = await axios.get('http://localhost:3500/api/task/getCurrentTasks');
                    this.blogs = response.data;
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
            },
            async showListComp(){
                const response = await axios.get('http://localhost:3500/api/auth/user');
                this.userId=response.data._id;
                
                return;//(response.data.isAdmin||(blog.userId===response.data._id));
            },
        }
    }
</script>

<style scoped>
.list{
    min-width: 700px;
    margin: 10px;
}
</style>