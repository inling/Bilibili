<template>
    <div class="appWrapper">
        <wrapperHome></wrapperHome>
    </div>
</template>
<script>
    import wrapperHome from '@/components/Home/wrapper/wrapper-home.vue'
    export default({
        data(){
            return{
      
            }
        },
        methods:{
        },
        created() {
        },
        components:{
            wrapperHome
        },
        props:[]
    })    
</script>
<style>
    .recommand-module{
        height: 220px;
        position: relative;
        overflow: hidden;
    }
    .groom-module{
        width: 160px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
    }

</style>
