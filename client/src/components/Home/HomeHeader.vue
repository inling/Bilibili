<template>
    <div class="appHeader">
        <top-nav :islogin="islogin" :user="user" :bgImage="bgImages[index]"></top-nav>
        <middle-nav :bgImage="bgImages[index]" :bgImageIcon="bgImageIcon[index]" :placeholder="placeholder"></middle-nav>
        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
    import topNav from '@/components/Home/subComponent/topNav.vue';
    import middleNav from '@/components/Home/subComponent/middleNav.vue';
    import bottomNav from '@/components/Home/subComponent/bottomNav.vue';
    export default({
        data(){
            return {
                islogin:true,
                user:{
                    iface:"img/header/noface.gif",
                    num:50
                },          
                bgImages:[
                    {backgroundImage:`url(/img/header/h-1.png)`},
                    {backgroundImage:`url(/img/header/h-2.png)`},
                    {backgroundImage:`url(/img/header/h-3.png)`},
                    {backgroundImage:`url(/img/header/h-4.png)`},
                    {backgroundImage:`url(/img/header/h-5.png)`},
                    {backgroundImage:`url(/img/header/h-6.png)`},
                ],
                bgImageIcon:[
                    {backgroundImage:`url(/img/header/h-1-icon.png)`},
                    {backgroundImage:`url(/img/header/h-2-icon.png)`},
                    {backgroundImage:`url(/img/header/h-3-icon.png)`},
                    {backgroundImage:`url(/img/header/h-4-icon.png)`},
                    {backgroundImage:`url(/img/header/h-5-icon.png)`},
                    {backgroundImage:`url(/img/header/h-6-icon.png)`},
                ],
                placeholder:'姬雏MV：震撼灵魂的lemon',
                index:0
            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            topNav,
            middleNav,
            bottomNav
        }
    })
</script>

<style scoped>
    .appHeader{
        font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    }
</style>

