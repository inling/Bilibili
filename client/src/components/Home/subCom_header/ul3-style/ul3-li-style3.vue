<template>
    <li class="side-nav">
        <router-link to="#" class="side-link">
            <i :class="iname"></i>
            <span>{{sname}}</span>
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
        props:['iname','sname']      
    })
</script>

<style>
    @media screen and (min-width: 1400px){
        .bottomNav .primary-menu .nav-bar li.side-nav {
            margin: 0 6px;
        }
    }
    .bottomNav .side-nav{
        width: 40px;
        margin: 0 4px;
        text-align: center;
        float: left;
        display: block;
        position: relative;
    }

    .bottomNav .side-nav .side-link{
        display: inline-block;
        position: relative;
        overflow: hidden;
    }

    .bottomNav .side-nav .side-link i{
        display: block;
        width: 18px;
        height: 18px;
        margin: 3px auto 2px;
        background: url(/img/icons.png)  no-repeat;
    }
    .bottomNav .side-nav .side-link i.zhuanlan{
        background-position: -87px -1814px
    }
    .bottomNav .side-nav .side-link i.square{
        background-position: -87px -2006px;
    }
    .bottomNav .side-nav .side-link i.live{
        background-position: -87px -1878px;
    }
    .bottomNav .side-nav .side-link i.blackroom{
        background-position: -87px -1942px;
    }
        
</style>
