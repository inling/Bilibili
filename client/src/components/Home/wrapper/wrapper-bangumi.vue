<template>
    <div class="wrapper-bangumi">
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
                    {title:'连载动画',tips:''},
                    {title:'完结动画',tips:''},
                    {title:'咨询',tips:''},
                    {title:'官方延伸',tips:''},
                    {title:'新番时间表',tips:''},
                    {title:'番剧索引',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-bangumi{
        height: 3337px;
    }
    .wrapper-bangumi{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-bangumi {
            width: 980px;
        }   
    }
</style>

