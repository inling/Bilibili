<template>
    <ul class="ul2-style">
        <ul2-li-style1 :iface="user.iface"></ul2-li-style1>
        <ul2-li-style2 v-for="(item,i) in barContent" :key="i" :liTitle="item.title" :liText="item.text" :mesNum="item.mesNum" :downDiv="item.downDiv"></ul2-li-style2>
    </ul>
</template>
<script>
    import ul2LiStyle1 from "@/components/Home/subCom_header/ul2-style/ul2-li-style1.vue"
    import ul2LiStyle2 from "@/components/Home/subCom_header/ul2-style/ul2-li-style2.vue"
    export default({
        data(){
            return {
                barContent:[]
            }
        },
        methods:{
            getBarContent(){
                this.$store.dispatch('userBar/getBarContent');
                this.barContent=this.$store.state.userBar.barContent;
            }
        },
        created(){
            this.getBarContent();
        },
        components:{
            ul2LiStyle1,
            ul2LiStyle2
        },
        props:['user']
    })
</script>
<style>

</style>

