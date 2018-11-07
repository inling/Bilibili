<template>
    <div class="groom-module home-card">
        <a :href="homeCard.href" target="_blank" :title="homeCard.title">
            <img :src="homeCard.src" class="pic">
            <div class="card-mask">
                <p class="title">{{homeCard.title}}</p>
                <p class="author">{{homeCard.upMaster}}</p>
                <p class="play">{{homeCard.playCount}}</p>
            </div>
        </a>
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
        mounted() {
            
        },
        components:{

        },
        props:['homeCard']
    })
</script>
<style>
    .groom-module{
        float: left;
        margin: 0 0 20px 20px;
    }
    .home-card a{
        transition: color .2s;
    }
    .home-card .pic{
        width: 160px;
        height:100px;
        vertical-align: middle;
    }
    .home-card .card-mask{
        position: absolute;
        left: 0;
        top: 68px;
        width: 160px;
        height: 100%;
        font-size: 12px;
        height: 40px;
        line-height: 20px;
        padding: 10px 5px;
        overflow: hidden;
        background: #000;
        background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
    }
    .home-card .card-mask .title{
        color: #fff;
        height: 40px;
        overflow: hidden;
        margin-bottom: 5px;
        word-break: break-all;
        word-wrap: break-word;
    }
    .home-card .card-mask .author,.home-card .card-mask .play{
        opacity: 0;
        color: #99a2aa;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        transition: all .6s;
    }
    .groom-module:hover .card-mask{
        top: 0;
        height: 100%;
        background: rgba(0,0,0,.7);
    }
    .groom-module:hover .card-mask .author,.groom-module:hover .card-mask .play{
        opacity: 1;
    }
</style>
