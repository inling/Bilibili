<template>
    <ul class="view-video">
        <li class="no-data" v-show="mode1||mode2||mode3">暂时没有新动态了哦!</li>
        <transition name="fade">
            <div v-show="mode1||mode2">
                <video-bar v-for="(item,i) in videos" :key="i" :video="item"></video-bar>
            </div>
            <div v-show="mode3">
                <video-bar2 v-for="(item,i) in videos" :key="i" :video="item"></video-bar2>
            </div>
         </transition>
        <li class="history" v-show="mode1||mode3">
            <div class="history-tag">历史动态</div>
        </li>
        <transition name="fade">
            <div v-show="mode1">
                <video-bar v-for="(item,i) in videos" :key="i" :video="item"></video-bar>
            </div>
            <div v-show="mode3">
                <video-bar2 v-for="(item,i) in videos" :key="i" :video="item"></video-bar2>
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
                mode1:false,
                mode2:true,
                mode3:false,
                mode4:true,
            }
        },
        methods:{

        },
        created() {
        },
        mounted(){
            this.mode1=true;
            this.mode3=true;
        },
        components:{
            videoBar,
            videoBar2
        },
        props:['mode','videos'],
        watch:{
            mode:function(val,oldVal){
                if(val==0){
                    
                }else if(val==1){

                }else if(val==2){
                    
                }
            }
        }
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

    .view-video .small-img{
        display: inline-block;
        width: 40px!important;
        height: 30px;
        background: 50%/cover no-repeat;
        border-radius: 4px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .8s ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
        margin-left:380px;
    }

</style>
