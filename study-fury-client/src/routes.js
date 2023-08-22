import {createRouter, createWebHashHistory} from 'vue-router';
import LoginContent from './components/loginContent.vue'
import SignupContent from './components/signupContent.vue'
import HomeContent from './components/homeContent.vue'
import Suite from './components/suite.vue'
import Blog from './components/blog.vue'
import CreateBlog from './components/suiteComp/createBlog.vue'
import SingleBlog from './components/suiteComp/singleBlog.vue'
import UpdateBlog from './components/suiteComp/blogUpdate.vue'
import Focus from './components/focus.vue'
import Todo from './components/todo.vue'


const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeContent },
        { path: '/login', component: LoginContent },
        { path: '/signup', component: SignupContent },
        { path: '/suite', component: Suite },
        { path: '/blog', component: Blog },
        { path: '/createBlog', component: CreateBlog },
        { path: '/singleBlog/:id', component: SingleBlog },
        { path: '/updateBlog', component: UpdateBlog },
        { path: '/focus', component: Focus },
        { path: '/todo', component: Todo }
    ]
});

export default router;