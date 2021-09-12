<template>
  <div class="home">
    <div class='banner'>
      <div class='container'>
       <h1 v-text="bannerText"></h1> 
      </div>
    </div>
    <div class='text-content'>
      <div class='container'>
        <h2 v-html='headingTitle'></h2>
        <p v-html="paragraphOne"></p>
        <p v-html="paragraphTwo"></p>
      </div>
      <div class="container img-container"> 
        <imageContainer v-bind:msg='msg[0]' :imgsource='imgsource[0]' />
        <imageContainer v-bind:msg='msg[1]' :imgsource='imgsource[1]' />  
      </div>
      <cta />
    </div>
    
  </div>
</template>

<script>
import imageContainer from '@/components/image-Container.vue';
import cta from '@/components/cta.vue';


export default {
  components: { imageContainer,cta },
  data(){
    return{
      bannerText:'40 Best Simple Wordpress Themes You Should Try (2017)',
      headingTitle:'Starting a WordPress Site with a Simple Theme',
      paragraphOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      paragraphTwo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      msg:['1. Modern Portfolio Pro','2. Camellia'],
      imgsource:['img1','img2']
    }
  }
};
</script>

<style>
.home{
  background-color: #fafafa;
}
.banner{
  background-color: #fe6f61;
  padding:60px 0 60px 0
}
.banner h1{
  font-size:36px;
  color:white;
  text-align: center;
}
.text-content{
  padding:50px 0 0 0;
}
.text-content h2{
  font-size: 18px;
}
.text-content p{
  margin-top: 30px;
  font-size:14px;
  line-height: 24px;
}
.img-container{
  margin-top:100px;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  
}
.img-container div:first-of-type{
  margin-right:1rem
}



</style>
