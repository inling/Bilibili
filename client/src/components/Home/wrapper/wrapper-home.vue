<template>
    <div class="wrapper-home">
        <!--广告-->
        <div id="chief_recommend">
            <!--轮播图模块-->
            <div class="slider-box">
                <slider-style1 :sliderContent="sliderContent"></slider-style1>
            </div>
            <!---->
            <div class="recommand-module">
                <cardStyle1 v-for="(item,i) in homeCards" :key="i" :homeCard="item" :videoId="item.v_id"></cardStyle1>
            </div>
        </div>
        <div id="home_popularize">
            <div class="l-content">
                <div class="headline clear">
                    <i class="icon-promote icon_t bili-icon"></i>
                    <span class="name">推广</span>
                </div>
                <div class="storey-box">
                    <cardStyle2 v-for="(item,i) in spreadCards" :key="i" :spreadCard="item" :video-id='item.v_id'></cardStyle2>
                </div>
            </div>
            <div class="r-content">
                <div class="online">
                    <router-link to="#" title="在线观看：5331721">在线人数：3845220
                    </router-link>
                    <em></em>
                    <router-link to="#">
                    最新投稿：51995
                    </router-link>
                </div>
                <div  class="adpos">
                    <router-link to="#">
                        <img src="img/video/7.jpg" alt="" width="260" height="150" class="pic">
                        <img src="img/video/cm_2.png" class="gg-pic">
                    </router-link>
                </div>
            </div>
        </div>

        <!--推广-->
        <div v-for="(item,i) in modules" :key="i"  :id="item.id" :sortindex="item.sortindex">
            <liveModule></liveModule>
        </div>
        <div  id="special_recommend">special_recommend</div>
    </div>
</template>

<script>
    import sliderStyle1 from '@/components/Home/subCom_wrapper/slider-style1.vue'
    import cardStyle1 from '@/components/Home/subCom_wrapper/card-style1.vue'
    import cardStyle2 from '@/components/Home/subCom_wrapper/card-style2.vue'
    import liveModule from '@/components/Home/wrapper-module/live-module.vue'
    export default({
        data(){
            return{
                modules:[],
                homeCards:[],
                spreadCards:[] ,
                sliderContent:[]   
            }
        },
        methods:{
            getModules(){
                this.$store.dispatch('elevator/getModules');
                this.modules=this.$store.state.elevator.modules;
            },
            getHomeCards(){
                this.$store.dispatch('recommand/getHomeCards');
                this.homeCards=this.$store.state.recommand.homeCards;
            },
            getSpreadCards(){
                this.$store.dispatch('spread/getSpreadCards');
                this.spreadCards=this.$store.state.spread.spreadCards;
            },
            getSliderContent(){
                this.$store.dispatch('recommand/getSliderContent');
                this.sliderContent=this.$store.state.recommand.sliderContent;
            }
        },
        created() {
            this.getModules();
            this.getHomeCards();
            this.getSpreadCards();
            this.getSliderContent();
        },
        mounted(){
            
        },
        components:{
            sliderStyle1,
            cardStyle1,
            cardStyle2,
            liveModule
        },
        props:[]
    })    
</script>

<style>
    @media screen and (max-width: 1400px){
        .wrapper-home {
            width: 980px !important;
        }
    }
    .wrapper-home {
        margin: 0 auto;
        width: 1160px;
    }
    .wrapper-home #chief_recommend{
        padding-bottom: 40px;
    }
    .wrapper-home #home_popularize{
        padding-bottom: 15px;
    }
     @media screen and (max-width: 1400px){
        .wrapper-home #home_popularize .l-content {
            width: 720px !important;
        }
    }
    .wrapper-home #home_popularize .l-content{
        width: 900px;
        float: left;
    }
    .wrapper-home #home_popularize .l-content .headline{
        padding:0 0 15px;
    }
    .wrapper-home #home_popularize .l-content .headline .icon_t{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
    }
    .wrapper-home #home_popularize .l-content .headline .icon_t.icon-promote{
        background-position: -141px -75px;
    }
    .wrapper-home #home_popularize .l-content .headline .name{
        font-size: 24px!important;
        line-height: 24px;
        font-weight: 400;
        margin-right: 20px;
        float: left;
    }
    .wrapper-home #home_popularize .storey-box{
        height: 168px;
        overflow: hidden;
    }
    .r-content{
        width: 260px;
        float: right;
    }
    .r-content .online{
        position: relative;
        height: 34px;
        line-height: 34px;
        padding: 0 10px;
        border-radius: 4px;
        text-align: center;
        background: #e5e9ef;
        white-space: nowrap;
    }
    .r-content .online a{
            color: #6d757a;
            font-size: 12px;
    }
    .r-content .online em{
        display: inline-block;
        border-left: 1px solid #b8c0cc;
        height: 10px;
        line-height: 10px;
        margin: 12px 15px 0;
        vertical-align: top;
    }
    .r-content .adpos{
        margin-top: 10px;
        border-radius: 4px;
        overflow: hidden;
        width: 260px;
        height: 150px;
        position: relative;
    }
    .r-content .adpos img{
        border: none;
        vertical-align: middle;
            cursor: pointer;
    }
    .r-content .adpos .gg-pic {
        position: absolute;
        bottom: 2px;
        left: 2px;
    }
    .wrapper-home #bili_live{
        padding-bottom: 30px;
        height:511px;margin:0 auto
    }
    .wrapper-home #bili_audio{
        padding-bottom: 30px;
        height:485px;margin:0 auto
    }
    .wrapper-home #bili_bangumi{
        padding-bottom: 30px;
        height:1014px;margin:0 auto
    }
    .wrapper-home #bili_douga{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_guochuang{
        padding-bottom: 30px;
        height:830px;margin:0 auto
    }
    .wrapper-home #bili_music{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_dance{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_game{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_technology{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_life{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_movie{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_cinephile{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_fashion{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_kichiku{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_teleplay{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_ent{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_documentary{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #bili_ad{
        padding-bottom: 30px;
        height:411px;margin:0 auto
    }
    .wrapper-home #special_recommend{
        padding-bottom: 30px;
        height:235px;margin:0 auto
    }

    .slider-box{
        width: 440px;
        height:220px;
        float:left;
    }
</style>
