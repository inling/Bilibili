<template>
    <div class="appHeader">
        <top-nav></top-nav>
        <middle-nav :placeholder="placeholder"></middle-nav>
        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
    import topNav from '@/components/Home/subCom_header/topNav.vue';
    import middleNav from '@/components/Home/subCom_header/middleNav.vue';
    import bottomNav from '@/components/Home/subCom_header/bottomNav.vue';
    export default({
        data(){
            return {      
                placeholder:'姬雏MV：震撼灵魂的lemon',
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

<style>
    .appHeader{
        font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    }
    li.headli{
        float: left;
        position: relative;
        text-align: center;
        height: 42px;
        line-height: 42px;
    }
    li.headli:hover{
        background-color: hsla(0,0%,100%,.3);
    }

    a.heada{
        display: block;
        height: 100%;
        padding: 0 8px;
    }
    .b-icon {
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 12px;
        background: url(//static.hdslb.com/images/base/icons.png) no-repeat;
    }
</style>

