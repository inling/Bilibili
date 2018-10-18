<template>
    <div class="bottomNav bili-wrapper">
        <div class="primary-menu">
            <ul class="nav-bar">
                <!--首页-->
                <home-box></home-box>
                <!--动画、番剧、国创。。。。。放映厅-->
                <nav-item1 v-for="(item,i) in navlists" :key="i" :navName="item.navName" :numWrap="item.numWrap"></nav-item1>
                <!--专栏-->
                <li class="side-nav">
                    <router-link to="#" class="side-link">
                        <i class="zhuanlan"></i>
                        <span>专栏</span>
                    </router-link>
                </li>
                <!--广场-->
                <li class="side-nav">
                    <router-link to="#" class="side-link"></router-link>
                </li>
                <!--直播-->
                <li class="side-nav">
                    <router-link to="#" class="side-link"></router-link>
                </li>
                <!--小黑屋-->
                <li class="side-nav">
                    <router-link to="#"></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import homeBox from "@/components/Home/subCom_header/navCom/homeBox.vue";
    import navItem1 from "@/components/Home/subCom_header/navCom/navItem1.vue";
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
                ]
            }
        },
        methods:{

        },
        created(){

        },
        components:{
            homeBox,
            navItem1
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
    /*导航栏ul样式*/
    .primary-menu .nav-bar{
        position: relative;
        z-index: 200;
        height: 42px;
        color: #222;
    }   
    @media screen and (min-width: 1400px){
        .bottomNav .primary-menu .nav-bar li.side-nav {
            margin: 0 6px;
        }
    }
    .bottomNav .side-nav{
        width: 40px;
        text-align: center;
        float: left;
        display: block;
        position: relative;
    }

    .bottomNav .side-nav .side-link{
        display: inline-block;
        position: relative;
        overflow: hidden;
    }

        
</style>
