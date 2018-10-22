<template>
    <div class="topNav">
        <div class="menuBg"  :style="bgImage"></div>
        <div class="menuMask"></div>
        <div class="menuWrapper bili-wrapper">
            <div class="menu-con1">
                <ul1-style :liContent="liContent"></ul1-style>
            </div>
            <div class="menu-con2">
                <router-link to="#" class="ul-link">投稿</router-link>
            </div>
            <div class="menu-con3">
                <ul2-style v-show="!islogin"></ul2-style>
                <ul2-style2 v-show="islogin" :message="message" :user="user"></ul2-style2>               
            </div>
        </div>
    </div>
</template>
<script>
    import ul1Style from "@/components/Home/subCom_header/ul1-style/ul1-style.vue"
    import ul2Style from "@/components/Home/subCom_header/ul2-style/ul2-style.vue"
    import ul2Style2 from "@/components/Home/subCom_header/ul2-style/ul2-style2.vue"
    export default({
        data(){
            return { 
                liContent:[
                    {liTitle:'画友',liText:'画友',downDiv:''},
                    {liTitle:'来探索bilibli音乐的世界吧~',liText:'音频',downDiv:''},
                    {liTitle:'游戏中心',liText:'游戏中心',downDiv:'gameCenter'},
                    {liTitle:'直播',liText:'直播',downDiv:'live'},
                    {liTitle:'会员购',liText:'会员购',downDiv:''},
                    {liTitle:'BML',liText:'BML',downDiv:''},
                ],
                message:[
                    {liTitle:'',liText:'大会员',mesNum:0},
                    {liTitle:'消息',liText:'消息',mesNum:50},
                    {liTitle:'',liText:'动态',mesNum:0},
                    {liTitle:'',liText:'稍后再看',mesNum:0},
                    {liTitle:'',liText:'收藏夹',mesNum:0},
                    {liTitle:'',liText:'历史',mesNum:0}
                ]        
            }
        },
        methods:{

        },
        created(){

        },
        components:{
            ul1Style,
            ul2Style,
            ul2Style2
        },
        props:['islogin','user','bgImage']
    })
</script>

<style scoped>
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
</style>

