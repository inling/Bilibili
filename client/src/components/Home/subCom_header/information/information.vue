<template>
    <div class="information">
        <div class="im-list-box">
            <info-item v-for="(item,i) in infos" :key="i" :info="item"></info-item>
        </div>
    </div>    
</template>
<script>
    import infoItem from "@/components/Home/subCom_header/information/infoItem.vue"
    export default({
        data(){
            return{
                infos:[
                    {title:'回复我的',info_num:0},
                    {title:'@我的',info_num:0},
                    {title:'收到的赞',info_num:0},
                    {title:'系统通知',info_num:44},
                    {title:'我的消息',info_num:0}
                ]
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            infoItem
        },
        props:[]
    })
</script>
<style>
    .information{
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-size: 12px;
        line-height: 42px;
        color: inherit;
        margin-left: -35px;
    }
    .information .im-list-box{
        width: 110px;
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        box-shadow: rgba(0,0,0,0.16) 0px 2px 4px;
        border-radius: 0 0 4px 4px;
        overflow: hidden;
        transition: all 300ms;
    }
</style>
