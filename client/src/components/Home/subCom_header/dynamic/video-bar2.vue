<template>
    <li class="video-bar2" style="width:330px;">
        <div class="preview v r">
            <router-link to="#" class="small-img"></router-link>
        </div>
        <div class="r">
            <div class="title">
                <div :title="autitle" :class="auClass" v-show="isAu" style="vertical-align: top; margin-top: 2px;">
                </div>
                <router-link :to="item.href" target="_blank">{{item.uname}}</router-link>       
                <span>投稿了</span>
            </div>
            <div class="info">
                <router-link :to="item.href" target="_blank" :title="item.title">{{item.title}}
                </router-link>
            </div>
        </div>
    </li>    
</template>
<script>
    export default({
        data(){
            return{
                isAu:true,
                autitle:'',
                auClass:''
            }
        },
        methods:{
            justifyAu(){
                if(this.item.authentication==0){
                    this.isAu=false;
                }else if(this.item.authentication==1){
                    this.isAu=true;
                    this.autitle='个人认证';
                    this.auClass='legalize-14-1';
                }else if(this.item.authentication==2){
                    this.isAu=true;
                    this.autitle='企业/团体认证';
                    this.auClass='legalize-14-2';
                }
            }
        },
        created() {
            this.justifyAu();
        },
        components:{

        },
        props:['item']
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
        display: block;
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
    .video-bar2 .r .info a:hover{
        text-decoration: underline;
    }
</style>

