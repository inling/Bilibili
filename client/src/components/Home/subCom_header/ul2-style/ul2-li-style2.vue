<template>
    <li :title="liTitle" class="ul2-li-style2 headli">
        <router-link to="#" class="heada">{{liText}}
            <div class="num" v-show='mesNum!=0'>{{mesNum}}</div>
        </router-link>
    </li>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created(){

        },
        components:{
        },
        props:['liTitle','liText','mesNum']
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
