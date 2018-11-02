<template>
    <div class="elevator-module" :class="{top:isTop,zIndex:isTopZIndex}">
        <div class="nav-bg" :class="{open:isOpen}">
            <div class="tips-img"></div>
        </div>
        <div class="nav-list">
            <div v-for="(item,i) in modules" :key="i" :sortindex='item.sortindex' :oppositeDivId="item.id" class="item sortable" @click="itemClick(i);followEleView($event)" :class="{on:i==current}" >{{item.title}}</div>
            <div class="item customize" @click="setEleMask">
                <i class="bili-icon"></i>排序
            </div>
        </div>
        <div class="sline"></div>
        <div class="back-top bili-icon" @click="toTop()"></div>
        <div class="app-download">
            <router-link to="#">
                <div id="elevator-mobile-app" class="app-icon" :style="littleAni.imgPosition"  @mouseover="setMouseOver();setImageDynaOver()" @mouseout="setMouseOut();setImageDynaOut()"></div>
                <transition name="download-client">
                    <div v-show="littleAni.downloadIsShow">
                        <div class="app-tips-icon"></div>
                    </div>                   
                </transition>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default({
        data(){
            return{
                current:0,
                isTop:false,
                modules:[],
                littleAni:{                                             //动画对象
                    downloadIsShow:false,                               //下载客户端云
                    imgPosition:{'background-position-x':0},            //小手机图标 背景x
                    timer1:null,
                    timer2:null,                                        //小手机图标后半段动画
                    timer3:null,
                    mouseout:false,                                     //监听鼠标是否移除
                    mouseover:true,                                     //监听鼠标是否移除
                    x:0,                                                //背景图定位值
                },
                clickToTimer:null,
                clickToTop:null
                                                               
            }
        },
        methods:{
            getModules(){
                this.$store.dispatch('elevator/getModules');
                this.modules=this.$store.state.elevator.modules;
            },
            itemClick(i){
                this.current=i;
            },
            //滚轮事件
            handleScroll(){
                var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
                var offsetTop=document.getElementById('chief_recommend').offsetTop;
                if(scrollTop>offsetTop){
                    this.isTop=true;
                }else{
                    this.isTop=false;
                }
            },
            //移入云出现
            setMouseOver(){
                this.littleAni.downloadIsShow=true;
            },
            //移除云出现
            setMouseOut(){
                this.littleAni.downloadIsShow=false;
            },
            //清除定时器
            clearTimer(timer){
                if(timer){
                    clearInterval(timer);
                    timer=null;
                }
            },
            //鼠标放在图片上开始动画
            setImageDynaOver(){
                this.clearTimer(this.littleAni.timer1);
                this.clearTimer(this.littleAni.timer2);
                this.clearTimer(this.littleAni.timer3);
                this.littleAni.mouseout=false;
                this.littleAni.mouseover=true;
                (async function(self){
                    await new Promise(function(open){                
                        self.littleAni.timer1=setInterval(()=>{
                            if(self.littleAni.x>=-640&&self.littleAni.x<=0){
                                self.littleAni.x-=80;
                                self.littleAni.imgPosition['background-position-x']=self.littleAni.x+'px'
                            }else{
                                self.clearTimer(self.littleAni.timer1);
                                open();
                            }
                        },100);                   
                    })             
                    await new Promise(function(open){
                        var pan=1;    //正和负
                        self.littleAni.timer2=setInterval(()=>{
                            if(self.littleAni.x<=-720&&self.littleAni.x>=-1200){
                                if(self.littleAni.x==-720)
                                    pan=-1;
                                else if(self.littleAni.x==-1200)
                                    pan=1;
                                self.littleAni.x=self.littleAni.x+80*pan;
                                self.littleAni.imgPosition['background-position-x']=self.littleAni.x+'px';
                            }
                        },100)
                    })
                })(this)
            },
            //鼠标移除图片上结束动画
            setImageDynaOut(){
                this.clearTimer(this.littleAni.timer1);
                this.clearTimer(this.littleAni.timer2);
                this.clearTimer(this.littleAni.timer3);
                this.littleAni.mouseout=true;
                this.littleAni.mouseover=false;

                (function(self){
                    if((self.littleAni.x+80)<=0){
                        self.littleAni.timer3=setInterval(function(){
                            self.littleAni.x+=80;
                            self.littleAni.imgPosition['background-position-x']=self.littleAni.x+'px';
                            if(self.littleAni.x>=0){
                                self.clearTimer(self.littleAni.timer3);
                            }                 
                        },100) 
                    }
                })(this)        
            },
            //遮罩层
            setEleMask(){
                var isOpen=this.$store.state.global.elevator.isOpen;
                if(isOpen) 
                    this.$store.dispatch('global/getIsOpen',false)
                else 
                    this.$store.dispatch('global/getIsOpen',true)
                
                var isTopZIndex=this.$store.state.global.elevator.isTopZIndex;
                if(isTopZIndex) 
                    this.$store.dispatch('global/getIsTopZIndex',false)
                else 
                    this.$store.dispatch('global/getIsTopZIndex',true)

                var isEleMaskShow=this.$store.state.global.elevator.isEleMaskShow;
                if(isEleMaskShow)
                    this.$store.dispatch('global/getIsEleMaskShow',false);
                else
                    this.$store.dispatch('global/getIsEleMaskShow',true);
                
            },
            //视图移到顶部
            toTop(){
                if(this.clickToTop){
                    cancelAnimationFrame(this.clickToTop);
                }       
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                var step = oTop/20;
                var self=this;
                self.clickToTop = requestAnimationFrame(function fn(){               
                    if(oTop > 0){
                        oTop-=step;
                        document.body.scrollTop = document.documentElement.scrollTop = oTop;
                        self.clickToTop = requestAnimationFrame(fn);
                        self.clickToTop=null;
                    }else{
                        cancelAnimationFrame(self.clickToTop);
                    }    
                });
            },
            //追随鼠标滚轮事件
            followScroll(){

            },
            //追随元素位置,调到可见位置
            followEleView(e){
                if(this.clickToTimer){
                    cancelAnimationFrame(this.clickToTimer);
                }            
                var ele=e.target;
                var oppositeDivId=ele.getAttribute('oppositeDivId');
                var oppositeDiv=document.getElementById(oppositeDivId);
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var offsetTop=oppositeDiv.offsetTop;
                var step=Math.abs(scrollTop-offsetTop)/20;
                var self=this;
                self.clickToTimer = requestAnimationFrame(function fn(){
                    var ofp= oppositeDiv.offsetTop;
                    var stp= document.body.scrollTop || document.documentElement.scrollTop;
                    var dis=ofp-stp;
                    if(dis==0){
                        cancelAnimationFrame(self.clickToTimer);
                        self.clickToTimer=null;
                    }else if(dis<step&&dis>-step){
                        document.body.scrollTop = document.documentElement.scrollTop=ofp;
                        cancelAnimationFrame(self.clickToTimer);
                        self.clickToTimer=null;
                    }else{
                        if(dis<=-step){
                            scrollTop-=step
                        }else if(dis>=step){
                            scrollTop+=step;
                        }
                        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
                        self.clickToTimer = requestAnimationFrame(fn);
                    }             
                });
                
            }
            
        },
        computed:{
            isOpen(){
                return this.$store.getters['global/isOpen']
            },
            isTopZIndex(){
                return this.$store.getters['global/isTopZIndex']
            },
        },
        created(){
            this.getModules();
        },
        mounted() {
            this.handleScroll();
            window.addEventListener('scroll',this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll',this.handleScroll)
        },
    })
</script>

<style>
    @media screen and (max-width: 1400px){
        .elevator-module {
            margin-left: 500px !important;
        }
    }
    .elevator-module{
        position: fixed;
        z-index: 10;
        left:50%;
        top:232px;
        margin-left:590px;
        transition: top .3s;
    }
    .zIndex{
        z-index: 1000;
    }
    .top{
        top:13.5px;
    }
    .elevator-module .nav-bg{
        opacity: 0;
        position: absolute;
        top:-15px;
        right:0;
        height:100%;
        padding-bottom:20px;
        width: 60px;
        background: hsla(0,0%,100%,.8);
        border-radius: 4px;
        overflow:hidden;
        transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .elevator-module .nav-bg.open{
        right:-20px;
        width: 200px;
        opacity: 1;
    }
    .elevator-module .tips-img{
        position: absolute;
        width:117px;
        height:333px;
        background:url(/img/tab2233.png);
        left:12px;
        top: 14px;
    }

    .elevator-module .nav-list{
        position: relative;
        background-color: #f6f9fa;
        border:1px solid #e5e9ef;
        overflow: hidden;
        border-radius:4px;
    }
    .elevator-module .item{
        width:48px;
        height:32px;
        line-height: 32px;
        text-align:center;
        transition: background-color .3s,color .3s;
        cursor: pointer;
        user-select: none;
        font-size: 12px;
    }
    .elevator-module .item:hover{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .item.on{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .nav-list .customize{
        height:54px;
        line-height: 20px;
        padding:8px 0;
        border-top:1px solid #e5e9ef;
    }
    .elevator-module .nav-list .customize .bili-icon{
        display: block;
        margin:0 auto 4px;
        background-position: -663px -151px;
        height:18px;
        width:18px
    }
    .elevator-module .sline{
        position: relative;
        border-left: 1px solid #ddd;
        border-right:1px solid #ddd;
        height:9px;
        width:30px;
        margin:0 auto;
    }
    .elevator-module .back-top{
        position: relative;
        display: block;
        cursor: pointer;
        height: 48px;
        background-position: -648px -72px;
        background-color: #f6f9fa;
        border:1px solid #e5e9ef;
        overflow: hidden;
        border-radius: 4px;
    }
    .elevator-module .back-top:hover{
        background-color: #00a1d6;
        background-position: -714px -72px;
        border-color: #00a1d6;
    }
    .elevator-module .app-download{
        position: relative;
        width:50px;
        height:70px;
    }
    .elevator-module .app-download .app-icon{
        position: absolute;
        left:-15px;
        width:80px;
        height:80px;
        background-image: url(/img/app-download.png)
    }
    .elevator-module .app-download .app-tips-icon{
        position: absolute;
        left:-110px;
        top:-20px;
        width:106px;
        height:44px;
        background-image: url(/img/app-download-tips.png);
        opacity: 1;
    }
    .download-client-enter-active{
        transition: all .3s linear;
    }
    .download-client-leave-active{

        transition: all .3s linear;
    }
    .download-client-enter{
        opacity: 0;
    }
    .download-client-leave-to{
        opacity: 0;
    }
    
</style>
