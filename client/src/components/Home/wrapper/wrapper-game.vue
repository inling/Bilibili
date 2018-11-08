<template>
    <div class="wrapper-game">
        <sub-nav :subNav="subNavItems"></sub-nav>
    </div>
</template>

<script>
    import subNav from '@/components/Home/subCom_wrapper/sub-nav.vue'
    export default({
        data(){
            return{
                subNavItems:[
                    {title:'全部',tips:''},
                    {title:'单机游戏',tips:''},
                    {title:'电子竞技',tips:''},
                    {title:'手机游戏',tips:''},
                    {title:'网络游戏',tips:''},
                    {title:'桌游棋牌',tips:''},
                    {title:'GMV',tips:''},
                    {title:'音游',tips:''},
                    {title:'Mugen',tips:''},
                    {title:'游戏赛事',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-game{
        height: 3260px;
    }
    .wrapper-game{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-game{
            width: 980px;
        }   
    }
</style>

