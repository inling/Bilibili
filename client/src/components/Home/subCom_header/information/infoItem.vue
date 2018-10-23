<template>
    <router-link class="infoItem" to="#">
        {{info.title}}
        <div class="info-num" v-show="info.info_num!=0">{{info.info_num}}</div>
    </router-link>    
</template>
<script>
    export default({
        data(){
            return{}
        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['info']
    })
</script>
<style>
    .infoItem{
        display: block;
        text-align: center;
        position: relative;
        line-height: 42px;
        height: 42px;
    }
    .infoItem:hover{
        color: #00a1d6 !important;
        background-color: #e5e9ef !important;
    }
    .infoItem .info-num{
        height: 14px;
        line-height: 13px;
        border-radius: 10px;
        padding: 1px 3px;
        font-size: 12px;
        min-width: 20px;
        text-align: center;
        color: #fff;
        position: absolute;
        background-color: #fb7299;
        top: 14px;
        left: 80px;
    }
</style>
