<template>
    <router-link class="gamePrvItem" to="#">
        <span @mouseover="setMouseOver" @mouseout="setMouseOut">{{gamePrv.name}}</span>
        <div class="imgdiv" :style="currentImg"></div>   
    </router-link>    
</template>
<script>
    export default({
        data(){
            return {
                currentImg:''
            }
        },
        methods:{
            setMouseOver(){
                this.currentImg=this.gamePrv.url_img+';display:block';
            },
            setMouseOut(){
                this.currentImg='display:none';
            }
        },
        created() {
            
        },
        components:{

        },
        props:['gamePrv']
    })
</script>
<style>
    .gamePrvItem{
        overflow: hidden;
        white-space: nowrap;
        padding-left: 16px;
        display: block;
        font-size: 12px;
        line-height: 28px;
        color:#222;
    }
    .gamePrvItem:hover{
        color:#00a1d6;
        background-color:#e5e9ef;
    }
    .gamePrvItem span{
        width: 13em;
        height: 28px;
        display: block;
        line-height: 28px;
        overflow: hidden;
        text-align: left;
    }
    .gamePrvItem .imgdiv{
        width:220px;
        height:220px;
        position:absolute;
        bottom:0;
        left:442px;
        display: none;
    }
</style>

