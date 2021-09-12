<template>
    <div class='imgbox'>
        <h3 v-html="msg"></h3>
        <img  alt="" :src="require(`../assets/${imgsource}.png`)" />
    </div>
</template>

<script>
export default {
  name: "image-Container",
  props: {
      msg: String,
      imgsource: String
  },


};
</script>
<style >
.imgbox img{
    max-width: 100%;
    margin-top:20px
    
}
.imgbox{
    margin-bottom: 50px;
}
</style>