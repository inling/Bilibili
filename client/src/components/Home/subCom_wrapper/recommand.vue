<template>
    <div class="gg-floor-module">
        <div data-id="0" data-loc-id="40" class="item" style="overflow: hidden; margin: 0px auto;">
            <a target="_blank" href="/" data-target-url="">
                <div class="lazy-img">
                    <img alt="" :src="recommand.src">
                </div>
                <img src="//s1.hdslb.com/bfs/static/jinkela/home/asserts/cm_2.png" class="gg-pic">
            </a>
        </div>
    </div>
</template>

<script>
    export default({
        data(){
            return {}
        },
        props:['recommand']
    })
</script>

<style>
    
    .gg-floor-module{
        margin-bottom: 20px;
        position: relative;
        width: 1160px;
        overflow: hidden;
        border-radius: 5px;
        max-height: 96px;
        font-size: 0;
    }
    @media screen and (max-width: 1400px){
        .gg-floor-module {
            width: 980px;
            max-height: 80px;
        }
    }
    .gg-floor-module a {
        display: inline-block;
    }

    .lazy-img {
        background: url(/img/img_loading.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .lazy-img img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .gg-floor-module img {
        border-radius: 5px;
    }

    .gg-floor-module .gg-pic {
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>

