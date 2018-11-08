<template>
    <div class="wrapper-fashion">
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
                    {title:'美妆',tips:''},
                    {title:'服饰',tips:''},
                    {title:'健身',tips:''},
                    {title:'咨询',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-fashion{
        height: 2964px;
    }
    .wrapper-fashion{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-fashion{
            width: 980px;
        }   
    }
</style>

