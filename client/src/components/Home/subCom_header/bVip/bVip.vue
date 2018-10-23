<template>
    <div class="bVip">
        <div class="bubble-traditional">
            <div class="bVip-title">精彩推荐</div>
            <div class="bVip-item-box">
                <b-vip-item v-for="(item,i) in bVipRecommands" :key="i" :bVipRecommand="item"></b-vip-item>
            </div>
            <div class="renew-btn">
                <button>开通大会员</button>
            </div>
        </div>
    </div>
</template>
<script>
    import bVipItem from "@/components/Home/subCom_header/bVip/bVipItem.vue"
    export default({
        data(){
            return {
                bVipRecommands:[
                    {title:'古墓丽影 经典劳拉上线',url_img:'img/bVip/laola.png@107w_143h.webp'},
                    {title:'喂！你有一张哔哩哔哩主题的信用卡待领取！',url_img:'img/bVip/bankCard.png@107w_143h.webp'}
                ]
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            bVipItem
        },
        props:[]
    })
</script>
<style>
    .bVip{
        position: absolute;
        width:260px;
        margin-left:-107px;
        border-radius:0 0 4px 4px;
        background-color: #fff;
        box-shadow:0 2px 4px rgba(0,0,0,.16);
        border:1px solid #e5e9ef;
        text-align: left;
        font-size: 0;
        line-height:normal;
    }
    .bVip .bubble-traditional{
        padding: 14px;
    }
    .bVip .bubble-traditional .bVip-title{
        color: #212121;
        font-size: 14px;
        margin: 5px 0 12px;
        font-weight: 900;
    }
    .bVip .bubble-traditional .renew-btn{
        margin-top: 20px;
        text-align: center;
        position: relative;
    }
    .bVip .bubble-traditional .renew-btn button{
        width: 160px;
        height: 32px;
        background: #00a1d6;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        outline: none;
    }
    .bVip .bubble-traditional .renew-btn button:hover{
        background: #00b5e5;
    }
    
</style>

