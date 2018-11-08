<template>
    <div class="wrapper-douga">
        <sub-nav :subNav="subNavItems"></sub-nav>
        <div class="channel-m">
            <div class="nominate-m clearfix">
                <div class="slider-box">
                    <sliderStyle1 :sliderContent="sliderContent"></sliderStyle1>
                </div>
                <div class="video-card-box">
                    <div class="groom-box-m">
                        <cardStyle1 v-for="(item,i) in homeCards" :key="i" :homeCard="item"></cardStyle1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import subNav from '@/components/Home/subCom_wrapper/sub-nav.vue'
    import sliderStyle1 from '@/components/Home/subCom_wrapper/slider-style1.vue'
    import cardStyle1 from '@/components/Home/subCom_wrapper/card-style1.vue'
    export default({
        data(){
            return{
                subNavItems:[],
                sliderContent:[],
                homeCards:[]
            }
        },
        methods:{
            getSubNavItems(){
                this.$store.dispatch('douga/getSubNavItems');
                this.subNavItems=this.$store.state.douga.subNavItems;
            },
            getSliderContent(){
                this.$store.dispatch('douga/getSliderContent');
                this.sliderContent=this.$store.state.douga.sliderContent;
            },
            getHomeCards(){
                this.$store.dispatch('douga/getHomeCards');
                this.homeCards=this.$store.state.douga.homeCards;
            }
        },
        created() {
            this.getSubNavItems();
            this.getSliderContent();
            this.getHomeCards();
        },
        components:{
            subNav,
            sliderStyle1,
            cardStyle1
        }
    })
</script>

<style>
    .wrapper-douga{
        height: 2964px;
    }
    .wrapper-douga{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-douga {
            width: 980px;
        }   
    }

    .wrapper-douga .channel-m .nominate-m{
        margin-bottom: 30px;
    }
    .wrapper-douga .channel-m .nominate-m .slider-box{
        width: 620px;
        height: 220px;
        float: left;
    }

    .nominate-m .video-card-box {
        position: relative;
        height: 220px;
        overflow: hidden;
    }   
    .nominate-m .video-card-box .groom-box-m{
        position: relative;
        height: 220px;
        overflow: hidden;
    }
</style>

