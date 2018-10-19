<template>
    <ul class="ul1-style">
        <ul1-li-style1></ul1-li-style1>
        <ul1-li-style2 v-for="(item,i) in liContent" :key="i" :liTitle="item.liTitle" :liText="item.liText"></ul1-li-style2>
        <ul1-li-style3></ul1-li-style3>
    </ul>
</template>
<script>
    import ul1LiStyle1 from "@/components/Home/subCom_header/ul1-style/ul1-li-style1.vue"
    import ul1LiStyle2 from "@/components/Home/subCom_header/ul1-style/ul1-li-style2.vue"
    import ul1LiStyle3 from "@/components/Home/subCom_header/ul1-style/ul1-li-style3.vue"
    export default({
        data(){
            return {

            }
        },
        methods:{

        },
        created() {
            
        },
        components:{
            ul1LiStyle1,
            ul1LiStyle2,
            ul1LiStyle3
        },
        props:['liContent']
    })    
</script>
<style>
    .ul1-style{
        position: relative;
    }
</style>

