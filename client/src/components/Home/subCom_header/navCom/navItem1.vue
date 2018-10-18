<template>
    <li class="nav-item1">
        <router-link to="#">
            <div class="num-wrap">
                <span>{{numWrap}}</span>
            </div>
            <div class="nav-name">{{navName}}</div>
        </router-link>
    </li>
</template>

<script>
    export default({
        data(){
            return {

            }
        },
        methods:{

        },
        created() {
            
        },
        props:['numWrap','navName']      
    })
</script>

<style>
    @media screen and (min-width: 1400px){
        li.nav-item1{
            margin-right: 11px;
        }
    }
    .nav-item1{
        float: left;
        display: block;
        position: relative;
    }
    .nav-item1 a{
        width: 48px;
        text-align: center;
        display: block;
    }
    .nav-item1 a .num-wrap{
        position: absolute;
        top: 8px;
        left: 0;
        height: 14px;
        width: 100%;
        text-align: center;
    }
    .nav-item1 a .num-wrap span{
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        transform: scale(.85);
        color: #fff;
        background-color: #ffafc9;
        border-radius: 3px;
        height: 14px;
        line-height: 14px;
        max-width: 34px;
        padding: 1px 3px;
        font-family: sans-serif;
    }
    .nav-item1 a .nav-name{
        display: inline-block;
        vertical-align: middle;
        color: #222;
        font-size: 12px;
        height: 48px;
        padding-top: 8px;
        line-height: 50px;
    }
</style>
