<template>
    <li class="video-bar">
        <div class="preview">
            <router-link to="#" class="small-img" :style="item.smallImg"></router-link>
        </div>
        <div class="r">
            <div class="title">
                <div :title="autitle" :class="auClass" v-show="isAu"></div>
                <router-link :to="item.href">{{item.uname}}</router-link>
                <span>投稿了</span>
            </div>
            <div class="info">
                <router-link :to="item.href" :title="item.title">{{item.title}}</router-link>
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
    .video-bar:hover{
        background-color: #e5e9ef;
    }
    .video-bar .preview{
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
    .legalize-14-1{
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

