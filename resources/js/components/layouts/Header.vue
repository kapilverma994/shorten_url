  <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2 custom_nav">
    <!-- <a class="navbar-brand" href="#">Home</a> -->
       <router-link class="navbar-brand" to="/">Home</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div v-if="loggedin">
           <li class="nav-item active">
          <a class="nav-link" href="/logout">Logout</a>
          <!-- <a class="nav-link" href="/login">Login <span class="sr-only">(current)</span></a> -->
        </li>

        </div>
        <div v-else>
        <li class="nav-item active">
          <router-link class="nav-link" to="/login">Login</router-link>
          <!-- <a class="nav-link" href="/login">Login <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item">
                <router-link class="nav-link" to="/register">Register</router-link>
          <!-- <a class="nav-link" href="/register">Register</a> -->
        </li>
        </div>
    
      </ul>
      
    </div>
  </nav>
  </template>
 <script>
 export default {
   data(){
     return {
       loggedin:window.loggedin 
     };
   }
 }
 </script>


  <style >
  .custom_nav a{
      font-size: 24px;
  }

  </style>