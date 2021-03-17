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
    <div v-if="items.data.length>0">

    
    <table class="table table-bordered" >
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
    <tr  v-for="item in items.data" :key="item.id">
        <td>
          
            {{item.original_url}}
           
            </td>
        <td>
            <span style="cursor:pointer" @click="copyToClip(item.path)">   {{item.path}}</span>
          
            <a :href="item.path" style="text-decoration:none" class="text-dark" target="_blank">
           <i class="fa fa-external-link ml-2" aria-hidden="true"></i></a>
            </td>
            <td>{{item.visit}}</td>
        <td>{{item.created_at}}</td>
        <td><i @click="destroy(item)" class="fa fa-times text-danger fa-2x" style="cursor:pointer" aria-hidden="true"></i></td>
    </tr>
</tbody>

    </table>
      <div class="d-flex justify-content-between ">
          <button type="submit" :class="items.current_page==1?'disabled':'btn btn-primary'"      @click.prevent="prev"><<</button>
          <button type="submit" :class="items.current_page==items.last_page?'disabled':'btn btn-primary'"   @click.prevent="next">>></button>
    <!-- <a href="" @click.prevent="prev"> << </a>
    <a href="" @click.prevent="next"> >> </a> -->
</div>
    </div>
  
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
          items:{data:[]}
      };
  },
  mounted(){
      
this.fetchData();
  },    
    methods:{
        submit(){
             if(this.original_url=="")
          return;
        axios.post('/url',{original_url:this.original_url})
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

        copyToClip(url){
navigator.clipboard.writeText(url);
        },  
        next(){
             if(this.items.current_page==this.items.last_page) return;
            let nextpage=this.items.current_page+1;
            
                this.fetchData(nextpage);

        },
               prev(){
                     let prevpage=this.items.current_page-1;
             if(prevpage==0) return;
                this.fetchData(prevpage);

        },
        fetchData(page=1){
            axios.get(`/url?page=${page}`).then((res)=>{
            //    console.log(res.data.data)
                this.items=res.data;
            }).catch((e)=>{
               this.errors=e.response.data;
              
            });
        },
        destroy(item){
            if(confirm("Are You Sure ?")){
        axios.delete(`url/${item.short_url}`).then(()=>{
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