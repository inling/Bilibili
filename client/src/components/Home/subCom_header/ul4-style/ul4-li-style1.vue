<template>
    <li class="ul4-li-style1">
        <router-link to="#">
            <span>{{subLi}}</span>
        </router-link>
    </li>
</template>

<script>
    export default({
        data(){
            return{

            }
        },
        methods:{

        },
        created() {
            
        },
        props:['subLi']
    })
</script>

<style scoped>
    .ul4-li-style1,.ul4-li-style1>a{
        position: relative;
        overflow: hidden;
        transition: all .2s;
    }
    .ul4-li-style1{
        font-size: 12px;
        line-height: 20px;
        min-width: 120px;
        height: auto;
        text-align: left;
        z-index:2;
    }
    .ul4-li-style1 a{
        display: block;
        padding: 5px 15px 5px 25px;
        margin-right: 10px;
        background: url(/img/icons2.png) no-repeat 12px -1613px;
        white-space: nowrap;
        left: 0;
        color: #222;
        width:135px;
        text-align: left;
    }
    .ul4-li-style1 a span{
        position: relative;
    }

    .ul4-li-style1:hover{
        background-color: #e5e9ef;
    }
    .ul4-li-style1:hover a{
        left:5px;
    }
    .ul4-li-style1:hover a span::after{
        right: -21px;
        opacity: 1;
    }
    .ul4-li-style1 a span::after{
        content: "";
        background: url(/img/icons2.png) no-repeat 0 -1581px;
        width: 15px;
        height: 18px;
        display: block;
        position: absolute;
        right: -100px;
        top: -3px;
        transition: all .2s;
        opacity: 0;
    }
</style>

