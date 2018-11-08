<template>
    <div class="wrapper-music">
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
                    {title:'原创音乐',tips:''},
                    {title:'翻唱',tips:''},
                    {title:'VOCALOID·UTAU',tips:''},
                    {title:'演奏',tips:''},
                    {title:'三次元音乐',tips:''},
                    {title:'OP/ED/OST',tips:''},
                    {title:'音乐选集',tips:''},
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-music{
        height: 4698px;
    }
    .wrapper-music{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-music{
            width: 980px;
        }   
    }
</style>

