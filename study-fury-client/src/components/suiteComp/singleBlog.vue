<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <SuiteNavbar/>
    <div style="display: flex; justify-content: center; align-items: center;background-color: beige;min-height: 500px;">
        <ul>
            <ul class="info-card" style="border-style: groove;border-width: 3px;border-color: red;margin-top: 15px;margin-bottom: 30px;">
                <div>
                    <div class="buttons" style="display: flex; justify-content: flex-end;" v-if="updateAndDeletePermission">
                        <button class="btn" style="margin:0px" @click="activateUpdatePannel">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn-close" aria-label="Close" v-if="!updatePanelOpen"
                        style="background-color: red; color: red; margin-top: 7px;" @click.prevent="deletePost">
                        </button>
                    </div>
                </div>
                <div class="card-body" v-if="!updatePanelOpen">
                    <h5 class="card-header">{{header}}</h5>
                    <h5 class="card-title">Written by {{ username }}</h5>
                    <p></p>
                    <h6>{{ date.substring(0,10) }}</h6>
                    <p></p>
                    <p class="card-text">{{ description }}</p>
                    <h1>{{ commandMessage }}</h1>
                </div>
                <div class="card-body" v-if="updatePanelOpen">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                    placeholder="email" v-model="header">
                    <h5 class="card-title">Written by {{ username }}</h5>
                    <p></p>
                    <h6>{{ date.substring(0,10) }}</h6>
                    <p></p>
                    <div class="input-group wide-text">
                        <textarea class="form-control wide" aria-label="With textarea" placeholder="Blog Content" v-model="description"></textarea>
                    </div>
                    <h1>{{ commandMessage }}</h1>
                    <button 
                        class="btn btn-primary"
                        :disabled="isLoginFormInvalid"
                        @click.prevent="updateBlog"
                        style="padding: 10px;"
                    >Save</button>
                </div>
            </ul>
            <ul>
                <hr>
                <h2>Comments</h2>
                <hr>
                <ul style="border-style: groove;border-width: 3px;border-color: red;margin-top: 15px;">
            
                    <div>
                        <label for="basic-url" class="form-label">Write Your Opinions</label>
                        <div class="input-group wide-text wide">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Your Comment" v-model="commentContent"></textarea>
                        </div>
                    </div>
                    <button 
                        class="btn btn-success"
                        @click.prevent="createComment"
                        :disabled="isCommentFormInvalid"
                        style="padding: 10px; margin-bottom: 30px;"
                    >Create Comment</button>
                </ul>
                <li class="list" v-for="comment in reversedComments" :key="!comment.id" style="border: 2px; border-color: blue; border-style: solid;" @click="()=>{}">
                    <SingleComment :isAdmin="this.isAdmin"  :comment="comment"/>
                    <!--
                    <div class="buttons" style="display: flex; justify-content: flex-end;" v-if="calcCommentPermission">
                        <button class="btn" style="margin:0px" @click="activateCommentPannel">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn-close" aria-label="Close" v-if="!updateCommentPanel"
                        style="background-color: red; color: red; margin-top: 7px;" @click.prevent="deleteComment">
                        </button>
                    </div>
                    
                    <h5>{{comment.date.substring(0,10) }}</h5>
                    <h3>{{comment._id}}</h3>
                    <h3>{{comment.description}}</h3>
                    -->

                </li>
            </ul>
        </ul>
    </div>
    <Footer/>
</template>

