<template>
   <div class="mt-5">
  <div class="container col-md-6 text-center jumbotron" >
      <h1 class="mb-5">Send Password Reset Link</h1>
      <form action=""  @submit.prevent="submit">
      
          <div class="form-group">
              <input type="email" class="form-control"  v-model="form.email" placeholder="Enter your Email">

<!-- <span class="text-danger" v-if="errors.email">{{errors.email[0]}} </span> -->
<!-- <span class="text-danger" style="font-size:20px" v-if="errors.email"> {{errors.email[0]}}</span> -->
         
     
          </div>
       
        
        
       <button type="submit" class="btn btn-primary btn-block">Send Password Reset Link</button>
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
                
         
          errors:{},
          items:[]
 
         
               
            }
        }
    },
      methods:{
              submit(){
                  axios.post('/password/email',this.form)
  .then((res)=> {
 
//   window.location="/" ;
      this.$notify({message:res.data.message});
  
}).catch((e)=>{
    // console.log(e.response.data.errors)
  this.errors=e.response.data.errors;
    console.log(this.errors.email[0]);
  })
    
  
         }
}
}
</script>