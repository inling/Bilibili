<template>
    <div class="banner">
        <router-link to="#">
            <img :src="bigAdImage" alt="">
            <span>{{bigAdImageText}}</span>
        </router-link>
    </div>
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
        props:['bigAdImage','bigAdImageText']
    })
</script>

<style scoped>
    .banner{
        width:240px;
        height:128px;
        margin-left:12px;
    }
    .banner a{
        display: block;
        width:100%;
        height:100%;
        position: relative;
    }
    .banner img{
        width: 100%;
        border-radius:4px;
    }
    .banner span{
        position: absolute;
        bottom:0px;
        left:0px;
        width: 100%;
        padding:0 10px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 30px;
        text-shadow: 1px 1px 1px #000;
        color:#fff;
        background: url(/img/AppGame/shadow.png) repeat-x;
    }
</style>

