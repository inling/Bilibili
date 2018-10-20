<template>
    <div class="gameCenter">
        <div class="left">
            <banner :bigAdImage="bigAd.bigAdImage" :bigAdImageText="bigAd.bigAdImageText"></banner>
            <div class="app-g">
                <a-app v-for="(item,i) in smallAds" :key="i" :smallAdImage="item.smallAdImage" :smallAdImageText="item.smallAdImageText"></a-app>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    import banner from "@/components/Home/subCom_header/gameCenter/banner.vue"
    import aApp from "@/components/Home/subCom_header/gameCenter/aApp.vue"
    export default({
        data(){
            return {
                bigAd:{
                    bigAdImage:'img/AppGame/FateGo.jpg',
                    bigAdImageText:'命运-冠位指定（Fate/GO）'
                },
                smallAds:[
                    {smallAdImage:'img/AppGame/fangzhou.png',smallAdImageText:'方舟指令'},
                    {smallAdImage:'img/AppGame/bilanhangxian.png',smallAdImageText:'碧蓝航线'},
                    {smallAdImage:'img/AppGame/yuezhan.jpg',smallAdImageText:'约战：精'},
                ]
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            banner,
            aApp
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
    }
    .gameCenter .left{
        width:265px;
        margin:12px 0 0;
        float: left;
    }
    .gameCenter .left .app-g{
        margin-top:6px;
    }
</style>

