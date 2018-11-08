<template>
    <div class="spread-module">
        <router-link to="#">
            <div class="pic"   @mousemove="setMousemove($event)">
                <div class="lazy-img">
                    <img :src="spreadCard.src" alt="">
                </div>
                <div class="cover-preview-module">
                    <div class="cover" :style="coverStyle">
                    </div>
                    <div class="progress-bar">
                        <span :style="progress"></span>
                    </div>
                </div>
                <div class="mask-video"></div>
                <span class="dur">{{spreadCard.dur}}</span>
                <div class="watch-later-trigger w-later"></div>
            </div>
            <p :title="spreadCard.title" class="t">{{spreadCard.title}}</p>
        </router-link>
    </div>
</template>

<script>
    export default({
        data(){
            return {
                coverStyle:{
                    'background-image': '',
                    'background-position': '-320px -90px',
                    'background-size': '1600px'
                },
                axios:{
                    x:0,
                    y:0
                },
                progress:`width:0%`
            }
        },
        methods:{
            setMousemove(e){
                if(e.target.className.indexOf('mask-video')!=-1){
                    var cx=e.offsetX;
                    this.progress=`width:${cx*(100/160)}%`

                    
                    //视频
                    var picNum=this.spreadCard.m;
                    var line=Math.ceil(picNum/10);
                    picNum-=line;
                    var oneTimeCX=Math.floor(160/picNum);

                    console.log(picNum*160)
                    var fen=Math.ceil(cx/oneTimeCX);

                        var x=160*fen;
                        var beishu=Math.floor(x/1600);
                        var y=beishu*90;
                        if(x>=1600)
                            x=x-Math.floor(x/1600)*1600;
                        this.coverStyle['background-position']=`-${x}px -${y}px`
                    

                }
            }
        },
        created() {
            
        },
        mounted() {
            this.coverStyle['background-image']=`url(${this.spreadCard.bsrc})`
        },
        components:{

        },
        props:['spreadCard']
    })
</script>

<style>
    .spread-module{
        float: left;
        margin:0 20px 20px 0;
    }
    .spread-module{
        position: relative;
        width: 160px;
        height: 148px;
        font-size: 12px;
        overflow: hidden;
    }
    .spread-module a .pic{
        position: relative;
        width: 160px;
        height: 100px;
        display: block;
        overflow: hidden;
        text-align: center;
        border-radius: 4px;
    } 
    .spread-module a .pic .lazy-img{
        background: url(/img/img_loading.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
    } 
    .spread-module a .pic .lazy-img img{
        margin: 0 auto;
        outline: 0;
        display: block;
        width: 100%;
        height: 100%;
    } 
    .spread-module .mask-video{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.2);
        transition: opacity .3s;
    }
    .spread-module .t{
        padding-top: 8px;
        height: 48px;
        line-height: 20px;
        transition: all .2s linear;
        color: #222;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
    }
    .spread-module:hover .mask-video{
        opacity: 1;
    }

    .spread-module .dur{
        opacity: 0;
        position: absolute;
        bottom: 2px;
        left: 6px;
        color: #fff;
        height: 12px;
        line-height: 12px;
        padding: 0 5px 1px 0;
        transition: all .3s;
    }
    .spread-module:hover .dur{
        opacity: 1;
    }
    .spread-module .pic:hover .w-later{
        display: block;
    }


    .spread-module .cover-preview-module{
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: opacity .3s;
    }
    .spread-module .pic:hover .cover-preview-module{
        opacity: 1;
    }
    .spread-module .cover-preview-module .cover{
        position: absolute;
        left: 0;
        top: 7px;
        height: 98px;
        width: 100%;
        margin-top: 2px;
    }
    .spread-module .cover-preview-module .progress-bar{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 10px;
        border-color: #000;
        border-style: solid;
        border-width: 4px 8px;
        background: #444;
        box-sizing: border-box;
    }
    .spread-module .cover-preview-module .progress-bar span{
        display: block;
        background: #fff;
        height: 2px;
    }
  

    .watch-later-trigger {
        display: none;
        width: 22px;
        height: 22px;
        position: absolute;
        right: 6px;
        bottom: 4px;
        cursor: pointer;
        background-image: url(/img/order.png);
    }
</style>
