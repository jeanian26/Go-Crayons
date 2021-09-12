<template>
  <div class='topHeader'>
    <div class='container'>
      <div class='col1'>
        <a class='Logo' :href="logoLink"><img alt="Vue logo" :src="(logoOne)" /></a>
        <a class='telLink' :href="telLink">(046)123-456</a>  
      </div>
    
    </div>
    
  </div>
    
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      testing: '<h1>test</h1>',  
      logoOne: require('../assets/GoCrayons_logo.png'),
      logoLink:'',
      telLink:'tel:046123456'
    }
    
  }

};
</script>

<style>
.topHeader{
  vertical-align: middle;
  padding: 30px 0 30px;
}
.container{
  max-width:1080px;
  margin:0 auto;
  padding:0 50px 0 50px
}
.container .telLink{
  color:black;
  text-decoration:none;
  font-weight: bold;
}
.container .col1{
    display: flex;
    align-content: center;
    justify-content: space-between;
}
</style>