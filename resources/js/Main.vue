<template>
  
<div>
  
    <app-header/>
         <bridge-notify />
    <div class="">
 <router-view></router-view>
        <!-- <Index/> -->
    </div>
 <app-footer/>
  
    </div> 
</template>
<script>
 import  AppHeader  from "./components/layouts/Header";
      import AppFooter  from "./components/layouts/Footer";
    //    import Index  from "./pages/Index";  
export default {
    components:{AppHeader,AppFooter}
   
};
</script>i