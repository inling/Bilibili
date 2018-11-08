<template>
    <div class="wrapper-dance">
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
                    {title:'宅舞',tips:''},
                    {title:'三次元舞蹈',tips:''},
                    {title:'舞蹈教程',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-dance{
        height: 2218px;
    }
    .wrapper-dance{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-dance{
            width: 980px;
        }   
    }
</style>

