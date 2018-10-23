<template>
    <div class="dynamic">
        <div class="dynamic-m">
            <div class="dyn_menu">
                <div class="menu">
                    <ul>
                        <li class="on" @click="liClick(0)">视频</li>
                        <li @click="liClick(1)">直播</li>
                        <li @click="liClick(2)">专栏</li>
                    </ul>
                    <div class="line" :style="left[index]"></div>
                </div>            
            </div>
            <div class="dyn_wrapper" :style="height[index]">
                <component :is="coms[index]"></component>
            </div>
            <div class="dyn_bottom"></div>
        </div>
    </div>
</template>

<script>
    import viewVideo from "@/components/Home/subCom_header/dynamic/view-video.vue"
    import viewLive from "@/components/Home/subCom_header/dynamic/view-live.vue"
    import viewSpec from "@/components/Home/subCom_header/dynamic/view-spec.vue"
    export default({
        data(){
            return{
                index:0,
                left:[{left:'6px'},{left:'50px'},{left:'94px'}],
                coms:['viewVideo','viewLive','viewSpec'],
                height:[{height:'304px'},{height:'120px'},{height:'304px'}]
            }
        },
        methods:{
            liClick(n){
                this.index=n;
                this.setColor(n);
            },
            setColor(n){
                var lis=document.querySelectorAll('.dynamic .dynamic-m .dyn_menu .menu ul li');
                for(var i=0;i<lis.length;i++){
                    lis[i].className='';
                }
                n++;
                var nowli=document.querySelector('.dynamic .dynamic-m .dyn_menu .menu ul li:nth-child('+n+')');
                nowli.className='on'
            }
        },
        created() {
            
        },
        components:{
            viewVideo,
            viewLive,
            viewSpec
        },
        props:[]
    })
</script>

<style>
    .dynamic{
        background:transparent;
        width:380px;
        padding:0 10px 10px;
        color:#666;
    }
    .dynamic .dynamic-m{
        width: 362px;
        border-radius:0,0,4px,4px;
        background-color:#fff;
        box-shadow:0 2px 4px rgba(0,0,0,.16);
        border:1px solid #e5e9ef;
        text-align: center;
        font-size:12px;
    }
    .dynamic .dynamic-m .dyn_menu{
        display: block;
        position: relative;
        text-align: center;
        padding:16px 0 10px;
        line-height: normal;
    }
    .dynamic .dynamic-m .dyn_menu .menu{
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-align:center;
    }
    .dynamic .dynamic-m .dyn_menu li{
        height:30px;
        line-height:28px;
        float:left;
        cursor:pointer;
        padding:0 5px;
        list-style-type: none;
        margin-left:10px;
    }
    .dynamic .dynamic-m .dyn_menu li.on{
        color:#00a1d6;
    }
    .dynamic .dynamic-m .dyn_menu li:first-child{
        margin-left:0;
    }
    .dynamic .dynamic-m .dyn_menu .line{
        position: absolute;
        left: 0;
        bottom: 0;
        background: #00a1d6;
        height: 1px;
        border: none;
        width: 24px;
        margin: 0;
    }
    .dynamic .dynamic-m .dyn_menu .menu .line::before{
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
        width: 0;
        height: 0;
        border: 3px dashed #00a1d6;
        border-bottom-style: solid;
        border-top: none;
        border-left-color: transparent;
        border-right-color: transparent;
    }
    .dynamic .dynamic-m .dyn_wrapper{
        height: 304px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #fff;
        position: relative;
        transition: height .5s;
    }
</style>
