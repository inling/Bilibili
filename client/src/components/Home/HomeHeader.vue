<template>
    <div class="appHeader">
        <div class="headerMenu">
            <div class="menuBg"></div>
            <div class="menuMask"></div>
            <div class="menuWrapper">
                <div class="menu-con1">
                    <ul>
                        <li class="home">
                            <router-link to="#"><i class="bili-icon"></i>主站</router-link>
                        </li>
                        <li><router-link to="#">画友</router-link></li>
                        <li><router-link to="#">音频</router-link></li>
                        <li><router-link to="#">游戏中心</router-link></li>
                        <li><router-link to="#">直播</router-link></li>
                        <li><router-link to="#">会员购</router-link></li>
                        <li><router-link to="#">BML</router-link></li>
                        <li class="downland">
                            <router-link to="#"><i class="bili-icon"></i>下载APP</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-con2">
                    <router-link to="#">投稿</router-link>
                </div>
                <div class="menu-con3">
                    <ul class="no-login" v-show="islogin">
                        <li class="profile-info">
                            <router-link to="#">
                                <div class="i-face">
                                    <img src="img/header/akari.jpg" alt="" class="face">
                                </div>
                            </router-link>
                        </li>
                        <li class="playpage_history">
                            <router-link to="#">历史</router-link>
                        </li>
                    </ul>
                    <ul class="login" v-show="!islogin">
                        <li class="profile-info">
                            <router-link to="#">
                                <div class="i-face">
                                    <img src="img/header/akari.jpg" alt="" class="face">
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">大会员</router-link>
                        </li>
                        <li>
                            <router-link to="#">消息</router-link>
                        </li>
                        <li>
                            <router-link to="#">动态</router-link>
                        </li>
                        <li>
                            <router-link to="#">稍后再看</router-link>
                        </li>
                        <li>
                            <router-link to="#">收藏夹</router-link>
                        </li>
                        <li>
                            <router-link to="#">历史</router-link>
                        </li>
                    </ul>
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
            return {
                islogin:false
            }
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
    .appHeader .headerMenu .menuWrapper .menu-con1 ul{
        list-style: none;
        position: relative;
    }
    
    .appHeader .headerMenu .menuWrapper .menu-con1 ul li{
        float: left;
        position: relative;
        text-align: center;
        height: 42px;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .home{
        margin-left: -10px;
        padding-left: 12px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul li a{
        display: block;
        height: 100%;
        padding: 0 8px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .home a{
        padding-left: 20px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .home a i{
        position: absolute;
        display: inline-block;
        width: 17px;
        height:14px;
        top:12px;
        left:10px;
        background-position: -919px -88px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .downland{
        padding: 0 10px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .downland a{
        padding: 0;
    }
    .appHeader .headerMenu .menuWrapper .menu-con1 ul .downland a i{
        display: inline-block;
        width: 16px;
        height:21px;
        background-position: -1371px -1175px;
        vertical-align: middle;
    }
    .appHeader .headerMenu .menuWrapper .menu-con2{
        float: right;
        position: relative;
        width: 58px;
        height: 42px;
        margin-left:8px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con2 a{
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
    .appHeader .headerMenu .menuWrapper .menu-con3{
        float: right;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login{
        list-style: none;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .profile-info{
        position: relative;
        float: left;
        height: 42px;
        width: 58px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .profile-info a{
        height:100%;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .profile-info a .i-face {
        position: absolute;
        left:11px;
        top:0;
        width: 36px;
        height: 36px;
        z-index:20;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .profile-info a .i-face .face{
        width: 100%;
        border-radius:50%;
        vertical-align: middle;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .playpage_history{
        position: relative;
        text-align: center;
        float: left;
        height: 42px;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .no-login .playpage_history a{
        height:100%;
        padding: 0 8px;
    }
        .appHeader .headerMenu .menuWrapper .menu-con3 .login{
        list-style: none;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login .profile-info{
        position: relative;
        float: left;
        height: 42px;
        width: 58px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login .profile-info a{
        height:100%;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login .profile-info a .i-face {
        position: absolute;
        left:11px;
        top:0;
        width: 36px;
        height: 36px;
        z-index:20;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login .profile-info a .i-face .face{
        width: 100%;
        border-radius:50%;
        vertical-align: middle;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login li{
        position: relative;
        text-align: center;
        float: left;
        height: 42px;
        line-height: 42px;
    }
    .appHeader .headerMenu .menuWrapper .menu-con3 .login li a{
        height:100%;
        padding: 0 8px;
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

