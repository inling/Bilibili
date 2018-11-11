<template>
            <div class="player-box" v-show="isClose">
                <div class="bilibili-player relative">
                    <div class="bilibili-player-area">
                        <!--头部-->
                        <div class="bilibili-player-area-header" @mousedown="setMousedown($event)" @mouseup="setMouseup">
                            <div class="bilibili-player-area-header-box">
                                <div class="bilibili-video-title">
                                    【谢拉】蜜月Un・Deux・Trois【Overidea】
                                </div>
                                <div class="bilibli-player-close" @click="close">
                                   
                                </div>
                            </div>
                        </div>
                        <!--主体-->
                        <div class="bilibili-player-area-wrap">

                            <!--视频状态-->
                            <div class="bilibili-player-video-state" v-show="!isPlay">
                                <div class="bilibili-player-video-state-play">
                                    <span class="bp-svgicon">
                                        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M52.352 13.5c4.837 0 8.707 4.32 8.647 9.72v21.06C61 49.62 57.128 54 52.29 54h-2.479c0 1.681-1.452 3-3.206 3S43.4 55.62 43.4 54H20.841c0 1.681-1.452 3-3.204 3-1.756 0-3.206-1.38-3.206-3h-2.722C6.87 54 3 49.68 3 44.28V23.22c0-5.4 3.87-9.72 8.709-9.72h11.25l-4.78-4.44c-.725-.661-.725-1.8 0-2.52.424-.36.908-.54 1.391-.54.546 0 1.029.18 1.392.54l7.5 6.96h7.318l7.5-6.96c.422-.36.907-.54 1.39-.54.544 0 1.029.18 1.392.54.725.659.725 1.8 0 2.52l-4.78 4.44h11.07zM26.527 45.54l17.418-10.08c1.45-.901 1.45-2.221 0-3.122L26.527 22.2c-1.452-.84-2.662-.12-2.662 1.56v20.22c0 1.74 1.21 2.4 2.662 1.561z" id="path-play-state"></path><filter x="-11.2%" y="-10.8%" width="122.4%" height="125.5%" filterUnits="objectBoundingBox" id="filter-play-state"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#filter-play-state)" xlink:href="#path-play-state"></use><use fill-opacity=".7" fill="#FFF" xlink:href="#path-play-state"></use><path d="M26.527 45.541c-1.452.84-2.662.18-2.662-1.56V23.76c0-1.68 1.21-2.4 2.662-1.56L43.945 32.34c1.45.9 1.45 2.22 0 3.121L26.527 45.541z" fill="#000" opacity=".06"></path></g></svg>
                                    </span>
                                </div>
                                <img class="bilibili-player-video-state-buff" src="//static.hdslb.com/images/loading.gif">
                            </div>
                            <!--video-->
                            <div class="bilibili-player-video" @mousemove="setScreenMove" @mouseout="setWrapMoveOut">
                                <video src="video/61869533-1-6.mp4"  @click="setPlayState($event)"></video>
                            </div>

                            <!--video控制条-->
                            <div class="bilibili-player-video-control-wrap" @mouseover="setWrapMoveOver" @mouseout="setWrapMoveOut">
                                <div class="bilibili-player-video-control">
                                    <div class="bilibili-player-video-control-top"  :class="{on:bottomBar}" >
                                        <div class="bilibili-player-video-progress">
                                            <div class="bilibili-player-video-progress-slider bui bui-slider" id="proBar">
                                                <div class="bui-track bui-track-autohide-thumb bui-track-video-progress">
                                                    <div class="bui-bar-wrap">
                                                        <div class="bui-bar bui-bar-buffer" style="transform: scaleX(0.410566);"></div>
                                                        <div class="bui-bar bui-bar-normal" style="transform: scaleX(0.0869967);"></div>
                                                    </div>

                                                    <div class="bui-thumb" style="transform: translateX(52.024px);">
                                                        <div class="bui-thumb-dot" style="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M16.118 3.667h.382a3.667 3.667 0 0 1 3.667 3.667v7.333a3.667 3.667 0 0 1-3.667 3.667h-11a3.667 3.667 0 0 1-3.667-3.667V7.333A3.667 3.667 0 0 1 5.5 3.666h.382L4.95 2.053a1.1 1.1 0 0 1 1.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 0 1 1.906 1.1l-.934 1.614z" fill="#333"></path><path d="M5.561 5.194h10.878a2.2 2.2 0 0 1 2.2 2.2v7.211a2.2 2.2 0 0 1-2.2 2.2H5.561a2.2 2.2 0 0 1-2.2-2.2V7.394a2.2 2.2 0 0 1 2.2-2.2z" fill="#fff"></path><path d="M6.967 8.556a1.1 1.1 0 0 1 1.1 1.1v2.689a1.1 1.1 0 1 1-2.2 0V9.656a1.1 1.1 0 0 1 1.1-1.1zM15.033 8.556a1.1 1.1 0 0 1 1.1 1.1v2.689a1.1 1.1 0 1 1-2.2 0V9.656a1.1 1.1 0 0 1 1.1-1.1z" fill="#333"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bilibili-player-video-progress-detail" style="display:block">
                                                <!--中间图-->
                                                <div class="bilibili-player-video-progress-detail-img" style="margin-left: -80px; width: 160px; height: 90px; background-image: url(/img/video/61869533.jpg@.webp); background-position: -640px -180px;"></div>
                                                <!--时间-->
                                                <div class="bilibili-player-video-progress-detail-time" style="margin-left: -22px;">03:13</div>
                                                <div class="bilibili-player-video-progress-detail-sign">
                                                    <div class="bilibili-player-video-progress-detail-sign-down"></div>
                                                    <div class="bilibili-player-video-progress-detail-sign-up"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bilibili-player-video-control-bottom" :class="{on:bottomBar}">
                                        <div class="bilibili-player-video-control-bottom-left">
                                            <div class="bilibili-player-video-btn bilibili-player-video-btn-start video-state-pause">
                                                <span class="bilibili-player-iconfont bilibili-player-iconfont-start">
                                                    <span class="bp-svgicon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span class="bilibili-player-iconfont bilibili-player-iconfont-pause">
                                                    <span class="bp-svgicon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                                            <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>

                                            <!--时间-->
                                            <div class="bilibili-player-video-time" name="time_textarea">
                                                <input class="bilibili-player-video-time-seek" value="00:00" style="display: none;">
                                                <div class="bilibili-player-video-time-wrap" name="time_textarea" style="display: block;">
                                                    <span class="bilibili-player-video-time-now" name="time_textarea">01:19</span>
                                                    <span class="bilibili-player-video-divider" name="time_textarea">/</span>
                                                    <span class="bilibili-player-video-time-total" name="time_textarea">04:16</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>



                        </div>
                        <!--底部导航-->
                        <div class="bilibili-player-video-bottom-area">
                            <div class="bilibili-player-video-sendbar">
                                <div class="bilibili-player-video-info">
                                    <div class="bilibili-player-video-info-people">
                                        <span class="bilibili-player-video-info-people-number">56</span>
                                        <span class="bilibili-player-video-info-people-text">人正在看，</span>
                                    </div>
                                    <div class="bilibili-player-video-info-danmaku">
                                        <span class="bilibili-player-video-info-danmaku-number">533</span>
                                        <span class="bilibili-player-video-info-danmaku-text">条弹幕</span>
                                    </div>
                                </div>

                                <div class="bilibili-player-video-danmaku-root">
                                    <!--开关弹幕-->
                                    <div class="bilibili-player-video-danmaku-switch bui bui-switch">
                                        <input class="bui-checkbox" type="checkbox" checked="" @click="setDanmuIsOpen">
                                        <span class="bui-body">
                                            <span class="bui-dot">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                                        <path d="M1.311 3.759l-.153 1.438h2.186c0 1.832-.066 3.056-.175 3.674-.131.618-.688.959-1.683 1.023-.284 0-.568-.021-.874-.043L.317 8.818c.284.032.59.053.896.053.546 0 .852-.17.929-.511.077-.341.12-1.076.12-2.204H0l.306-3.344h1.847V1.427H.098V.479h3.18v3.28H1.311zM4 1.747h1.311A8.095 8.095 0 0 0 4.492.426L5.53.085c.306.426.579.873.809 1.363l-.689.299h1.508c.306-.544.569-1.129.809-1.747l1.082.373c-.219.511-.47.969-.743 1.374h1.268V6.23H7.322v.82H10v1.044H7.322V10H6.208V8.094H3.607V7.05h2.601v-.82H4V1.747zm4.568 3.557v-.831H7.322v.831h1.246zm-2.36 0v-.831H5.016v.831h1.192zM5.016 3.557h1.191v-.873H5.016v.873zm2.306-.873v.873h1.246v-.873H7.322z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </span>
                                        <span class="choose_danmaku">{{danmuIsOpen?'打开弹幕':'关闭弹幕'}}</span>
                                    </div>
                                    <!--设置菜单-->
                                    <div class="bilibili-player-video-danmaku-setting">
                                        <span class="bp-svgicon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M16.5 8c1.289 0 2.49.375 3.5 1.022V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.022A6.5 6.5 0 0 1 16.5 8zM7 13H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm2-4H5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></path><path d="M20.587 13.696l-.787-.131a3.503 3.503 0 0 0-.593-1.051l.301-.804a.46.46 0 0 0-.21-.56l-1.005-.581a.52.52 0 0 0-.656.113l-.499.607a3.53 3.53 0 0 0-1.276 0l-.499-.607a.52.52 0 0 0-.656-.113l-1.005.581a.46.46 0 0 0-.21.56l.301.804c-.254.31-.456.665-.593 1.051l-.787.131a.48.48 0 0 0-.413.465v1.209a.48.48 0 0 0 .413.465l.811.135c.144.382.353.733.614 1.038l-.292.78a.46.46 0 0 0 .21.56l1.005.581a.52.52 0 0 0 .656-.113l.515-.626a3.549 3.549 0 0 0 1.136 0l.515.626a.52.52 0 0 0 .656.113l1.005-.581a.46.46 0 0 0 .21-.56l-.292-.78c.261-.305.47-.656.614-1.038l.811-.135A.48.48 0 0 0 21 15.37v-1.209a.48.48 0 0 0-.413-.465zM16.5 16.057a1.29 1.29 0 1 1 .002-2.582 1.29 1.29 0 0 1-.002 2.582z"></path></svg>
                                        </span>
                                        <div class="bilibili-player-video-danmaku-setting-wrap">
                                            <!--弹幕设置面板-->
                                        </div>
                                    </div>
                                    <!--发送弹幕-->
                                    <div class="bilibili-player-video-inputbar focus">
                                        <div class="bilibili-player-video-inputbar-wrap">
                                            <!--字体设置-->
                                            <div class="bilibili-player-video-btn bilibili-player-video-btn-danmaku relative">
                                                <span class="bilibili-player-iconfont bilibili-player-iconfont-danmakutype"><span class="bp-svgicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M17 16H5c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM6.96 15c.39 0 .74-.24.89-.6l.65-1.6h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C11.87 4.27 11.46 4 11 4s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34zM11 5.98L12.87 11H9.13L11 5.98z"></path></svg></span></span>

                                                <div class="bilibili-player-mode-selection-container">

                                                    <!--


                                                        
                                                        字体设置面板
                                                        
                                                        
                                                        
                                                    -->

                                                </div>
                                            </div>

                                            <!--输入框-->
                                            <div class="bilibili-player-video-danmaku-wrap" style="display: none;">发个友善的弹幕见证当下</div>
                                            <input class="bilibili-player-video-danmaku-input" placeholder="发个弹幕见证当下" style="display: inline-block;">
                                            <div class="bilibili-player-video-hint" style="display: block;">
                                                <router-link to="#" target="_blank">
                                                    <span>弹幕礼仪 </span>
                                                    <span class="bp-svgicon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                            <path d="M9.188 7.999l-3.359 3.359a.75.75 0 1 0 1.061 1.061l3.889-3.889a.75.75 0 0 0 0-1.061L6.89 3.58a.75.75 0 1 0-1.061 1.061l3.359 3.358z"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="bilibili-player-video-btn-send bui bui-button bui-button-blue">发送</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        data(){
            return {
                isPlay:false,
                danmuIsOpen:false,
                bottomBar:true,
                bottomBarTimer:null,
                boxMovePara:{
                    canMove:false,
                    offsetX:0,
                    offsetY:0
                },
                isClose:true
            }
        },
        methods:{
            setPlayState(e){
                var video=e.target;
                if(this.isPlay){
                    video.pause();
                    this.isPlay=false;
                }              
                else{
                    video.play();
                    this.isPlay=true;
                }                 
            },
            setDanmuIsOpen(){
                var check=document.querySelector('.bui-checkbox');
                if(check.checked){
                    this.danmuIsOpen=false;
                }else{
                    this.danmuIsOpen=true;
                }
            },
            setScreenMove(){
                if(this.bottomBarTimer){
                    clearTimeout(this.bottomBarTimer)
                }
                this.bottomBar=true;
                var self=this;
                this.bottomBarTimer=setTimeout(()=>{
                    self.bottomBar=false;
                },1000)
            },
            setWrapMoveOver(){
                this.bottomBar=true;
            },
            setWrapMoveOut(){
                this.bottomBar=false;
            },

            setMousedown(e){
                this.boxMovePara.canMove=true;
                this.boxMovePara.offsetX=e.offsetX;
                this.boxMovePara.offsetY=e.offsetY;
                window.addEventListener('mousemove',this.boxMove)
            },
            setMouseup(){
                this.boxMovePara.canMove=false;
                window.removeEventListener('mousemove',this.boxMove)
            },
            boxMove(){
                if(this.boxMovePara.canMove){
                    var top=window.event.clientY-this.boxMovePara.offsetY+document.documentElement.scrollTop;
                    var left=window.event.clientX-this.boxMovePara.offsetX;
                    var box=document.querySelector('.player-box')
                    box.style.top=`${top}px`;
                    box.style.left=`${left}px`;
                }
            },
            close(){
                this.isClose=false;
                document.queryCommandValue('.bilibili-player-video>video').stop();


                
            }
        },
        created(){
            
        },
        mounted(){
            var playerbox=document.querySelector('.player-box');
            var top=window.innerHeight/2-playerbox.clientHeight/2+document.documentElement.scrollTop;
            var left=window.innerWidth/2-playerbox.clientWidth/2+document.documentElement.scrollLeft;
            if(top<0) top=0;
            if(left<0) left=0;
            playerbox.style.top=`${top}px`;
            playerbox.style.left=`${left}px`;


        }
    }
