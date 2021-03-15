
import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index  from "./pages/Index";  

import Login  from "./pages/login"; 

import Register  from "./pages/register"; 
const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },

  ]

  
  
  const router = new VueRouter({
    routes, // short for `routes: routes`
   hashbang:false,
   mode:"history"  
})   

  export default router;