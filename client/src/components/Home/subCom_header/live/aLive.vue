<template>
    <router-link  class="aLive" to="#">
        <img class="face" :src="liver.face" alt="">
        <div class="hover">
            "LIVE"
        </div>
        <p class="uname">{{liver.uname}}</p>
    </router-link>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created(){

        },
        components:{

        },
        props:['liver']
    })
</script>
<style scoped>
    .aLive{
        position: relative;
        display: inline-block;
        margin:10px 17px 0 0;
        width:64px;
        height:auto;
    }
    .aLive .face{
        width:64px;
        height:64px;
        border-radius: 50%;
        outline: 0;
    }
    .aLive .hover:before{
        content: "";
        top:27px;
        left:8px;
        position: absolute;
        width:12px;
        height:12px;
        background: #ff699e;
        border-radius:50%;
    }
    .aLive .uname{
        margin:3px 0 0;
        text-align: center;
        color:#000;
        width:100%;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>

