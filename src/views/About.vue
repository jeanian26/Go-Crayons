<template>
  <div class="about">
    <div class="about-banner">
      <div class="container">
        <h1 v-html="bannerHeading"></h1>
        <p v-html="bannerParagraph"></p>
      </div>
    </div>
    <div class='gallery-container'>
      <div class="container">
        <gallery
        v-bind:galleryName="title[0]"
        v-bind:paragraph1="paragraphOne"
        v-bind:paragraph2="pragraphTwo"
        v-bind:galleryImage="imgPath[0]"
        v-bind:reverse=false
        />
        <gallery
        v-bind:galleryName="title[1]"
        v-bind:paragraph1="paragraphOne"
        v-bind:paragraph2="pragraphTwo"
        v-bind:galleryImage="imgPath[1]"
        v-bind:reverse=true
        />
        <gallery
        v-bind:galleryName="title[2]"
        v-bind:paragraph1="paragraphOne"
        v-bind:paragraph2="pragraphTwo"
        v-bind:galleryImage="imgPath[2]"
        v-bind:reverse=false
        />
      </div>
    </div>
    <cta/>
  </div>
</template>
<script>
import gallery from '@/components/gallery.vue';
import cta from '@/components/cta.vue'

export default {
  components: {gallery,cta },
  data(){
    return{
      bannerHeading:'40 Best Simple Wordpress Themes You Should Try (2017)',
      bannerParagraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: ['1. Modern Portfolio Pro', '2. Camellia','3. Corner'],
      paragraphOne:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      pragraphTwo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      imgPath:['img1','img2','img1']

    
    }
  }
}
</script>

<style>
.about-banner{
  padding:100px 0;
}
.about-banner h1{
  font-size: 36px;
  color:#080808;
  line-height: 48pt;
  text-align: center;
}
.about-banner p{
  font-size: 14px;
  color:#080808;
  line-height: 20pt;
  text-align: center;
}
.gallery-container{
  background-color: #fafafa;

}
</style>
