<template>
    <ul class="ul6-style">
        <ul6-li-style v-for="(item,i) in submission" :key="i" :sub="item"></ul6-li-style>
    </ul>
</template>
<script>
    import ul6LiStyle from "@/components/Home/subCom_header/ul6-style/ul6-li-style.vue"
    export default({
        data(){
            return{
                submission:[]
            }
        },
        methods:{
            getSubmission(){
                this.$store.dispatch('userBar/getSubmission');
                this.submission=this.$store.state.userBar.submission;
            }
        },
        created() {
            this.getSubmission();
        },
        components:{
            ul6LiStyle
        },
        props:[]
    })
</script>
<style scoped>
    .ul6-style{
        width: 360px;
        position: absolute;
        right: 0;
        top: 42px;
        background: #fff;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,.16);
        overflow: hidden;
        z-index: 1;
    }

</style>

