import Vue from 'vue'
import VueRouter from 'vue-router'
import homeAdmin from '../components/admin/home.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/admin',name:homeAdmin,component:homeAdmin}
    ]
});