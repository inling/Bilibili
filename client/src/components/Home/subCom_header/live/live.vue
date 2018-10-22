<template>
    <div class="live clear">
        <div class="hot-live">
            <h3 class="live-title">热门直播：</h3>
            <div class="liver-list">
                <a-live v-for="(item,i) in livers" :key="i" :liver="item"></a-live>
            </div>
        </div>
        <div class="hot-act">
            <h3 class="live-title">热门活动：</h3>
            <div class="act-list">
                <a-act v-for="(item,i) in acts" :key="i" :act="item"></a-act>
            </div>
        </div>
    </div>
</template>
<script>
    import aLive from "@/components/Home/subCom_header/live/aLive.vue"
    import aAct from "@/components/Home/subCom_header/live/aAct.vue"
    export default({
        data(){
            return {
                livers:[
                    {face:'img/live/wakeUp.jpg@100w_100h.webp',uname:'梦醒三生梦'},
                    {face:'img/live/anuo.jpg@100w_100h.webp',uname:'阿若サン'},
                    {face:'img/live/cantWakeUp.jpg@100w_100h.webp',uname:'睡不醒的某某阳'},
                    {face:'img/live/crazyDog.jpg@100w_100h.webp',uname:'疯狗Katto'},
                    {face:'img/live/OldBa.jpg@100w_100h.webp',uname:'OldBa1'},
                    {face:'img/live/mao.jpg@100w_100h.webp',uname:'毛一_'},
                    //{face:'img/live/itch.jpg@100w_100h.webp',uname:'痒局长'},
                    //{face:'img/live/yoursCo.jpg@100w_100h.webp',uname:'你的可桜已上线'},
                    //{face:'img/live/gugu.jpg@100w_100h.webp',uname:'Dae-离咕咕'},
                ],
                acts:[
                    {url_img:"img/live/king.jpg"},
                    {url_img:"img/live/bls.jpg"}
                ]
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            aLive,
            aAct
        },
        props:[]
    })
</script>
<style scoped>
    .live{
        width:524px;
        padding:20px 0 20px 20px;
        border-radius: 0 0 4px 4px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.4);
        background: #fff;
        text-align: left;
    }
    .live .live-title{
        font-size:14px;
        color:#ea759f;
        margin:0;
    }
    .live .hot-live{
        float: left;
        width:254px;
    }
    .live .hot-live .liver-list{
        font-size:12px;
        margin-top:5px;
        border-right:1px solid #eaeaea;
        line-height: normal;
    }
    
    .live .hot-act{
        float: left;
        width: 229px;
        padding-left: 21px;
    }

</style>

