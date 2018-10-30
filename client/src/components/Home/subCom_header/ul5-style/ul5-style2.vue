<template>
    <div class="ul5-style">
        <ul class="his">
            <div>
                <ul5-li-style v-for="(item,i) in collection" :key="i" :laterSee="item"></ul5-li-style>
            </div>
        </ul>
        <div class="read-more-grp">
            <router-link to="#" target="_blank" class="read-more mr">
                播放全部
                <i class="b-icon b-icon-arrow-r"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
    import ul5LiStyle from "@/components/Home/subCom_header/ul5-style/ul5-li-style.vue"
    export default({
        data(){
            return{
                collection:[]
            }
        },
        methods:{
            getCollections(){
                this.$store.dispatch('userBar/getCollection');
                this.collection=this.$store.state.userBar.collection;
            }
        },
        created() {
            this.getCollections();
        },
        components:{
            ul5LiStyle
        },
        props:[]
    })
</script>
<style scoped>
    .ul5-style{
        position: absolute;
        left: -163px;
        top: 42px;
        background-color: #fff;
        width: 320px;
        box-shadow: 0 2px 4px rgba(0,0,0,.16);
        border: 1px solid #e5e9ef;
        border-radius: 0 0 4px 4px;
        z-index: 200;
        padding: 4px 12px 12px;
    }
    .ul5-style ul{
        padding-top:10px;
        padding-bottom: 5px;
    }
    .ul5-style .read-more-grp{
        display: flex;
        justify-content: space-around
    }
    .ul5-style .read-more-grp a{
        display: block;
        background-color:#e5e9ef;
        border:1px solid #e0e6ed; 
        width: 100%;
        text-align: center;
        height:22px;
        line-height: 22px;
        color: #222;
        border-radius: 4px;
    }
    .ul5-style .read-more-grp .read-more:hover{
        background-color:#ccd0d7;
    }
    
</style>

