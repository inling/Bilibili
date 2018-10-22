<template>
    <router-link  class="aLive" to="#">
        <img class="face" :src="liver.face" alt="">
        <div class="hover">LIVE</div>
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
     .aLive .hover{
        position: absolute;
        top:0;
        left:0;
        width:64px;
        height:64px;
        line-height: 64px;
        text-indent: 22px;
        border-radius: 50%;
        opacity: 0;
        background: rgba(0,0,0,.5);
        font-size:15px;
        color:#fff;
        font-weight:700;
        transform: scale(0);
        transition: all .2s cubic-bezier(.22,.58,.12,.98);
    }
    .aLive:hover .hover{
        opacity: 1;
        transform: scale(1);
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

