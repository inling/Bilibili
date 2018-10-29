<template>
    <div class="bottomNav bili-wrapper">
        <div class="primary-menu border-b">
            <ul3-style :navlists="navlists" :sideNavlists="sideNavlists"></ul3-style>    
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
                navlists:[],
                sideNavlists:[],
                rGif:'img/header/random-1.gif',
                rGiflist:[
                    'img/header/random-1.gif',
                    'img/header/random-2.gif',
                    'img/header/random-3.gif',
                    'img/header/random-4.gif',
                    'img/header/random-5.gif',
                    'img/header/random-6.gif'
                ]
            }
        },
        methods:{
            getNavlists(){
                this.$store.dispatch('category/getNavlists');
                this.navlists=this.$store.state.category.navlists;
            },
            getSideNavlists(){
                this.$store.dispatch('category/getSideNavlists');
                this.sideNavlists=this.$store.state.category.sideNavlists;
            },
            setRandomImage(){
                var l=this.rGiflist.length;
                var range=Math.floor(Math.random()*l);
                this.rGif=this.rGiflist[range];
            }
            
        },
        created(){
            this.getNavlists();
            this.getSideNavlists();
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
