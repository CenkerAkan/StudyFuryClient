<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <div class="buttons" style="display: flex; justify-content: flex-end;" v-if="commentUDPermission">
        <button class="btn" style="margin:0px" @click="activateCommentPannel">
            <i class="bi bi-pencil-square"></i>
        </button>
        <button type="button" class="btn-close" aria-label="Close" v-if="!updateCommentPanel"
            style="background-color: red; color: red; margin-top: 7px;" @click.prevent="deleteComment">
        </button>
    </div>
    <div v-if="!updateCommentPanel">
        <h5>{{comment.date.substring(0,10) }}</h5>
        <h3>{{username}}</h3>
        <h3>{{comment.description}}</h3>
    </div>
    <div class="card-body" v-if="updateCommentPanel">
        <h5>{{comment.date.substring(0,10) }}</h5>
        <h3>{{username}}</h3>
        <p></p>
        <p></p>
        <div class="input-group wide-text">
            <textarea class="form-control wide" aria-label="With textarea" placeholder="Blog Content" v-model="description"></textarea>
        </div>
        <button 
            class="btn btn-primary"
            :disabled="isCommentFormInvalid"
            @click.prevent="updateComment"
            style="padding: 10px;"
        >Save</button>
    </div>

</template>

<script>
    import axios from 'axios';
    export default{
        name: "singleComment",
        props:{
            isAdmin:false,
            comment:{},
        },
        data(){
            return{
                currentUserId:'deneme',
                updateCommentPanel:false,
                commentUDPermission:false,
                username:'',
                authorId:'',
                description:'',
                token:'',
            }
        },
        created(){
            this.token=(localStorage.access_token);
            this.getStartedCapturer();
        },
        methods:{
            async getStartedCapturer(){
                await this.getStarted();
                
            },
            async getStarted(){
                //this.getUserName();
                console.log("2");
                const response= await axios.post('http://localhost:3500/api/auth/getUserById',{userId:this.comment.userId},
                    {
                        headers: {
                        Authorization: `Bearer ${this.token}` // Authorization başlığına token'ı ekleyin
                        }
                    }
                
                );
                this.username=response.data.username;
                this.authorId=response.data._id;
                //this.getCurrentUser();
                const res= await axios.get('http://localhost:3500/api/auth/user',
                    {
                        headers: {
                        Authorization: `Bearer ${this.token}` // Authorization başlığına token'ı ekleyin
                        }
                    }
                
                );
                this.currentUserId=res.data.id;
                //this.calcCommentPermission();
                this.commentUDPermission=this.isAdmin||(this.currentUserId==this.authorId);
                //
                this.description=this.comment.description;
            },
            async calcCommentPermission(){
                console.log("the comment description is: "+this.comment.description+", isAdmin: "+this.isAdmin+", userId: "+this.comment.userId+" current user id: "+this.currentUserId)
                return (this.commentUDPermission=this.isAdmin||(this.currentUserId==this.authorId));
            },
            activateCommentPannel(){
                this.updateCommentPanel=!this.updateCommentPanel;
            },
            async deleteComment(){
                await axios.post('http://localhost:3500/api/comment/updateComment',{comment_id:this.comment._id,description:this.comment.description,deleteFlag:true},
                    {
                        headers: {
                        Authorization: `Bearer ${localStorage.access_token}` // Authorization başlığına token'ı ekleyin
                        }
                    }
                );
                this.$parent.getStarted();
            },
            async getUserName(){
                console.log("1");
                const response= await axios.post('http://localhost:3500/api/auth/getUserById',{userId:this.comment.userId},
                    {
                        headers: {
                        Authorization: `Bearer ${localStorage.access_token}` // Authorization başlığına token'ı ekleyin
                        }
                    }
                );
                this.username=response.data.username;
                this.authorId=response.data._id;
            },
            async getCurrentUser(){
                const response= await axios.get('http://localhost:3500/api/auth/user');
                this.currentUserId=response.data.id;
            },
            async updateComment(){
                await axios.post('http://localhost:3500/api/comment/updateComment',{comment_id:this.comment._id,description:this.description,deleteFlag:false},
                    {
                        headers: {
                        Authorization: `Bearer ${localStorage.access_token}` // Authorization başlığına token'ı ekleyin
                        }
                    }
                );
                //this.$router.push(`/blog`);
                this.updateCommentPanel=false;
                this.$parent.getStarted();
            }
        },
        
        computed:{
            isCommentFormInvalid() {
                return !this.description;
            },
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