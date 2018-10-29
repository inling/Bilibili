<template>
    <router-link class="bmlItem" to="#">
        <img :src="bml.url_img" alt="" class="bmlbj">
    </router-link>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['bml']
    })
</script>
<style>
    .bmlItem{
        margin-bottom:12px;
        display: block;
        position: relative;
        transition:  color 0s;
    }
    .bmlItem .bmlbj{
        width: 100%;
        height:110px;
        border-radius:4px
    }
</style>

