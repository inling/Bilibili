<template>
    <div class="slider-module">
        <div class="panel" @mouseover="setSilderOver" @mouseout="setSilderOut">
            <ul class="pic" :style="sliderPara.ml">
                <li class="scrollx" v-for="(item,i) in sliderContent" :key="i">
                        <router-link to="#">
                            <div class="lazy-img">
                                <img :src="item.src" alt="">
                            </div>
                        </router-link>
                    </li>
            </ul>
            <ul class="title">
                <router-link to="#" :class="{on:sliderPara.current==i}"  v-for="(item,i) in sliderContent" :key="i">
                {{item.title}}
                </router-link>
            </ul>
            <ul class="trig">
                <span class="bili-icon" :class="{on:sliderPara.current==i}"  v-for="(item,i) in sliderContent" :key="i"  @click="trigClick(i)"></span>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                sliderContent:[],
                sliderPara:{
                    sliderTimer:null,
                    ml:{'margin-left':0},
                    mlValue:0,
                    current:0
                }      
            }
        },
        methods:{
            sliderAction(){
                if(this.sliderPara.sliderTimer){
                    clearInterval(this.sliderPara.sliderTimer);
                    this.sliderPara.sliderTimer=null;
                }
                this.sliderPara.sliderTimer=setInterval(()=>{
                    if(this.sliderPara.mlValue==-400){
                        this.sliderPara.mlValue=0;
                        this.sliderPara.current=0;
                    }else{
                        this.sliderPara.mlValue-=100;
                        this.sliderPara.current=Math.abs(this.sliderPara.mlValue/100);
                    }
                    this.sliderPara.ml['margin-left']=this.sliderPara.mlValue+'%';
                },5000)
            },
            setSilderOver(){
                clearInterval(this.sliderPara.sliderTimer);
            },
            setSilderOut(){
                this.sliderAction()
            },
            trigClick(id){
                this.sliderPara.current=id;
                this.sliderPara.mlValue=id*(-100);
                this.sliderPara.ml['margin-left']=this.sliderPara.mlValue+'%';
            },
            getSliderContent(){
                this.$store.dispatch('recommand/getSliderContent');
                this.sliderContent=this.$store.state.recommand.sliderContent;
            }
        },
        created(){
            this.getSliderContent();
        },
        mounted(){
            this.sliderAction();
        },
        components:{

        }
    }
</script>

<style scoped>
    
    
  /*轮播图通用属性*/
  /*图片部分*/
  .slider-module .panel .pic{
        z-index:1;
        position: relative;
        transition: all .3s;
    }
  .slider-module .panel .pic li{
        position: relative;
    }
  .slider-module .panel .pic .scrollx{
        float: left;
  }
  /*文字部分*/
  .slider-module .panel .title{
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: rgba(0,0,0,.5);
    font-size: 14px;
  }
  .slider-module .panel .title a{
    position: absolute;
    width: 100%;
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
    opacity: 0;
    z-index: -1;
    transition: all .3s;
  } 
  .slider-module .panel .title a.on {
    opacity: 1;
    z-index: 1;
  }
  /*轮播点部分*/
  .slider-module .panel .trig{
    position: absolute;
    z-index: 3;
    bottom: 6px;
    right: 20px;
  }




    .slider-module,.slider-module .panel{
        position: relative;
        width: 100%;
        height:100%;
    }
    .slider-module .panel{
        border-radius:4px;
        overflow: hidden;
    }
    .slider-module .panel .pic{
        width: 500%;
        margin-left:0%;
    }
    .slider-module .panel .pic .scrollx a{
        display: inline-block;
    }
    .slider-module .panel .pic .scrollx a .lazy-img{
        background: url(/img/img_loading.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .slider-module .panel .pic .scrollx a .lazy-img img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .slider-module .panel .title {
        background: linear-gradient(transparent,rgba(0,0,0,.5));
    }
    .slider-module .panel .title a{
        width:280px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .slider-module .panel .trig span.on {
        background-position: -855px -727px;
        width: 18px;
        height: 18px;
    }
   .slider-module .panel .trig span{
        width: 18px;
        height: 18px;
        background-position: -855px -790px;
        background-color: transparent;
        transition: none;
    }

    .slider-module .panel .trig span:hover{
        background-position: -919px -790px;
    }
</style>


