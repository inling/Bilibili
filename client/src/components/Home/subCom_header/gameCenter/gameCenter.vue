<template>
    <div class="gameCenter">
        <div class="left">
            <banner :bigAdImage="gameCenter.bigAd.bigAdImage" :bigAdImageText="gameCenter.bigAd.bigAdImageText"></banner>
            <div class="app-g">
                <a-app v-for="(item,i) in gameCenter.smallAds" :key="i" :smallAdImage="item.smallAdImage" :smallAdImageText="item.smallAdImageText"></a-app>
            </div>
        </div>
        <div class="right">
            <router-link to="#" class="bbs">游戏论坛</router-link>
            <div class="newGamePrv">
                <game-prv-item v-for="(item,i) in gameCenter.gamePrvs" :key="i" :gamePrv="item"></game-prv-item>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from "@/components/Home/subCom_header/gameCenter/banner.vue"
    import aApp from "@/components/Home/subCom_header/gameCenter/aApp.vue"
    import gamePrvItem from "@/components/Home/subCom_header/gameCenter/gamePrvItem.vue"
    export default({
        data(){
            return {
                gameCenter:{}
            }
        },
        methods:{
            getGameCenter(){
                this.$store.dispatch('homeBar/getGameCenter');
                this.gameCenter=this.$store.state.homeBar.gameCenter;
            }
        },
        created() {
            this.getGameCenter();
        },
        components:{
            banner,
            aApp,
            gamePrvItem
        },
        props:[]
    })
</script>

<style>
    .gameCenter{
        width:466px;
        height: 256px;
        border-radius:0 0 4px 4px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.4);
        position: relative;
        background: #fff;
        z-index:3;
    }
    .gameCenter .left{
        width:265px;
        margin:12px 0 0;
        float: left;
    }
    .gameCenter .left .app-g{
        margin-top:6px;
    }

    .gameCenter .right{
        float: left;
        width:201px;
        min-height:234px;
        margin:12px 0 0 0;
        background: url(/img/AppGame/line.png) no-repeat;
    }
    .gameCenter .right .bbs{
        float: right;
        margin-top: 8px;
        margin-right: 12px;
        font-size: 12px;
        color:#00a1d6;
        display: inline-block;
        line-height: 1;
    }
    .gameCenter .right .newGamePrv{
        padding:35px 0 0 6px;
        background: url(/img/AppGame/title.png) no-repeat;
    }
</style>

