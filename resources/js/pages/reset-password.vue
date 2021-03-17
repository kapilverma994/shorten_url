<template>
      <div class="mt-5">
  <div class="container col-md-6 text-center jumbotron" >
      <h1 class="mb-5">Reset Password</h1>
      <form action=""  @submit.prevent="submit">
      
          <div class="form-group">
              <input type="email" class="form-control"  v-model="form.email" placeholder="Enter your Email">

          </div>
          <div class="form-group">
              <input type="password" v-model="form.password" class="form-control" placeholder="password">

          </div>
            <div class="form-group">
              <input type="password"  v-model="form.password_confirmation" class="form-control"  placeholder="Confirm password">

          </div>
      
        
       <button type="submit" class="btn btn-primary btn-block">Reset Now</button>
      </form>

  </div>
   </div>
</template>
<script>
 export default {
 
       data(){
        return {
            form:{
         email:"",
             token:"",
           password:"",
           password_confirmation:""
               
            }
        }
    },
      mounted(){
        this.form.email=this.$route.query.email,
        this.form.token=this.$route.params.token
    },
      methods:{
              submit(){
                  axios.post('/password/reset',this.form)
  .then((res)=> {
 
//   window.location="/" ;
      console.log(res.data);
  
}).catch((e)=>{
    console.log(e.response);
  })
         }
}
}

</script>