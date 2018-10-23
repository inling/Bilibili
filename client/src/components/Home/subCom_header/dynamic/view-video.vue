<template>
    <ul class="view-video">
        <li class="no-data" @mouseover="isShow=true">暂时没有新动态了哦!</li>
        <span></span>
        <li class="history">
            <div class="history-tag">历史动态</div>
        </li>
        <transition name="fade">
            <div v-if="isShow">
                <video-bar v-for="(item,i) in videos" :key="i" :video="item"></video-bar>
            </div>
         </transition>
    </ul>
</template>
<script>
    import videoBar from "@/components/Home/subCom_header/dynamic/video-bar.vue";
    import videoBar2 from "@/components/Home/subCom_header/dynamic/video-bar2.vue";
    export default({
        data(){
            return {
                isShow:false,
                videos:[
                    {smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife2.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife2.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife2.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
                    {smallImg:'background-image:url(/img/dyna/japanlife2.jpg@80w_60h.webp)'}
                ]
            }
        },
        methods:{

        },
        created() {
        },
        mounted(){
            this.isShow=true;
        },
        components:{
            videoBar,
            videoBar2
        },
        props:[]
    })
</script>

<style>
    .view-video{
        background-color:#fff;
        position: relative;
        line-height: normal;
        text-align: center;
    }
    .view-video li{
        width: auto;
        zoom: 1;
        margin-left: 0;
        opacity: 1;
        padding: 6px 12px 10px;
        border: none;
        float: none;
        position: relative;
    }
    .view-video li.no-data{
        min-height: 30px;
        line-height: 18px;
        overflow: hidden;
        color: #99a2aa;
    }

    .view-video li.history{
        height: 0;
        margin: 20px;
        padding: 0;
        border-top: 1px solid #e5e9ef;
    }
    .view-video li.history .history-tag{
        position: absolute;
        z-index: 1;
        left: 50%;
        top: -11px;
        height: 20px;
        line-height: 20px;
        width: 64px;
        margin-left: -32px;
        color: #99a2aa;
        background-color: #fff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .8s ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
        margin-left:380px;
    }

</style>
