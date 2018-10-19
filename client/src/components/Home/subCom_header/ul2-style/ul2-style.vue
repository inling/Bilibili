<template>
    <ul class="ul2-style">
        <ul2-li-style1 :iface="iface"></ul2-li-style1>
        <ul2-li-style2 :liTitle="liTitle" :liText="liText" :mesNum="mesNum"></ul2-li-style2>
    </ul>
</template>
<script>
    import ul2LiStyle1 from "@/components/Home/subCom_header/ul2-style/ul2-li-style1.vue"
    import ul2LiStyle2 from "@/components/Home/subCom_header/ul2-style/ul2-li-style2.vue"
    export default({
        data(){
            return {
                liTitle:'历史',
                liText:'历史',
                mesNum:0,
                iface:'img/header/akari.jpg'
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
        props:[]
    })
</script>
<style scoped>

</style>

