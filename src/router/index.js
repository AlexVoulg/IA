import { createRouter, createWebHistory } from 'vue-router'
import Hello from "../components/Hello.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Travel from "../views/Travels.vue"
import CreateTravel from '../views/CreateTravel.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'

//404 Page
import PathNotFound from '../views/PathNotFound.vue'

//TESTING component
import Testing from "../components/Testing.vue"

const routes = [
    //Redirect path for unknown pages
    {path: '/:pathMatch(.*)*', name: '404', component: PathNotFound},

    //Easter egg
    {path: '/hello', name: 'hello', component: Hello },

    //Main Paths
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/testing', name : 'testing', component: Testing},
    {path: '/travels', name: 'travels', component: Travel },
    {path: '/travels:destinationId', name:'destination', component: Travel},
    {path: '/createTravel', name: 'createTravel', component: CreateTravel},
    {path:'/login', name: 'login', component: Login},
    {path: '/account', name: 'account', component: Account}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        else
            return {
                top: 0
            }
    }
})
//to onoma pou kanoume import
export default router


