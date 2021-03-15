<template>
   <div class="mt-5">
  <div class="container col-md-6 text-center jumbotron" >
      <h1 class="mb-5">Register</h1>
      <form action="" @submit.prevent="submit">
          <div class="form-group">
   <input type="text" v-model="form.name" name="" class="form-control" id="" placeholder="Enter your name">
          </div>
          <div class="form-group">
              <input type="email" v-model="form.email" class="form-control" placeholder="Enter your Email">

          </div>
          <div class="form-group">
              <input type="password" v-model="form.password" class="form-control" placeholder="Password">

          </div>
             <div class="form-group">
              <input type="password"  v-model="form.password_confirmation" class="form-control"  placeholder="Confirm password">

          </div>
       <button type="submit" class="btn btn-primary btn-block">Register</button>
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
                    name:"",
                    password:"",
                    password_confirmation:"",
            }
        }
    },
    methods:{
        submit(){
                  axios.post('/register',this.form)
  .then((res)=> {
      this.form="";
      this.$router.push("/");
    //   console.log(res.data);
    //    this.$notify({
    //       message: "Register Successfully 😍",
    //       duration: 3000,
    //       position: 'center',
      
    //     });
}).catch((e)=>{
    console.log(e.response.data.errors);
  })
         }
}
}
</script>