<template>
    <li class="video-bar2">
        <div class="preview v r">
            <router-link to="#" class="small-img"></router-link>
        </div>
        <div class="r">
            <div class="title">
                <div title="企业/团体认证" class="legalize-14-2" style="vertical-align: top; margin-top: 2px;">
                </div>
                <a href="//space.bilibili.com/22500342" target="_blank">留学的真相</a>       
                <span>投稿了</span>
            </div>
            <div class="info">
                <a href="//www.bilibili.com/read/cv1380182" target="_blank" title="外媒|哈佛走上被告席，“亚裔歧视案”引爆舆论风波">外媒|哈佛走上被告席，“亚裔歧视案”引爆舆论风波
                </a>
            </div>
        </div>
    </li>    
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
        props:['video']
    })
</script>
<style>
    .video-bar2:hover{
        background-color: #e5e9ef;
    }

    .video-bar2 .preview.r {
        float: right;
        background: url(/img/header/loading.gif) 50% no-repeat;
        background-size: 100% 100%;
    }
    .video-bar2 .preview.v {
        position: relative;
        width: 40px;
        height: 30px;
    }
    .video-bar2 .preview.v  a{
        background-image: url(/img/dyna/hafo.jpg@80w_60h.webp);
        display: inline-block;
    }

    .video-bar2  .r {
        text-align: left;
    }
    .video-bar2  .r .title a{
        margin-right: 20px;
         width: auto;
        display: inline-block;
    }
    .video-bar2  .r .title span{
        color: #99a2aa;
        margin-right: 20px;
    }
    .video-bar2  .r .info{
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-bar2  .r .info a{
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: #00a1d6;
        display: inline-block;
    } 
</style>

