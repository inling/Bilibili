<template>
    <div class="bottomNav bili-wrapper">
        <div class="primary-menu border-b">
            <ul3-style></ul3-style>    
            <div class="gif-menu nav-gif">
                <router-link to="#" class="random-p">
                    <img :src="rGif" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import ul3Style from "@/components/Home/subCom_header/ul3-style/ul3-style.vue"
    export default({
        data(){
            return {
                rGif:'',
                rGiflist:[]
            }
        },
        methods:{
            getRGiflist(){
                this.$store.dispatch('category/getRGiflist');
                this.rGiflist=this.$store.state.category.rGiflist;
                this.rGif=this.rGiflist[0];
            },
            setRandomImage(){
                var l=this.rGiflist.length;
                var range=Math.floor(Math.random()*l);
                this.rGif=this.rGiflist[range];
            }
            
        },
        created(){
            this.getRGiflist();
            this.setRandomImage();
        },
        components:{
            ul3Style
        }
    })
</script>
<style scoped>
    @media screen and (max-width:1400px){
        .bottomNav.bili-wrapper {
            width: 980px;
        }
    }
    @media screen and (min-width: 1400px){
        .primary-menu {
            width: 1160px;
        }
    }
    .bottomNav{
        margin: 0 auto;
        width: 1160px;
    }
    .primary-menu{
        position: relative;
        height: 58px;
        margin: 0 auto 4px;
        padding:8px 0 0;
        border-bottom: 1px solid #fff;
    }
    .bottomNav .nav-gif{
        position: absolute;
        right: 0;
        top: 0;
        height: 50px;
        padding: 4px 0;
    }
    .bottomNav .nav-gif .random-p{
        width: 69px;
        height: 40px;
        display: inline-block;
        vertical-align: top;
        margin: 3px 0;
        overflow: hidden;
    }
    .bottomNav .nav-gif .random-p img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 3px;
    }
    .primary-menu.border-b {
        border-bottom: 1px solid #e5e9ef;
    }
</style>
