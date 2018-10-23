<template>
    <div class="bVipItem">
        <router-link to="#" class="bVip-pic">
            <div class="lazy-img">
                <img :src="bVipRecommand.url_img" :alt="bVipRecommand.title">
            </div>
        </router-link>
        <router-link to="#" class="recommand-Link">{{bVipRecommand.title}}</router-link>
    </div>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['bVipRecommand']
    })
</script>
<style>
    .bVipItem{
        width:50%;
        display: inline-block;
        margin-bottom:7px;
        text-align: center
    }
    .bVipItem .bVip-pic{
        display: inline-block;
    }
    .bVipItem .bVip-pic .lazy-img{
        background: url(/img/load.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;

    }
    .bVipItem .bVip-pic .lazy-img img{
        width: 107px;
        height: 143px;
        border-radius: 4px;
        background: #ccc;
        display: block;
        
    }
    .bVipItem .recommand-Link{
        display: block;
        margin-top: 10px;
        font-size: 12px;
        color: #222;
        text-align: left;
        line-height: 18px;
        height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

