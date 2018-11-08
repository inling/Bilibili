<template>
    <div class="wrapper-guochuang">
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
                    {title:'国产动画',tips:''},
                    {title:'国产原创相关',tips:''},
                    {title:'布袋戏',tips:''},
                    {title:'咨询',tips:''},
                    {title:'新番时间表',tips:''},
                    {title:'国产动画索引',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-guochuang{
        height: 3001px;
    }
    .wrapper-guochuang{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-guochuang {
            width: 980px;
        }   
    }
</style>

