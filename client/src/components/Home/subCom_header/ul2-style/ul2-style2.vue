<template>
    <ul class="ul2-style">
        <ul2-li-style1 :iface="user.iface"></ul2-li-style1>
        <ul2-li-style2 v-for="(item,i) in message" :key="i" :liTitle="item.liTitle" :liText="item.liText" :mesNum="item.mesNum" :downDiv="item.downDiv"></ul2-li-style2>
    </ul>
</template>
<script>
    import ul2LiStyle1 from "@/components/Home/subCom_header/ul2-style/ul2-li-style1.vue"
    import ul2LiStyle2 from "@/components/Home/subCom_header/ul2-style/ul2-li-style2.vue"
    export default({
        data(){
            return {
            }
        },
        methods:{

        },
        created(){

        },
        components:{
            ul2LiStyle1,
            ul2LiStyle2
        },
        props:['message','user']
    })
</script>
<style>

</style>

