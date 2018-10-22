<template>
    <router-link to="#" class="aApp">
        <img :src="smallAdImage" alt="">
        <span>{{smallAdImageText}}</span>
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
        props:['smallAdImage','smallAdImageText']
    })
</script>
<style>
    .aApp{
        width: 88px;
        height:110px;
        padding: 6px 12px 0;
        display: block;
        float: left;
        overflow: hidden;
        line-height: 1;
    }
    .aApp:hover{
        background-color: #e5e9ef
    }
    .aApp img{
        width: 64px;
        height: 64px;
        border-radius: 12px;
    }
    .aApp span{
        width: 4em;
        height:14px;
        margin:8px auto;
        display: block;
        font-size: 14px;
        text-align: center;
        color:#222;
        overflow: hidden;
        line-height: 1;
    }
</style>

