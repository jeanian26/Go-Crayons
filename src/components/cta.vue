<template>
    <div class=cta-container>
        <div class='container '>
            <div class='cta'>
                <h2 class='cta-h2' v-text="ctaHeading"></h2>
                <p class='cta-p' v-text="ctaText"></p>
                <div class="button-container">
                    <a class='button-cta' href="#">DOWNLOAD NOW</a>    
                </div>
                
            </div>

        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            ctaHeading: 'the ultimate wordpress toolkit',
            ctaText: 'Editorial Staff at WPBeginner is a team at WordPress experts led by Syed Balkhi. Page maintained by Syed Balkhi.'
        }
    }
}
</script>

<style>
.cta-container{
    background-color: white !important;
    padding: 50px 0
}
.cta{
    background-image:url('../assets/cta.png');
    background-size: cover;
    padding:50px;
}
.cta .cta-h2{
    font-size: 36px;
    color: white;
    text-align: center;
}
.cta .cta-p{
    font-size: 14px;
    color:white;
    text-align: center;
    margin-top:20px;
    margin-bottom:30px
}

.cta .button-cta{
    background-color: #5cc6d0;
    padding: 12px;
    margin-top: 30px;
    align-self: center;
    text-decoration: none;
    color: white;
}
.button-container{
    text-align: center;
}
</style>