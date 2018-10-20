<template>
    <router-link to="#" class="aApp">
        <img :src="smallAdImage" alt="">
        <span>{{smallAdImageText}}</span>
    </router-link>
</template>
<script>
    export default({
        data(){

        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['smallAdImage','smallAdImageText']
    })
</script>
<style>
    .aApp{
        width: 64px;
        height:104px;
        padding: 6px 12px 0;
        display: block;
        float: left;
        overflow: hidden;;
    }
    .aApp img{
        width: 100%;
        border-radius: 12px;
    }
    .aApp span{
        width: 4em;
        height:14px;
        margin:8px auto;
        display: block;
        font-size: 14px;
        line-height: 1;
        text-align: center;
        color:#222;
        overflow: hidden;
    }
</style>

