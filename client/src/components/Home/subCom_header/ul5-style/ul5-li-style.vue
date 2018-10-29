<template>
    <li class="ul5-li-style">
        <router-link to="laterSee.href" target="_blank" :title="laterSee.title">· {{laterSee.title}}</router-link>
    </li>
</template>
<script>
    export default({
        data(){
            return{}
        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['laterSee']
    })
</script>
<style scoped>
    .ul5-li-style{
        clear: both;
        position: relative;
        padding-left: 38px;
        height: 28px;
        line-height: 28px;
        text-align: left;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 12px 0 22px;
        width: 100%;
    }
    .ul5-li-style a{
        max-width: none;
        float: inherit;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        color: #222;
        transition: color .2s;
    }
    .ul5-li-style a:hover{
        color: #00a1d6;
    }
    .ul5-li-style:hover{
        background-color: #e5e9ef
    }
</style>

