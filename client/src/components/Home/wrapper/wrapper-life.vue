<template>
    <div class="wrapper-life">
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
                    {title:'搞笑',tips:''},
                    {title:'日常',tips:''},
                    {title:'美食圈',tips:''},
                    {title:'动物圈',tips:''},
                    {title:'手工',tips:''},
                    {title:'绘画',tips:''},
                    {title:'运动',tips:''},
                    {title:'其他',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-life{
        height: 5275px;
    }
    .wrapper-life{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-life{
            width: 980px;
        }   
    }
</style>

