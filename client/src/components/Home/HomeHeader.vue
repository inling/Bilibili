<template>
    <div class="appHeader">
        <div class="headerMenu">
            <div class="menuBg"></div>
            <div class="menuMask"></div>
            <div class="menuWrapper">
                <div class="menu-con1">
                    <ul>
                        <li>主站</li>
                        <li>画友</li>
                        <li>音频</li>
                        <li>游戏中心</li>
                        <li>直播</li>
                        <li>会员购</li>
                        <li>BML</li>
                        <li>下载APP</li>
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
        height: 42px;
        line-height: 42px;
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

