import Vue from 'vue'
import VueRouter from 'vue-router'
import homeAdmin from '../components/admin/home.vue'
import Login from '../components/login.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/login',component:Login},
        {path:'/admin',component:homeAdmin}
    ]
});