<template>
   <div class="mt-5">
  <div class="container col-md-6 text-center jumbotron" >
      <h1 class="mb-5">Login</h1>
      <form action=""  @submit.prevent="submit">
      
          <div class="form-group">
              <input type="email" class="form-control"  v-model="form.email" placeholder="Enter your Email">

          </div>
          <div class="form-group">
              <input type="password" v-model="form.password" class="form-control" placeholder="password">

          </div>
       <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>

  </div>
   </div>
</template>
<script>
export default {
    middleware:"guest",
       data(){
        return {
            form:{
                email:"",
         
                password:"",
               
            }
        }
    },
      methods:{
              submit(){
                  axios.post('/login',this.form)
  .then((res)=> {
 
  window.location="/" ;
    //   console.log(res.data);
  
}).catch((e)=>{
    console.log(e.response);
  })
         }
}
}
</script>