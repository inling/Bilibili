<template>
    <div class="wrapper-ent">
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
                    {title:'综艺',tips:''},
                    {title:'明星',tips:''},
                    {title:'Korea相关',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-ent{
        height: 2307px;
    }
    .wrapper-ent{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-ent{
            width: 980px;
        }   
    }
</style>

