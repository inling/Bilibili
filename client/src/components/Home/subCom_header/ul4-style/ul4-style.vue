<template>
    <ul class="ul4-style sub-nav">
        <ul4-li-style1 v-for="(item,i) in subLis" :key="i" :subLi="item"></ul4-li-style1>
    </ul>
</template>
<script>
    import ul4LiStyle1 from "@/components/Home/subCom_header/ul4-style/ul4-li-style1.vue";
    export default({
        data(){
            return{}
        },
        methods:{

        },
        created() {
            
        },
        components:{
            ul4LiStyle1
        },
        props:['subLis']
    })
</script>
<style>
    .sub-nav{
        position: absolute;

        left:0;
        overflow:hidden;
        top:44px;
        background: #fff;
        border-top:0;
        box-shadow: 0 2px 4px rgba(0,0,0,.16);
        border-radius:0 0 4px 4px ;
    }
    
</style>
