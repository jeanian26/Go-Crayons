<template>
    <div class='gallery' v-bind:class="[reverse ? 'reverse-card':'']">
        <div class=gallery-text>
            <h3 v-text="galleryName"></h3>
            <p v-text="paragraph1"></p>
            <p v-text="paragraph2"></p>
        </div>
        <div class='gallery-images'>
            <img :src="require(`../assets/${galleryImage}.png`)" alt="">
        </div>

    </div>
</template>
<script>
export default {
    name:'gallery',
    props:{
        galleryName: String,
        paragraph1: String,
        paragraph2: String,
        galleryImage:String,
        reverse:Boolean
    }
}
</script>
<style>
.gallery{
    display: flex;
    justify-content: space-between;
    padding:100px 0;
}
.reverse-card{
    flex-direction: row-reverse;
}
.gallery div{
    max-width: 515px;
    width: 100%;
}
.gallery-text{
    line-height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.gallery-text h3{
    font-size:18px;
    line-height: 24px;
}
.gallery-text p{
    font-size: 14px;
    padding-top: 30px;
}
</style>