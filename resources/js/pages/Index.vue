<template>
    <div>
<div class="text-center mt-5">
<h2>Shorten Your big Url</h2>
<form @submit.prevent="submit">
    <input type="text" class="p-2 border shadow p-3 mb-5 bg-white rounded w-25" v-model="original_url" placeholder="Paste Your Big Url">
    <i @click="submit" class="fa fa-paper-plane text-danger fa-2x" style="cursor:pointer" aria-hidden="true">



    </i>
</form>
<span class="text-danger" style="font-size:20px" v-if="errors.original_url"> {{errors.original_url[0]}}</span>
</div>
<section class="mt-2 container p-5 ">
    <table class="table table-bordered" v-if="items.length>0">
<thead>
    <tr class="">
    <th>Big Url</th>
    <th>Short Url</th>
    <th>Visits</th>
    <th>Created At</th>
    <th>Action</th>
    </tr>
</thead>
<tbody>
    <tr  v-for="item in items" :key="item.id">
        <td>
          
            {{item.original_url}}
           
            </td>
        <td>
            <a :href="item.path" style="text-decoration:none" class="text-dark" target="_blank">
            {{item.short_url}}<i class="fa fa-external-link ml-2" aria-hidden="true"></i></a>
            </td>
            <td>{{item.visit}}</td>
        <td>{{item.created_at}}</td>
        <td><i @click="destroy(item)" class="fa fa-times text-danger fa-2x" style="cursor:pointer" aria-hidden="true"></i></td>
    </tr>
</tbody>
    </table>
    <div class="text-center" v-else>
        <h2 class="text-danger">No data found</h2>

    </div>
<!-- <div  v-for="item in items" :key="item.id">
   <p>{{item.original_url}}</p> 
   <p>{{item.short_url}}</p> 


</div> -->
</section>
    </div>
    
</template>
<script>

export default {
    middleware:"auth",
  data(){
     
      
      return {
          original_url:"",
          errors:{},
          items:[]
      };
  },
  mounted(){
this.fetchData();
  },    
    methods:{
        submit(){
             if(this.original_url=="")
          return;
        axios.post('api/url',{original_url:this.original_url,user_id:window.user.id})
  .then((res)=> {
      this.original_url="";
      console.log(res.data);
   this.items.unshift(res.data);
     this.$notify({
          message: "Created Successfully 😍",
          duration: 3000,
          position: 'center',
      
        });
  }).catch((e)=>{
    this.errors=e.response.data.errors;
  })
        },
        fetchData(){
            axios.get('api/url').then((res)=>{
               
                this.items=res.data;
            }).catch((e)=>{
                this.errors=e.response.data;
            });
        },
        destroy(item){
            if(confirm("Are You Sure ?")){
        axios.delete(`api/url/${item.short_url}`).then(()=>{
                this.items= this.items.filter(i=>i.id!=item.id);
            });
               this.$notify({
          message: "Deleted Successfully 😍",
          duration: 3000,
   
          position: 'center',
      
        });
            }
    

        }
    }
}
</script>