<template>
    <li class="ul6-li-style ">
        <i :style="sub.position" class="bili-icon"></i>
        <span>{{sub.title}}</span>
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
        props:['sub']
    })    
</script>
<style>
    .ul6-li-style{
        cursor: pointer;
        text-align: center;
        width: 72px;
        height: 64px;
        transition: .2s;
        float: left;
        position: relative;
        background: #fff;
    } 
    .ul6-li-style:hover{
        background-color: #e5e9ef
    }
    .ul6-li-style:hover i{
        transform: translateY(-2px);
    }
    .ul6-li-style i{
        display: block;
        width: 20px;
        height: 20px;
        margin: 15px auto 2px;
        transition: .2s;
    }
    .ul6-li-style span{
        color: #f25d8e;
    }
</style>

