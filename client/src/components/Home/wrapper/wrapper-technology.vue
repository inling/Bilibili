<template>
    <div class="wrapper-technology">
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
                    {title:'趣味科普人生',tips:''},
                    {title:'野生技术协会',tips:''},
                    {title:'演讲·公开课',tips:''},
                    {title:'星海',tips:''},
                    {title:'数码',tips:''},
                    {title:'机械',tips:''},
                    {title:'汽车',tips:''}
                ]
            }
        },
        components:{
            subNav
        }
    })
</script>

<style>
    .wrapper-technology{
        height: 4697px;
    }
    .wrapper-technology{
        margin: 0 auto;
        width: 1160px;
    }
    @media screen and (max-width: 1400px){
        .wrapper-technology{
            width: 980px;
        }   
    }
</style>

