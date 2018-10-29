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
                infos:[]
            }
        },
        methods:{
            getInfos(){
                this.$store.dispatch('userBar/getInfos');
                this.infos=this.$store.state.userBar.infos;
            }
        },
        created() {
            this.getInfos();
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
