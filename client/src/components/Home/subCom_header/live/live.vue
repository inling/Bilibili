<template>
    <div class="live">
        <div class="hot-live">
            <h3 class="live-title">热门直播</h3>
            <div class="room-list">
                <a-live v-for="(item,i) in livers" :key="i" :liver="item"></a-live>
            </div>
        </div>
        <div class="hot-act">
            <h3 class="live-title">热门活动</h3>
        </div>
    </div>
</template>
<script>
    import aLive from "@/components/Home/subCom_header/live/aLive.vue"
    export default({
        data(){
            return {
                livers:[
                    {face:'img/live/wakeUp.jpg@100w_100h.webp',uname:'梦醒三生梦'},
                    {face:'img/live/anuo.jpg@100w_100h.webp',uname:'阿若サン'},
                    {face:'img/cantWakeUp.jpg@100w_100h.webp',uname:'睡不醒的某某阳'},
                    {face:'img/crazyDog.jpg@100w_100h.webp',uname:'疯狗Katto'},
                    {face:'img/OldBa.jpg@100w_100h.webp',uname:'OldBa1'},
                    {face:'img/mao.jpg@100w_100h.webp',uname:'毛一_'},
                    {face:'img/itch.jpg@100w_100h.webp',uname:'痒局长'},
                    {face:'img/yoursCo.jpg@100w_100h.webp',uname:'你的可桜已上线'},
                    {face:'img/gugu.jpg@100w_100h.webp',uname:'Dae-离咕咕'},
                ]
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            aLive
        },
        props:[]
    })
</script>
<style scoped>
    .live{
        width:504px;
        padding:20px 0 20px 20px;
        border-radius: 0 0 4px 4px;
        box-shadow: 1px 1px 3px rgba(0,0,0,.4);
        background: #fff;
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
    .live .hot-live .room-list{
        font-size:12px;
        margin-top:5px;
        border-right:1px solid #eaeaea;
    }
    
</style>

