import {createRouter, createWebHashHistory} from 'vue-router';
import LoginContent from './components/loginContent.vue'
import SignupContent from './components/signupContent.vue'
import HomeContent from './components/homeContent.vue'

const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeContent },
        { path: '/login', component: LoginContent },
        { path: '/signup', component: SignupContent }
    ]
});

export default router;