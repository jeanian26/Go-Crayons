<template>
  <div id="app">
    <Test/>
    <div id="nav">
      <div class="container">
        <router-link to="/" v-html="home"></router-link> 
        <router-link to="/about" v-html="about"></router-link>  
        <router-link to="/fetch" v-html="fetch"></router-link>  
      </div>
      
    </div>
    <router-view />
  </div>
</template>

<script>
import Test from "@/components/Test.vue";

export default {

  components: {
    Test,
    
  },
  data() {
    return{
      home:'Home',
      about: 'About',
      fetch: 'fetch'
      
    }
    
  }
};
</script>

<style>
*{
  padding:0;
  margin:0;
  font-family: "Poppins", Times, serif;
}
#nav{
  background-color: black;
  padding: 20px 0 20px 0
}
#nav a{
  color:white;
  text-decoration: none;
  padding-right:20px;
  font-size:14
}


</style>
