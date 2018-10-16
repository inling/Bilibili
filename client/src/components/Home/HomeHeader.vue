<template>
    <div class="appHeader">
        <div class="headerMenu">
            <div class="menuBg"></div>
            <div class="menuMask"></div>
            <div class="menuWrapper">
                <div class="menu-con1">
                    <ul>
                        <li class="home">
                            <a><i class="bili-icon"></i>主站</a>
                        </li>
                        <li><a>画友</a></li>
                        <li><a>音频</a></li>
                        <li><a>游戏中心</a></li>
                        <li><a>直播</a></li>
                        <li><a>会员购</a></li>
                        <li><a>BML</a></li>
                        <li class="downland">
                            <a><i class="bili-icon"></i>下载APP</a>
                        </li>
                    </ul>
                </div>
                <div class="menu-con2">
                </div>
                <div class="menu-con3">
                </div>
            </div>
        </div>
        <div class="headerBanner">

        </div>
        <div class="headerWrapper">

        </div>
    </div>
</template>

<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created() {
            
        },
    })
</script>

<style scoped>

    .appHeader{
        font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    }
    .appHeader .headerMenu{
        position: relative;
        z-index:200;
        height: 42px;
    }
    .appHeader .headerMenu .menuBg{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-image: url('/img/header/h-1.png');
        background-position: center -10px;
        background-repeat: no-repeat;
        filter: blur(4px)
    }
    .appHeader .headerMenu .menuMask{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:hsla(0, 0%, 100%, .4);
        box-shadow:0 1px 2px rgba(0,0,0,.1); 
    }
    .appHeader .headerMenu .menuWrapper{
        margin:0 auto;
        width: 1160px;
    }
    .appHeader .headerMenu .menuWrapper ul{
        list-style: none;
        position: relative;
    }
    
    .appHeader .headerMenu .menuWrapper ul li{
        float: left;
        position: relative;
        text-align: center;
        height: 42px;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper ul .home{
        margin-left: -10px;
        padding-left: 12px;
    }
    .appHeader .headerMenu .menuWrapper ul li a{
        display: block;
        height: 100%;
        padding: 0 8px;
    }
    .appHeader .headerMenu .menuWrapper ul .home a{
        padding-left: 20px;
    }
    .appHeader .headerMenu .menuWrapper ul .home a i{
        position: absolute;
        display: inline-block;
        width: 17px;
        height:14px;
        top:12px;
        left:10px;
        background-position: -919px -88px;
    }
    .appHeader .headerMenu .menuWrapper ul .downland{
        padding: 0 10px;
    }
    .appHeader .headerMenu .menuWrapper ul .downland a{
        padding: 0;
    }
    .appHeader .headerMenu .menuWrapper ul .downland a i{
        display: inline-block;
        width: 16px;
        height:21px;
        background-position: -1371px -1175px;
        vertical-align: middle;
    }
    .appHeader .headerBanner{
        position: relative;
        height:170px;
        background: #eee;
        background-image: url('/img/header/h-1.png');
        background-position: center -10px;
        margin-top: -42px;
    }
</style>

