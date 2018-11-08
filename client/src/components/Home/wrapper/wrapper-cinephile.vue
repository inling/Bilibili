<template>
    <div class="wrapper-cinephile">
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
                    {title:'影视杂谈',tips:''},
                    {title:'影视剪辑',tips:''},
                    {title:'短片',tips:''},
                    {title:'预告·咨询',tips:''},
                    {title:'特摄',tips:''},
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-cinephile{
        height: 3400px;
    }
    .wrapper-cinephile{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-cinephile{
            width: 980px;
        }   
    }
</style>

