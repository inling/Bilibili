<template>
    <router-link  class="aAct" to="#">
        <img class="act-banner" :src="act.url_img" alt="">
    </router-link>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created(){

        },
        components:{

        },
        props:['act']
    })
</script>
<style scoped>
    .aAct{
        display: block;
        padding: 10px 21px;
        margin-left: -21px;
        width: 250px;
        height: 100px;
    }
    .aAct:hover{
        background: #eaeaea;
    }
    .aAct .act-banner{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 3px;
    }
</style>

