<template>
    <div class="wrapper-kichiku">
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
                    {title:'鬼畜调教',tips:''},
                    {title:'音MAD',tips:''},
                    {title:'人力VOCALOID',tips:''},
                    {title:'教程演示',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-kichiku{
        height: 2717px;
    }
    .wrapper-kichiku{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-kichiku{
            width: 980px;
        }   
    }
</style>