</script>

<style>
    .player-box{
        height: 100%;
        box-shadow:1px 1px 5px #333;
        border-radius:5px;
        overflow: hidden;
        width: 638px;
        height: 435px;
        position: absolute;
        z-index:100000;
    }
    .bilibli-player-close{
        position: absolute;
        right:12px;
        top:7px;
        height:18px;
        width: 18px;
        background-image: url(/img/close2.png);
        background-size: cover;
        cursor: pointer;
    }
    .bilibli-player-close:hover{
        background-image: url(/img/close1.png) !important;
    }
    .relative{
        position: relative;
    }

    .bilibili-player{
        display: flex;
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 4px;
        text-align: left;
        box-shadow: 0 0 8px #e5e9ef;
        white-space: nowrap;
        zoom: 1;
        line-height: 1;
    }
    .bilibili-player .bilibili-player-area{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        position: relative;
        height: 100%;
        width: 100%;
        pointer-events: auto;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap{
        position: relative;
        display: flex;
        flex-grow: 1;
        min-height: 0;
        z-index: 66;
        overflow: hidden;
        user-select: none;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video{
        display: flex;
        flex-grow: 1;
        position: relative;
        z-index: 10;
        background: #000;
        cursor: pointer;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video video{
        display: block;
        width: 100%;
        max-height: 100%;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-state{
        display: block;
        width: 64px;
        height: 64px;
        position: absolute;
        cursor: pointer;
        z-index: 67;
        right: 34px;
        bottom: 50px;
        pointer-events: none;
    }
    .bilibili-player-video-state-buff {
        display: none;
    }
/*
    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-state .bilibili-player-video-state-play{
        margin-top: 10px;
    }

*/
    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-control-wrap{
        z-index: 70;
        padding: 0 12px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-control-wrap .bilibili-player-video-control{
        display: flex;
        flex-shrink: 0;
        position: relative;
        z-index: 71;
        height: 36px;
        line-height: 36px;
        zoom: 1;
    }


    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-control-wrap .bilibili-player-video-control .bilibili-player-video-control-top{
        position: absolute;
        left: -12px;
        right: -12px;
        bottom: -6px;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-control-wrap .bilibili-player-video-control .bilibili-player-video-control-top.on{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-area-wrap .bilibili-player-video-control-wrap .bilibili-player-video-control .bilibili-player-video-control-top .bilibili-player-video-progress-slider{
        height: 14px;
    }

    
    .bui{
        display: flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
    }
    .bui-slider {
        height: 12px;
        cursor: pointer;
    }

    .bui-slider .bui-track.bui-track-video-progress {
        height: 2px;
    }

    .bui-slider .bui-track {
        position: relative;
        width: 100%;
        height: 2px;
        display: flex;
        align-items: center;
    }

    .bui-slider .bui-track.bui-track-video-progress .bui-bar-wrap {
        background: hsla(0,0%,100%,.2);
    }

    .bui-slider .bui-track .bui-bar-wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 1.5px;
        overflow: hidden;
        background: #e7e7e7;
    }

    .bui-slider .bui-track.bui-track-video-progress .bui-bar-wrap .bui-bar-buffer {
        background: hsla(0,0%,100%,.3);
        transition: transform .2s;
        transform: translateZ(0);
    }

    .bui-slider .bui-track .bui-bar-wrap .bui-bar {
        position: absolute;
        transform-origin: 0 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #00a1d6;
    }
        
    /*滑块*/
    .bui-slider .bui-track .bui-thumb {
        cursor: pointer;
    }


    .bui-slider .bui-track.bui-track-video-progress .bui-thumb .bui-thumb-dot {
        pointer-events: none;
        background: none;
        width: 16px;
        height: 16px;
        position: relative;
    }

    .bui-slider .bui-track.bui-track-autohide-thumb .bui-thumb .bui-thumb-dot {
        transform: scale(0);
    }

    .bui-slider .bui-track.bui-track-video-progress .bui-thumb .bui-thumb-dot {
        pointer-events: none;
        background: none;
        width: 16px;
        height: 16px;
        position: relative;
    }

    .bui-slider .bui-track .bui-thumb .bui-thumb-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: all .2s;
        transform: translateZ(0);
        background-color: #00a1d6;
        display: flex;
        vertical-align: middle;
        align-items: center;
    }

    .bui-slider .bui-track.bui-track-video-progress .bui-thumb .bui-thumb-dot svg {
        width: 22px;
        height: 19px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    #proBar:hover .bui-thumb-dot {
        transform: scale(1);
    }
    #proBar:hover .bui-track.bui-track-video-progress {
        height: 4px;
    }
    /*--滑块*/


    /*箭头*/
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress:hover .bilibili-player-video-progress-detail {
        visibility: visible;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail {
        position: absolute;
        bottom: 7px;
        left: 100px;
        overflow: visible;
        width: 20px;
        height: 36px;
        margin-left: -10px;
        text-align: center;
        z-index: 1;
        pointer-events: none;
        display: none;
        visibility: hidden;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail-img {
        position: absolute;
        bottom: 18px;
        left: 10px;
        z-index: 1;
        width: 160px;
        height: 90px;
        background-color: transparent;
        border-radius: 2px;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail-time {
        position: absolute;
        z-index: 2;
        left: 50%;
        width: 44px;
        line-height: 18px;
        height: 18px;
        font-size: 12px;
        background: rgba(21,21,21,.9);
        border-radius: 2px;
        color: #fff;
        vertical-align: top;
        display: inline-block;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail-sign {
        cursor: pointer;
        width: 8px;
        height: 16px;
        margin: 0 auto;
        position: absolute;
        overflow: hidden;
        top: 28px;
        left: 6px;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail-sign-down {
        width: 0;
        height: 0;
        border-color: #00a1d6 transparent transparent;
        border-style: solid;
        border-width: 4px 4px 0;
        position: relative;
    }

    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-progress-detail-sign-up {
        margin-top: 8px;
        width: 0;
        height: 0;
        border-color: transparent transparent #00a1d6;
        border-style: solid;
        border-width: 0 4px 4px;
        position: relative;
    }
    /*--箭头--*/

    .bilibili-player .bilibili-player-area .bilibili-player-video-bottom-area{

    }
    .bilibili-player-video-bottom-area:before{
        content: "";
        display: block;
        margin-bottom: -1px;
        width: 100%;
        height: 1px;
        background: #f4f4f4;
    }

    .bilibili-player-video-sendbar{
        flex-shrink: 0;
        position: relative;
        z-index: 70;
        height: 46px;
        display: flex;
        align-items: center;
        padding: 0 12px 0 20px;
        background: #fff;
        zoom: 1;
    }

    .bilibili-player-video-info{
        display: flex;
        flex: none;
        font-size: 12px;
        height: 16px;
        line-height: 12px;
        color: #505050;
        justify-content: flex-start;
        align-items: center;
        margin-right: 12px;
        width: 208px;
        white-space: nowrap;
        align-items: flex-end;
    }

    .bilibili-player-video-info-people-number {
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        font-weight: 600;
    }

    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root {
        height: 34px;
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-setting, .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-switch {
        position: relative;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 11px;
        cursor: pointer;
    }

    .bui-switch {
        display: inline-flex;
        position: relative;
        cursor: pointer;
        width: 30px;
    }

    .bui-switch .bui-body, .bui-switch .bui-dot {
        transition: all .3s;
        transform: translateZ(0);
    }
    .bui-switch .bui-checkbox {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        margin: 0;
        cursor: pointer;
    }
    .bui-switch .bui-body {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 100%;
        height: 20px;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #757575;
        cursor: pointer;
        vertical-align: middle;
        pointer-events: none;
    }
    .bui-switch .bui-checkbox:checked+.bui-body {
        background: #00a1d6;
    }
    .bui-switch .bui-checkbox:checked+.bui-body .bui-dot {
        left: 100%;
        margin-left: -18px;
        color: #00a1d6;
        fill: #00a1d6;
    }
    .bui-switch .bui-dot {
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 100%;
        width: 16px;
        height: 16px;
        background-color: #fff;
        color: #757575;
        fill: #757575;
        line-height: 16px;
        text-align: center;
        box-shadow: 0 3px 1px 0 rgba(0,0,0,.05), 0 2px 2px 0 rgba(0,0,0,.1), 0 3px 3px 0 rgba(0,0,0,.05);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-switch .choose_danmaku {
        display: inline-block;
        position: absolute;
        left: 50%;
        margin-left: -32px;
        bottom: 38px;
        width: 64px;
        height: 29px;
        text-align: center;
        line-height: 30px;
        border-radius: 2px;
        background: rgba(0,0,0,.9);
        opacity: 0;
        color: #fff;
        font-size: 12px;
        transform: translateY(5px);
        pointer-events: none;
        z-index: 99999;
        transition: all .2s ease-in-out;
    }
    .bui-switch .bui-dot span {
        display: inline-block;
        width: 10px;
        height: 10px;
        font-size: 0;
    }
    .bui svg {
        width: 100%;
        height: 100%;
    }

    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-switch:hover .choose_danmaku {
        opacity: 1;
        transform: translateY(0);
    }



    /*全屏导航栏*/
    .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 29px;
        line-height: 22px;
        margin: 7px 0 0;
        opacity: 0;
        visibility: hidden;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-start {
        width: 36px;
        margin-left: -12px;
        padding-left: 12px;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn {
        cursor: pointer;
        text-align: center;
        width: 36px;
        color: hsla(0,0%,100%,.8);
        fill: hsla(0,0%,100%,.9);
        font-size: 0;
        z-index: 2;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom .bilibili-player-video-btn {
        height: 22px;
        line-height: 22px;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-left>div {
        float: left;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-start.video-state-pause .bilibili-player-iconfont-start {
        display: inline-flex;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn.bilibili-player-video-btn-start.video-state-pause .bilibili-player-iconfont-pause {
        display: none;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-btn .bp-svgicon {
        height: 22px;
    }
    /*时间*/
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-time {
        width: 84px;
        line-height: 22px;
        height: 22px;
        font-size: 12px;
        position: relative;
        cursor: pointer;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-time-seek {
        display: none;
        width: 60px;
        padding: 0 5px;
        height: 20px;
        font-size: 12px;
        color: hsla(0,0%,100%,.9);
        line-height: 20px;
        position: absolute;
        text-align: center;
        top: 0;
        left: 6px;
        background: hsla(0,0%,100%,.2);
        border: 1px solid transparent;
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-time-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        white-space: nowrap;
        color: hsla(0,0%,100%,.9);
    }
    .bilibili-player .bilibili-player-area .bilibili-player-video-control .bilibili-player-video-time-wrap .bilibili-player-video-divider {
        padding: 0 2px;
    }
    /*-------------------*/

    /*设置菜单*/
    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-setting {
        fill: #757575;
        font-size: 0;
        height: 46px;
        display: flex;
        align-items: center;
        z-index: 1;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-setting, .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-switch {
        position: relative;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 11px;
        cursor: pointer;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-setting>.bp-svgicon {
        height: 24px;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-setting:hover {
        fill: #00a1d6;
    }
    /*---------*/
    /*发送弹幕*/

    .bilibili-player-video-sendbar .bilibili-player-video-inputbar {
        display: flex;
        flex-grow: 1;
        position: relative;
        height: 30px;
        line-height: 30px;
        background: #f4f4f4;
        color: #999;
        border-radius: 2px;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-inputbar-wrap {
        border-radius: 2px 0 0 2px;
        display: flex;
        flex: 1;
        border: 1px solid #e7e7e7;
        box-sizing: border-box;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-btn.bilibili-player-video-btn-danmaku {
        position: relative;
        height: 30px;
        line-height: 30px;
        width: 30px;    
        flex: none;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-btn {
        width: 30px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        text-align: center;
        color: hsla(0,0%,100%,.8);
        fill: #757575;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-btn.bilibili-player-video-btn-danmaku .bilibili-player-iconfont {
        display: inline-flex;
        height: 100%;
        align-items: center;
    }   
    /*--------*/

    /*弹幕输入框*/
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-danmaku-wrap {
        flex-grow: 1;
        top: 0;
        left: 0;
        padding: 0 10px;
        z-index: 13;
        box-sizing: border-box;
        font-size: 12px;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-danmaku-input {
        color: #212121;
        flex-grow: 1;
        border: 0;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        z-index: 12;
        padding: 0 5px;
        background: none;
        display: none;
        font-size: 12px;
        min-width: 115px;
        width: 100%;
    }
    .bilibili-player-video-danmaku-input:focus{
        border:0;
        outline: 0
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-hint {
        box-sizing: border-box;
        flex-shrink: 0;
        text-align: center;
        z-index: 13;
        width: 82px;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-hint a {
        font-size: 12px;
        color: #757575;
        fill: #757575;
        height: 100%;
        display: inline-block;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-hint a>span {
        vertical-align: top;
        height: 100%;
        line-height: 28px;
        display: inline-block;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-hint a .bp-svgicon {
        width: 16px;
        height: 28px;
    }
    .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-btn-send {
        z-index: 13;
        height: 30px;
        width: 60px;
        min-width: 60px;
        line-height: 30px;
        text-align: center;
        box-sizing: border-box;
        border-radius: 0 2px 2px 0;
    }
    .bui-button.bui-button-blue, .bui-button.bui-button-gray3:hover {
        background-color: #00a1d6;
        color: #fff;
    }

    .bui-button {
        display: inline-flex;
        cursor: pointer;
        min-width: 68px;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        box-sizing: border-box;
        transition: all .2s;
        transform: translateZ(0);
    }
    .bui-button.bui-button-blue:hover {
        background-color: #00b5e5;
    }
    /*----*/

    .bp-svgicon, .bp-svgicon svg {
        width: 100%;
        height: 100%;
    }
    .bp-svgicon{
        user-select: none;
        transition: fill .3s;
        vertical-align: middle;
        display: inline-block;
        font-size: 0;
    }
    .bp-svgicon svg use {
        transition: fill .3s;
    }
    .bilibili-player-video-control-bottom.on{
        opacity: 1 !important;
        visibility: visible !important;
        z-index: -1;
    }

    .bilibili-player-area-header-box{
        flex-shrink: 0;
        position: relative;
        z-index: 70;
        height: 30px;
        display: flex;
        align-items: center;
        padding: 0 12px 0 20px;
        background: #fff;
        zoom: 1;
    }
    .bilibili-player-area-header-box .bilibili-video-title{
        display: flex;
        flex: none;
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        color: #505050;
        justify-content: flex-start;
        align-items: center;
        margin-right: 12px;
        width: 208px;
        white-space: nowrap;
        align-items: flex-end;
    }
</style>

