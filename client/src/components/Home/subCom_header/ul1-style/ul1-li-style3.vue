<template>
    <li title="下载APP" class="ul1-li-style3 headli" @mouseover="setMouseOver" @mouseout="setMouseOut">
        <router-link to="#" class="heada">
            <i class="bili-icon"></i>下载APP
        </router-link>
        <transition name="box-show">
            <div class="app-orcode-box" v-show="isShowBox"></div>
        </transition>
    </li>
</template>

<script>
    export default({
        data(){
            return{
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
        created() {
            
        },
        components:{

        },
        props:['liTitle','liText']
    })
</script>

<style scoped>
    .ul1-li-style3{
        padding: 0 10px;
    }
    .ul1-li-style3 a{
        padding: 0;
    }
    .ul1-li-style3 a i{
        display: inline-block;
        width: 16px;
        height:21px;
        background-position: -1371px -1175px;
        vertical-align: middle;
    }
    .ul1-li-style3 .app-orcode-box{
        position: absolute;
        background: red;
        left: -20px;
        top: 42px;
        width: 259px;
        height: 174px;
        background: url(/img/header/orcode-frame.png);
    }
    .app-orcode-box::before{
        content: "";
        position: absolute;
        width: 97px;
        height: 97px;
        left: 82px;
        top: 30px;
        background: url(/img/header/erW.png);
    }
</style>