<script>
    import SuiteNavbar from './suiteNavbar.vue';
    import Footer from '../homeComp/Footer.vue';
    import SingleComment from './singleComment.vue';

    import axios from 'axios';
    export default{
        name:"singleBlog",
        components:{
            SuiteNavbar,
            Footer,
            SingleComment,

        },
        data(){
            return{
                header:'def',
                description:'def',
                date:'def',
                username:'def',
                blogId:'def',
                userId:'def',
                isAdmin:false,
                currentUserId:'',
                updateAndDeletePermission:false,
                commandMessage:'',
                updatePanelOpen:false,
                comments:[],
                comment:{},
                commentContent:'',
                commentUDPermission:false,
                updateCommentPanel:false,
            }
        },
        created(){
            this.getStarted();
        },
        methods:{
            async getStarted(){
                const blogIds=this.$route.params.id;
                try {
                const response=await axios.post('http://localhost:3500/api/blog/viewBlog',{blog_id:blogIds});
                this.userId=response.data.userId;
                const usersId=this.userId;
                await this.setUser(usersId);

                this.header=response.data.header;
                this.description=response.data.description;
                this.date=response.data.date;
                this.blogId=blogIds;
              
                this.calcPermission();
                this.getComments();
                } catch (error) {
                    console.error(error);
                }
            },
            async setUser(currentuserId){
                await axios.post('http://localhost:3500/api/auth/getUserById',{userId:currentuserId}).then((response)=>{
                    this.username=response.data.username;
                });
                await axios.get('http://localhost:3500/api/auth/user').then((response)=>{
                    this.isAdmin=response.data.isAdmin;
                    this.currentUserId=response.data._id;
                });
            },
            calcPermission(){
                this.updateAndDeletePermission=this.isAdmin||(this.userId==this.currentUserId);
            },
            async deletePost(){
                await axios.post('http://localhost:3500/api/blog/updateBlog',{header:"delete",description:"delete",blogId:this.blogId,deleteFlag:true}).then((response)=>{
                    this.username=response.data.username;
                });
                this.commandMessage="Delete Successful"
                this.$router.push(`/blog`);
            },
            activateUpdatePannel(){
                this.updatePanelOpen=!this.updatePanelOpen;
            },
            async updateBlog(){
                await axios.post('http://localhost:3500/api/blog/updateBlog',{header:this.header,description:this.description,blogId:this.blogId,deleteFlag:false}).then((response)=>{
                    this.username=response.data.username;
                });
                this.commandMessage="Update Successful"
                this.$router.push(`/blog`);
            },
            async getComments(){
                
                await axios.post('http://localhost:3500/api/comment/listComment',{postId:this.blogId}).then((response)=>{
                    this.comments=response.data;
                    console.log(response)
                });
                return;
            },
            async createComment(){
                await axios.post('http://localhost:3500/api/comment/createComment',{post_id:this.blogId,description:this.commentContent}).then((response)=>{
                    this.$router.push(`/singleBlog/${this.blogId}`);
                });
                return;
            },
            async deneme(usersId){
                let userval=await this.getUserFromId(usersId);
                console.log(userval);
                this.commentAuthor=userval;
            },
            async getUserFromId(usersid){
                let commentAuthor='def'
                const response= await axios.post('http://localhost:3500/api/auth/getUserById',{userId:usersid});
                commentAuthor=response.data.username;
                console.log(commentAuthor);
                return commentAuthor;
            },
            activateCommentPannel(){
                this.updateCommentPanel=!this.updateCommentPanel;
            },
            calcCommentPermission(){
                return this.commentUDPermission=this.isAdmin||(this.comment.userId==this.currentUserId);
            },
            async deleteComment(){
                console.log("the comment id is:"+this.comment._id)
                await axios.post('http://localhost:3500/api/comment/updateComment',{comment_id:this.comment._id,description:this.comment.description,deleteFlag:true});
                this.$router.push(`/blog`);
            }
        },
        computed:{
            isLoginFormInvalid() {
                return !this.header || !this.description;
            },
            isCommentFormInvalid(){
                return !this.commentContent;
            },
            reversedComments() {
                return this.comments.slice().reverse();
            }
        },
    }

</script>

<style scoped>
.info-card{
    min-width: 750px;
    min-height: 275px;
    max-width: 750px;
    max-height: 400px;
}
.wide{
    min-width: 750px;
    min-height: 200px;
    max-width: 750px;
    max-height: 200px;
}

</style>