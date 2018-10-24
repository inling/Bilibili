<template>
    <li :title="liTitle" class="ul2-li-style2 headli" @mouseover="setMouseOver" @mouseout="setMouseOut">
        <router-link to="#" class="heada">{{liText}}
            <div class="num" v-show='mesNum!=0'>{{mesNum}}</div>
        </router-link>
        <transition name="box-show">
            <component :is="downDiv" v-show="isShowBox"></component>
        </transition>
    </li>
</template>
<script>
    import bVip from "@/components/Home/subCom_header/bVip/bVip.vue"
    import information from "@/components/Home/subCom_header/information/information.vue"
    import dynamic from "@/components/Home/subCom_header/dynamic/dynamic.vue"
    export default({
        data(){
            return {
                isShowBox:false
            }
        },
        methods:{
            setMouseOver(){
                this.isShowBox=true;
            },
            setMouseOut(){
                this.isShowBox=false;
            }
        },
        created(){

        },
        components:{
            bVip,
            information,
            dynamic
        },
        props:['liTitle','liText','mesNum','downDiv']
    })
</script>
<style scoped>
    .ul2-li-style2 a .num{
        height: 14px;
        line-height: 12px;
        color: #fff;
        background-color: #f25d8e;
        border-radius: 10px;
        position: absolute;
        padding: 1px 2px;
        font-size: 12px;
        top: 1px;
        right: -4px;
        min-width: 20px;
        z-index: 30;
        text-align: center;
    }
</style>
