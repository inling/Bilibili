<template>
    <div class="topNav">
        <div class="menuBg"  :style="bgImages[pageIndex]"></div>
        <div class="menuMask"></div>
        <div class="menuWrapper bili-wrapper">
            <div class="menu-con1">
                <ul1-style></ul1-style>
            </div>
            <div class="menu-con2" @mouseover="setMouseOver" @mouseout="setMouseOut">
                <router-link to="#" class="ul-link">投稿</router-link>
                <transition name="box-show">
                    <ul6-style v-show="isTouGaoShow"></ul6-style>  
                </transition>
            </div>
            <div class="menu-con3">
                <ul2-style v-show="!isLogin"></ul2-style>
                <ul2-style2 v-show="isLogin"></ul2-style2>               
            </div>
        </div>
    </div>
</template>
<script>
    import ul1Style from "@/components/Home/subCom_header/ul1-style/ul1-style.vue"
    import ul2Style from "@/components/Home/subCom_header/ul2-style/ul2-style.vue"
    import ul2Style2 from "@/components/Home/subCom_header/ul2-style/ul2-style2.vue"
    import ul6Style from "@/components/Home/subCom_header/ul6-style/ul6-style.vue"
    export default({
        data(){
            return { 
                isTouGaoShow:false,   
                bgImages:[]
            }
        },
        methods:{
            getBgImages(){
                this.$store.dispatch('bgImage/getBgImages');
                this.bgImages=this.$store.state.bgImage.bgImages;
            },
            setMouseOver(){
                this.isTouGaoShow=true;
            },
            setMouseOut(){
                this.isTouGaoShow=false;
            },
        },
        created(){
            this.getBgImages();
        },
        components:{
            ul1Style,
            ul2Style,
            ul2Style2,
            ul6Style
        },
        computed:{
            pageIndex(){
                return this.$store.getters['global/pageIndex'];
            },
            isLogin(){
                return this.$store.getters['global/isLogin']
            }
        },
        props:['user']
    })
</script>

<style>
    @media screen and (max-width:1400px){
        .topNav .menuWrapper.bili-wrapper {
            width: 980px;
        }
    }
    .topNav{
        position: relative;
        z-index:300;
        height: 42px;
    }
    .topNav .menuBg{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-position: center -10px;
        background-repeat: no-repeat;
        filter: blur(4px)
    }
    .topNav .menuMask{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:hsla(0, 0%, 100%, .4);
        box-shadow:0 1px 2px rgba(0,0,0,.1); 
    }
    .topNav .menuWrapper{
        margin:0 auto;
        width: 1160px;
    }
    .topNav .menuWrapper .menu-con2:hover .ul-link{
        background-color: #ff85ad;
    }
    .topNav .menuWrapper .menu-con2{
        float: right;
        position: relative;
        width: 58px;
        height: 42px;
        margin-left:8px;
    }
    .topNav .menuWrapper .menu-con2 a{
        display: block;
        width: 100%;
        height: 48px;
        line-height: 42px;
        text-align: center;
        color: white;
        font-size: 14px;
        background-color: #fb7299;
        border-radius: 0 0 6px 6px;

    }
    .topNav .menuWrapper .menu-con3{
        float: right;
    }

    /*头部全局过渡效果*/
    .box-show-enter-active{
        transition: all .3s ease;
    }
    .box-show-leave-active{
        transition: all .3s ease;
    }
    .box-show-enter{
        margin-top: 8px;
        opacity: 0;
    }
    .box-show-leave-to{
        margin-top: 8px;
        opacity: 0;
    }
</style>

