<template>
    <ul class="view-video">
        <li class="no-data" v-show="(mode1||mode2||mode3)&&hasLast">暂时没有新动态了哦!</li>
        <transition-group name="fade" >
            <div v-show="mode1&&!hasLast" key="1">
                <video-bar v-for="(item,i) in videos_last" :key="i" :item="item"></video-bar>
            </div>
            <div v-show="mode2&&!hasLast" key="2">
                <video-bar v-for="(item,i) in live" :key="i" :item="item"></video-bar>
            </div>
            <div v-show="mode3&&!hasLast" key="3">
                <video-bar2 v-for="(item,i) in only_last" :key="i" :item="item"></video-bar2>
            </div>
         </transition-group>
        <li class="history" v-show="!mode2">
            <div class="history-tag">历史动态</div>
        </li>
        <transition-group name="fade">
            <div v-show="mode1"  key="4">
                <video-bar v-for="(item,i) in videos_history" :key="i" :item="item"></video-bar>
            </div>
            <div v-show="mode3"  key="5">
                <video-bar2 v-for="(item,i) in only_history" :key="i" :item="item"></video-bar2>
            </div>
         </transition-group>
    </ul>
</template>
<script>
    import videoBar from "@/components/Home/subCom_header/dynamic/video-bar.vue";
    import videoBar2 from "@/components/Home/subCom_header/dynamic/video-bar2.vue";
    export default({
        data(){
            return {
                mode1:true,
                mode2:false,
                mode3:false,
                hasLast:false
            }
        },
        methods:{
            
        },
        created() {
        },
        mounted(){
            if(this.videos_last.length==0) 
                this.hasLast=true;
            else
                this.hasLast=false;
        },
        components:{
            videoBar,
            videoBar2
        },
        props:['mode','videos_history','videos_last','live','only_history','only_last'],
        watch:{
            mode:function(val,oldVal){
                if(val==1){
                    this.mode1=true;
                    this.mode2=false;
                    this.mode3=false;
                    if(this.videos_last.length==0) 
                        this.hasLast=true;
                    else
                        this.hasLast=false;
                }else if(val==2){
                    this.mode1=false;
                    this.mode2=true;
                    this.mode3=false;
                    if(this.live.length==0) 
                        this.hasLast=true;
                    else
                        this.hasLast=false;
                }else if(val==3){
                    this.mode1=false;
                    this.mode2=false;
                    this.mode3=true;
                    if(this.only_last.length==0) 
                        this.hasLast=true;
                    else
                        this.hasLast=false;
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
    .fade-enter-active{
        transition: margin .8s cubic-bezier(.22,.58,.12,.98),opacity .8s ease;
    }
    .fade-enter{
        opacity: 0;
        margin-left:380px;
    }

</style>
