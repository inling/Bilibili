<template>
    <ul class="ul3-style">
        <!--首页-->
        <ul3-li-style1></ul3-li-style1>
        <!--动画、番剧、国创。。。。。放映厅-->
        <ul3-li-style2 v-for="(item,i) in navlists" :key="i" :navName="item.navName" :numWrap="item.numWrap" :subLis="item.subLis" :pageIndex="i" :class="{on:pageIndex==i+1}"></ul3-li-style2>
        <!--专栏,广场,直播,小黑屋-->
        <ul3-li-style3 v-for="(item,i) in sideNavlists" :key="i+15" :iname="item.iname" :sname="item.sname"></ul3-li-style3>
    </ul>
</template>

<script>
    import ul3LiStyle1 from "@/components/Home/subCom_header/ul3-style/ul3-li-style1.vue";
    import ul3LiStyle2 from "@/components/Home/subCom_header/ul3-style/ul3-li-style2.vue";
    import ul3LiStyle3 from "@/components/Home/subCom_header/ul3-style/ul3-li-style3.vue";
    export default({
        data(){
            return {
                navlists:[],
                sideNavlists:[],
            }
        },
        methods:{
            getNavlists(){
                this.$store.dispatch('category/getNavlists');
                this.navlists=this.$store.state.category.navlists;
            },
            getSideNavlists(){
                this.$store.dispatch('category/getSideNavlists');
                this.sideNavlists=this.$store.state.category.sideNavlists;
            },
        },
        created() {
            this.getNavlists();
            this.getSideNavlists();
        },
        components:{
            ul3LiStyle1,
            ul3LiStyle2,
            ul3LiStyle3
        },
        computed:{
            pageIndex(){
                return this.$store.getters['global/pageIndex'];
            }
        },
        props:[]
    })
</script>

<style>
    .ul3-style{
        position: relative;
        z-index: 200;
        height: 42px;
        color: #222;
    }   

    
    .ul3-style li.on .nav-name{
        color: #00a1d6;
    }
    .ul3-style li.on::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #00a1d6;
        bottom: -3px;
    }
</style>

