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
                navlists:[
                    {navName:'动画',numWrap:'992'},
                    {navName:'番剧',numWrap:'67'},
                    {navName:'国创',numWrap:'124'},
                    {navName:'音乐',numWrap:'999+'},
                    {navName:'舞蹈',numWrap:'241'},
                    {navName:'游戏',numWrap:'999+'},
                    {navName:'科技',numWrap:'999+'},
                    {navName:'生活',numWrap:'999+'},
                    {navName:'鬼畜',numWrap:'50'},
                    {navName:'时尚',numWrap:'683'},
                    {navName:'广告',numWrap:'170'},
                    {navName:'娱乐',numWrap:'999+'},
                    {navName:'影视',numWrap:'999+'},
                    {navName:'放映厅',numWrap:'320'}
                ],
                sideNavlists:[
                    {iname:'zhuanlan',sname:'专栏'},
                    {iname:'square',sname:'广场'},
                    {iname:'live',sname:'直播'},
                    {iname:'blackroom',sname:'小黑屋'}
                ],
                rGif:'img/header/random-1.gif',
                rGiflist:[
                    'img/header/random-1.gif',
                    'img/header/random-2.gif',
                    'img/header/random-3.gif',
                    'img/header/random-4.gif',
                    'img/header/random-5.gif'
                ]
            }
        },
        methods:{
            setRandomImage(){
                var range=Math.floor(Math.random()*5);
                this.rGif=this.rGiflist[range];
            }
        },
        created(){
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
