<template >
    <div class="live-module">
        <recommand :recommand='recommand'></recommand>
        <div class="l-con">
            <div class="zone-title">              
                <div class="headline clearfix">
                    <i class="bili-icon icon_t icon-live"></i>
                    <router-link to="#" target="_blank" class="name">正在直播
                    </router-link>
                    <p class="online">当前共有<span>2424</span>个在线直播
                    </p>
                    <router-link to="#" target="_blank" class="fire">
                        <i class="bili-icon pmt-icon"></i>
  					233秒居然能做这些！
  				    </router-link>
                    <router-link to="#" target="_blank" class="link-more">
						更多
					<i class="bili-icon"></i>
                        </router-link>
                    <div class="read-push">
                        <i to="#"></i>
                        <span class="info">
                            <b>30807</b>条新
                        </span>
                    </div>
                </div>
            </div>

            <div class="storey-box">
                <card-style3 v-for="(item,i) in live" :key="i"></card-style3>

            </div>
        </div>
        <div class="r-con">

        </div>
    </div>
</template>

<script>
    import recommand from '@/components/Home/subCom_wrapper/recommand.vue'
    import cardStyle3 from '@/components/Home/subCom_wrapper/card-style3.vue'
    export default({
        data(){
            return{
                recommand:{
                    src:'img/video/r1.jpg'
                },
                live:[{},{},{},{},{},{},{},{}]
            }
        },
        methods:{

        },
        created() {
            
        },
        mounted() {
            
        },
        components:{
            recommand,
            cardStyle3
        },
        props:[]
    })
</script>

<style>
    .live-module .l-con{
        width: 720px;
        float: left;
    }

    .live-module .zone-title {
        padding-right: 20px;
    }

    .live-module .zone-title .headline {
        padding: 0 0 15px;
    }

    .live-module .zone-title .headline .name {
        font-size: 24px!important;
        line-height: 24px;
        font-weight: 400;
        margin-right: 20px;
        float: left;
        color: #222;
    }
    .live-module .zone-title .headline .icon_t.icon-live {
        background-position: -141px -652px;
    }

    .live-module .zone-title .headline .icon_t {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
    }
    .live-module .zone-title .headline .online {
        float: left;
        margin-top: 8px;
        color: #99a2aa;
        font-size:12px;
    }
    .live-module .zone-title .headline .online span {
        color: #00a1d6;
    }
    .live-module .zone-title .headline .fire {
        margin-top: 8px;
        margin-left: 40px;
        padding-right: 10px;
        color: #6d757a;
        float: left;
        font-size:12px;
    }

    .live-module .zone-title .headline .fire .pmt-icon {
        display: inline-block;
        vertical-align: top;
        background-position: -665px -1113px;
        width: 14px;
        height: 14px;
        margin-top: 1px;
    }

    .live-module .zone-title .headline .link-more {
        float: right;
        width: 52px;
        height: 22px;
        line-height: 22px;
        background-color: #fff;
        border: 1px solid #ccd0d7;
        color: #555;
        border-radius: 4px;
        text-align: center;
        margin: 0 0 0 10px;
        transition: all .2s;
        font-size:12px;
    }
    .live-module .zone-title .headline .link-more i {
        display: inline-block;
        background-position: -478px -218px;
        width: 6px;
        height: 12px;
        margin: -2px 0 0;
        vertical-align: middle;
        transition: all .2s;
        font-size:12px;
    }
    .live-module .zone-title .headline .read-push {
        float: right;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #ccd0d7;
        border-radius: 4px;
        height: 22px;
        padding: 0 10px;
        transition: all .2s;
    }

    .live-module .zone-title .headline .read-push .icon_read {
        display: inline-block;
        width: 12px;
        height: 13px;
        vertical-align: top;
        transition: all .5s;
        margin-top: 5px;
        background-position: -475px -89px;
    }
    .live-module .zone-title .headline .read-push .info {
        display: inline-block;
        vertical-align: top;
        line-height: 22px;
        margin-left: 5px;
        font-size:12px;
    }
    .live-module .zone-title .headline .read-push .info {
        display: inline-block;
        vertical-align: top;
        line-height: 22px;
        margin-left: 5px;
        font-size:12px;
    }

    .live-module .storey-box {
        height: 336px;
        overflow: hidden;
    }

    .clearfix:before{
        content: "";
        display: table;
    }

    .clearfix::after{
        content: '';
        clear: both;
        overflow: hidden;
    }
</style>

