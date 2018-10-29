<template>
    <div class="bml">
        <bml-item v-for="(item,i) in bmls" :key="i" :bml="item"></bml-item>
    </div>
</template>
<script>
    import bmlItem from "@/components/Home/subCom_header/bml/bmlItem.vue"
    export default({
        data(){
            return {
                bmls:[]
            }
        },
        methods:{
            getBMLs(){
                this.$store.dispatch('homeBar/getBMLs');
                this.bmls=this.$store.state.homeBar.bmls;
            }
        },
        created() {
            this.getBMLs();
        },
        components:{
            bmlItem
        },
        props:[]
    })
</script>
<style>
    .bml{
        position: absolute;
        background: #fff;
        width:375px;
        padding:12px;
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
    }
</style>

