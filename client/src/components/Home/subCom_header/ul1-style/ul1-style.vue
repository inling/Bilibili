<template>
    <ul class="ul1-style">
        <ul1-li-style1></ul1-li-style1>
        <ul1-li-style2 v-for="(item,i) in barContent" :key="i" :liTitle="item.title" :liText="item.text" :downDiv="item.downDiv"></ul1-li-style2>
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
                barContent:[]
            }
        },
        methods:{
            getBarContent(){
                this.$store.dispatch('homeBar/getBarContent');
                this.barContent=this.$store.state.homeBar.barContent;               
            }
        },
        created() {
            this.getBarContent();
        },
        components:{
            ul1LiStyle1,
            ul1LiStyle2,
            ul1LiStyle3
        },
        props:[]
    })    
</script>
<style>
    .ul1-style{
        position: relative;
    }
</style>

