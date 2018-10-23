<template>
    <li class="video-bar">
        <div class="preview">
            <router-link to="#" class="small-img" :style="video.smallImg"></router-link>
        </div>
        <div class="r">
            <div class="title">
                <div title="企业/团体认证" class="legalize-14-2"></div>
                <router-link to="#">留学的真相</router-link>
                <span>投稿了</span>
            </div>
            <div class="info">
                <router-link to="#" title="【室内设计师】一个班全是中国人 来了三年学到了啥？">【室内设计师】一个班全是中国人 来了三年学到了啥？</router-link>
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
    .video-bar:hover{
        background-color: #e5e9ef;
    }
    .preview{
        position: relative;
        width: 40px;
        height: 30px;
        background: #fff;
        width: 40px;
        height: 40px;
        float: left;
        margin-right: 10px;
        margin-top: 4px;
        border-radius: 4px;
                text-align: left;
    }
    .preview .small-img{
        display: inline-block;
        width: 40px!important;
        height: 30px;
        background: 50%/cover no-repeat;
        border-radius: 4px;
    }
    .video-bar .r{
        text-align: left;
    }
    .video-bar .r .title{
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .legalize-14-2{
        vertical-align: top;
        margin-top: 2px;
    }
    .video-bar .r .title a{
        margin-right: 20px;
    }
    .video-bar .r .title span{
        color: #99a2aa;
        margin-right: 20px;
    }
    .video-bar .r .info{
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video-bar .r .info a{
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: #00a1d6;
    }
    .video-bar .r .info a:hover{
        text-decoration: underline;
    }


</style>

