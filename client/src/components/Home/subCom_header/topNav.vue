<template>
    <div class="topNav">
        <div class="menuBg"  :style="bgImage"></div>
        <div class="menuMask"></div>
        <div class="menuWrapper bili-wrapper">
            <div class="menu-con1">
                <ul>
                    <li class="home headli" title="主站">
                        <router-link to="#" class="heada"><i class="bili-icon"></i>主站</router-link>
                    </li>
                    <li title="画友" class="headli"><router-link to="#" class="heada">画友</router-link></li>
                    <li title="音频" class="headli"><router-link to="#" class="heada">音频</router-link></li>
                    <li title="游戏中心" class="headli"><router-link to="#" class="heada">游戏中心</router-link></li>
                    <li title="直播" class="headli"><router-link to="#" class="heada">直播</router-link></li>
                    <li title="会员购" class="headli"><router-link to="#" class="heada">会员购</router-link></li>
                    <li title="BML" class="headli"><router-link to="#" class="heada">BML</router-link></li>
                    <li class="downland headli">
                        <router-link to="#" class="heada"><i class="bili-icon"></i>下载APP</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-con2">
                <router-link to="#">投稿</router-link>
            </div>
            <div class="menu-con3">
                <ul class="no-login" v-show="!islogin">
                    <li class="profile-info headli">
                        <router-link to="#">
                            <div class="i-face">
                                <img src="img/header/akari.jpg" alt="" class="face">
                            </div>
                        </router-link>
                    </li>
                    <li class="playpage_history headli">
                        <router-link to="#">历史</router-link>
                    </li>
                </ul>
                <ul class="login" v-show="islogin">
                    <li class="profile-info headli">
                        <router-link to="#" class="heada">
                            <div class="i-face">
                                <img :src="user.iface" alt="" class="face">
                            </div>
                        </router-link>
                    </li>
                    <li class="headli">
                        <router-link to="#" class="heada">大会员</router-link>
                    </li>
                    <li title="消息" class="headli">
                        <router-link to="#" class="heada">消息
                            <div data-v-4d9bc88b="" class="num">{{user.num}}</div>
                        </router-link>
                    </li>
                    <li class="headli">
                        <router-link to="#" class="heada">动态</router-link>
                    </li>
                    <li class="headli">
                        <router-link to="#" class="heada">稍后再看</router-link>
                    </li>
                    <li class="headli">
                        <router-link to="#" class="heada">收藏夹</router-link>
                    </li>
                    <li class="headli">
                        <router-link to="#" class="heada">历史</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default({
        data(){
            return {         
            }
        },
        methods:{

        },
        created(){

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
        z-index:200;
        height: 42px;
    }
    .topNav a.heada{
        display: block;
        height: 100%;
        padding: 0 8px;
    }
    .topNav li.headli{
        float: left;
        position: relative;
        text-align: center;
        height: 42px;
        line-height: 42px;
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
    .topNav .menuWrapper .menu-con1 ul{
        position: relative;
    }
    .topNav .menuWrapper .menu-con1 ul .home{
        margin-left: -10px;
        padding-left: 12px;
    }
    .topNav .menuWrapper .menu-con1 ul .home a{
        padding-left: 20px;
    }
    .topNav .menuWrapper .menu-con1 ul .home a i{
        position: absolute;
        display: inline-block;
        width: 17px;
        height:14px;
        top:12px;
        left:10px;
        background-position: -919px -88px;
    }
    .topNav .menuWrapper .menu-con1 ul .downland{
        padding: 0 10px;
    }
    .topNav .menuWrapper .menu-con1 ul .downland a{
        padding: 0;
    }
    .topNav .menuWrapper .menu-con1 ul .downland a i{
        display: inline-block;
        width: 16px;
        height:21px;
        background-position: -1371px -1175px;
        vertical-align: middle;
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
    .topNav .menuWrapper .menu-con3 .no-login{
        list-style: none;
    }
    .topNav .menuWrapper .menu-con3 .no-login .profile-info{
        position: relative;
        float: left;
        height: 42px;
        width: 58px;
    }
    .topNav .menuWrapper .menu-con3 .no-login .profile-info a{
        height:100%;
    }
    .topNav .menuWrapper .menu-con3 .no-login .profile-info a .i-face {
        position: absolute;
        left:11px;
        top:0;
        width: 36px;
        height: 36px;
        z-index:20;
        line-height: 42px;
    }
    .topNav .menuWrapper .menu-con3 .no-login .profile-info a .i-face .face{
        width: 100%;
        border-radius:50%;
        vertical-align: middle;
    }
    .topNav .menuWrapper .menu-con3 .no-login .playpage_history{
        position: relative;
        text-align: center;
        float: left;
        height: 42px;
        line-height: 42px;
    }
    .topNav .menuWrapper .menu-con3 .no-login .playpage_history a{
        height:100%;
        padding: 0 8px;
    }
    .topNav .menuWrapper .menu-con3 .login .profile-info{
        position: relative;
        float: left;
        height: 42px;
        width: 58px;
    }
    .topNav .menuWrapper .menu-con3 .login .profile-info a{
        height:100%;
    }
    .topNav .menuWrapper .menu-con3 .login .profile-info a .i-face {
        position: absolute;
        left:11px;
        top:0;
        width: 36px;
        height: 36px;
        z-index:20;
        line-height: 42px;
    }
    .topNav .menuWrapper .menu-con3 .login .profile-info a .i-face .face{
        width: 100%;
        border-radius:50%;
        vertical-align: middle;
    }
    .topNav .menuWrapper .menu-con3 .login li a .num{
        height: 14px;
        line-height: 12px;
        color: #fff;
        background-color: #f25d8e;
        border-radius: 10px;
        position: absolute;
        padding: 1px 2px;
        font-size: 12px;
        top: 1px;
        right: -4px;
        min-width: 20px;
        z-index: 30;
        text-align: center;
    }
</style>

