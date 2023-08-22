<template>
    <SuiteNavbar/>
    <h1>
        Blog Page!
    </h1>
    <div>
        <div class="whole-content"  style="display: flex; justify-content: center; align-items: center;">
            <ul style="list-style-type: none">
                <BlogButton/>
                <hr>
                <h5>Search Bar?</h5>
                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" v-model="showOnlyMine">
                <label class="btn btn-outline-primary" for="btncheck3">Show my Blogs Only</label>
                <hr>
                <li class="list" v-for="blog in reversedBlogs" :key="!blog.id" style="border: 2px; border-color: blue; border-style: solid;" @click="()=>{console.log(blog.header)}">
                    <BlogList :blog="blog" v-show="((blog.userId===userId)||(!showOnlyMine))" @click="this.$router.push(`/singleBlog/${blog._id}`);"/>
                </li>
            </ul>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import SuiteNavbar from './suiteComp/suiteNavbar.vue';
    import Footer from './homeComp/Footer.vue';
    import BlogList from './suiteComp/blogList.vue'
    import BlogButton from './suiteComp/blogButton.vue'

    import axios from 'axios';

    export default {
        name: 'blog',
        components:{
            SuiteNavbar,
            Footer,
            BlogList,
            BlogButton
        },
        data(){
            return{
                blogs:[],
                blogId:'',
                blogHeader:'',
                blogContent:'',
                blogDate:'',
                userId:'',
                blog:{},
                showOnlyMine:false,
            }
        },
        created(){
            this.fetchBlogContent();
            this.showListComp();
        },
        computed: {
            reversedBlogs() {
                return this.blogs.slice().reverse();
            }
        },
        methods:{
            async fetchBlogContent(){
                try {
                    const accessToken = localStorage.getItem('access_token');
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    const response = await axios.get('http://localhost:3500/api/blog/getBlogs');
                    this.blogs = response.data;
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
                    const response = await axios.get('http://localhost:3500/api/blog/getUserBlogs');
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
            }
        }
    }
</script>

<style scoped>
.list{
    min-width: 700px;
    margin: 10px;
}
</style>