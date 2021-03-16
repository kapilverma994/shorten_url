
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
router.beforeEach((to, from, next) => {
 let middleware=to.matched[0].components.default.middleware;
 if(middleware=="guest"){
   if(window.loggedin){
        next("/");
   }
 }
 if(middleware=="auth"){
  if(!window.loggedin){
       next("/login");
  }
}


    next();
})
  export default router;