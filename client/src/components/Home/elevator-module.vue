<template>
    <div class="elevator-module" :class="{top:isTop}">
        <div class="nav-bg">
            <div class="tips-img"></div>
        </div>
        <div class="nav-list">
            <div v-for="(item,i) in navList" :key="i" :sortindex='item.sortindex' class="item sortable" @click="itemClick(i)" :class="{on:i==current}">{{item.title}}</div>
            <div class="item customize">
                <i class="bili-icon"></i>排序
            </div>
        </div>
        <div class="sline"></div>
        <div class="back-top bili-icon"></div>
        <div class="app-download">
            <router-link to="#">
                <div id="elevator-mobile-app" class="app-icon"></div>
                <div class="app-tips-icon"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default({
        data(){
            return{
                current:0,
                isTop:false,
                navList:[
                    {sortindex:0,title:'直播'},
                    {sortindex:1,title:'动画'},
                    {sortindex:2,title:'番剧'},
                    {sortindex:3,title:'国创'},
                    {sortindex:4,title:'音乐'},
                    {sortindex:5,title:'音频'},
                    {sortindex:6,title:'舞蹈'},
                    {sortindex:7,title:'游戏'},
                    {sortindex:8,title:'科技'},
                    {sortindex:9,title:'生活'},
                    {sortindex:10,title:'鬼畜'},
                    {sortindex:11,title:'时尚'},
                    {sortindex:12,title:'广告'},
                    {sortindex:13,title:'娱乐'},
                    {sortindex:14,title:'电影'},
                    {sortindex:15,title:'TV剧'},
                    {sortindex:16,title:'影视'},
                    {sortindex:17,title:'纪录片'} 
                ]
            }
        },
        methods:{
            itemClick(i){
                this.current=i;
            },
            handleScroll(){
                var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
                var offsetTop=document.getElementById('chief_recommend').offsetTop;
                if(scrollTop>offsetTop){
                    this.isTop=true;
                }else{
                    this.isTop=false;
                }
            }
        },
        created(){

        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll)
        },
        destroyed() {
            window.removeEventListener('scroll',this.handleScroll)
        },
    })
</script>

<style>
    @media screen and (max-width: 1400px){
        .elevator-module {
            margin-left: 500px !important;
        }
    }
    .elevator-module{
        position: fixed;
        z-index: 10;
        left:50%;
        top:232px;
        margin-left:590px;
        transition: top .3s;
    }
    .top{
        top:13.5px;
    }
    .elevator-module .nav-bg{
        opacity: 0;
        position: absolute;
        top:-15px;
        right:0;
        height:100%;
        padding-bottom:20px;
        width: 60px;
        background: hsla(0,0%,100%,.8);
        border-radius: 4px;
        overflow:hidden;
        transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .elevator-module .tips-img{
        position: absolute;
        width:117px;
        height:333px;
        background:url(/img/tab2233.png);
        left:12px;
        top: 14px;
    }

    .elevator-module .nav-list{
        position: relative;
        background-color: #f6f9fa;
        border:1px solid #e5e9ef;
        overflow: hidden;
        border-radius:4px;
    }
    .elevator-module .item{
        width:48px;
        height:32px;
        line-height: 32px;
        text-align:center;
        transition: background-color .3s,color .3s;
        cursor: pointer;
        user-select: none;
        font-size: 12px;
    }
    .elevator-module .item:hover{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .item.on{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .nav-list .customize{
        height:54px;
        line-height: 20px;
        padding:8px 0;
        border-top:1px solid #e5e9ef;
    }
    .elevator-module .nav-list .customize .bili-icon{
        display: block;
        margin:0 auto 4px;
        background-position: -663px -151px;
        height:18px;
        width:18px
    }
    .elevator-module .sline{
        position: relative;
        border-left: 1px solid #ddd;
        border-right:1px solid #ddd;
        height:9px;
        width:30px;
        margin:0 auto;
    }
    .elevator-module .back-top{
        position: relative;
        display: block;
        cursor: pointer;
        height: 48px;
        background-position: -648px -72px;
        background-color: #f6f9fa;
        border:1px solid #e5e9ef;
        overflow: hidden;
        border-radius: 4px;
    }
    .elevator-module .back-top:hover{
        background-color: #00a1d6;
        background-position: -714px -72px;
        border-color: #00a1d6;
    }
    .elevator-module .app-download{
        position: relative;
        width:50px;
        height:70px;
    }
    .elevator-module .app-download .app-icon{
        position: absolute;
        left:-15px;
        width:80px;
        height:80px;
        background-image: url()
    }
</style>
