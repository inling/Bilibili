<template>
    <div class="wrapper-home">
        <div style="width:980px;height:260px;margin:0 auto" id="chief_recommend">
            <!--轮播图模块-->
            <div class="slider-box">
                <slider-style1></slider-style1>
            </div>
            <!---->
            <div class="recommand-module">
                <cardStyle1 v-for="(item,i) in homeCards" :key="i" :homeCard="item"></cardStyle1>
            </div>
        </div>
        <div style="width:980px;height:228px;margin:0 auto" id="home_popularize">
            <div class="l-content">
                <div class="headline clear">
                    <i class="icon-promote icon_t bili-icon"></i>
                    <span class="name">推广</span>
                </div>
                <div class="storey-box">
                    <cardStyle2 v-for="(item,i) in spreadCards" :key="i" :spreadCard="item"></cardStyle2>
                </div>
            </div>
            <div class="r-content">
                <div class="online">
                    <router-link to="#" target="_blank" title="在线观看：5331721">在线人数：3845220
                    </router-link>
                    <em></em>
                    <router-link to="#" target="_blank">
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




        <div v-for="(item,i) in modules" :key="i"  :id="item.id" :sortindex="item.sortindex">{{item.id}}</div>
        <div  id="special_recommend">special_recommend</div>
    </div>
</template>

<script>
    import sliderStyle1 from '@/components/Home/subCom_wrapper/slider-style1.vue'
    import cardStyle1 from '@/components/Home/subCom_wrapper/card-style1.vue'
    import cardStyle2 from '@/components/Home/subCom_wrapper/card-style2.vue'
    export default({
        data(){
            return{
                modules:[],
                homeCards:[],
                spreadCards:[
            {src:'img/video/1.jpg@160w_100h.webp',
            bsrc:'img/video/61156441.jpg@.webp',title:'这是牛仔骨最好吃的做法，不服来试！【韩式辣牛仔骨锅】',dur:'06:21',m:'381'},
            {src:'img/video/2.jpg@160w_100h.webp',
            bsrc:'img/video/62144617.jpg@.webp',title:'他和陈小春开了家网红店',dur:'03:32',m:'212'},
            {src:'img/video/3.jpg@160w_100h.webp',
            bsrc:'img/video/61880456.jpg@.webp',title:'一口气用八种声音唱《霜雪千年》',dur:'00:32',m:'32'},
            {src:'img/video/4.jpg@160w_100h.webp',
            bsrc:'img/video/62066355.jpg@.webp',title:'【高达狗血史】阿姆罗一出场就死 惨遭电影化的高达',dur:'06:56',m:'416'}
                ]    
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
            }
        },
        created() {
            this.getModules();
        },
        mounted(){
            this.getHomeCards();
        },
        components:{
            sliderStyle1,
            cardStyle1,
            cardStyle2
        },
        props:[]
    })    
</script>

<style>

    .wrapper-home #chief_recommend{
        padding-bottom: 40px;
    }
    .wrapper-home #home_popularize{
        padding-bottom: 15px;
    }
    .wrapper-home #home_popularize .l-content{
        width: 720px;
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
        width:980px;height:511px;margin:0 auto
    }
    .wrapper-home #bili_audio{
        padding-bottom: 30px;
        width:980px;height:485px;margin:0 auto
    }
    .wrapper-home #bili_bangumi{
        padding-bottom: 30px;
        width:980px;height:1014px;margin:0 auto
    }
    .wrapper-home #bili_douga{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_guochuang{
        padding-bottom: 30px;
        width:980px;height:830px;margin:0 auto
    }
    .wrapper-home #bili_music{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_dance{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_game{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_technology{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_life{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_movie{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_cinephile{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_fashion{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_kichiku{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_teleplay{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_ent{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_documentary{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #bili_ad{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .wrapper-home #special_recommend{
        padding-bottom: 30px;
        width:980px;height:235px;margin:0 auto
    }

    .slider-box{
        width: 440px;
        height:220px;
        float:left;
    }
</style>
