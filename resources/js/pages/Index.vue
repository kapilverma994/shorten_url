<template>
    <div>
<div class="text-center mt-5">
<h2>Shorten Your big Url</h2>
<form @submit.prevent="submit">
    <input type="text" class="p-2 border shadow p-3 mb-5 bg-white rounded w-25" v-model="original_url" placeholder="Enter big url">
    <i @click="submit" class="fa fa-paper-plane text-danger fa-2x" style="curson:pointer" aria-hidden="true">



    </i>
</form>
<span class="text-danger" style="font-size:20px" v-if="errors.original_url"> {{errors.original_url[0]}}</span>
</div>
<section class="mt-5">
<div  v-for="item in items" :key="item.id">
   <p>{{item.original_url}}</p> 
   <p>{{item.short_url}}</p> 


</div>
</section>
    </div>
    
</template>
<script>

export default {
  data(){
     
      
      return {
          original_url:"",
          errors:{},
          items:[]
      };
  },
    methods:{
        submit(){
             if(this.original_url=="")
          return;
        axios.post('api/url',{original_url:this.original_url})
  .then((res)=> {
      this.original_url="";
      console.log(res.data);
   this.items.push(res.data.data);
  }).catch((e)=>{
    this.errors=e.response.data.errors;
  })
        }
    }
}
</script>