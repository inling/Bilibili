<template>
    <div class="bml">
        <bml-item v-for="(item,i) in nmls" :key="i" :nml="item"></bml-item>
    </div>
</template>
<script>
    import bmlItem from "@/components/Home/subCom_header/bml/bmlItem.vue"
    export default({
        data(){
            return {
                nmls:[
                    {url_img:'img/bml/bmlbj2.png'},
                    {url_img:'img/bml/bmlsh2.png'}
                ]
            }
        },
        methods:{

        },
        created() {
            
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

