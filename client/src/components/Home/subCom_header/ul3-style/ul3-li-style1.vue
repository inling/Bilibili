<template>
    <li class="homeBox" @click='alterPage(0)'>
        <router-link to="#">
            <div>首页</div>
        </router-link>
    </li>
</template>

<script>
    export default({
        data(){
            return{

            }
        },
        methods:{
            alterPage(pageIndex){
                this.$store.dispatch('global/getPageIndex',pageIndex);
            }
        },
        created() {
            
        },
        props:['pageIndex']
    })
</script>

<style scoped>
    @media screen and (min-width: 1400px){
        li.homeBox {
            margin-right: 18px;
        }
    }
    .homeBox{
        float: left;
        display: block;
        position: relative;
        margin-right: 9px;
    }
    .homeBox a{
        width: auto;
        background: url(/img/icons.png) -660px -1170px no-repeat;
        display: block;
        text-align: center;
    }
    .homeBox a div{
        position: relative;
        top:15px;
        line-height: 20px;
        display: inline-block;
        vertical-align: middle;
        color: #222;
        font-size: 12px;
        height: 48px;
        padding-top: 8px;
    }
</style>

