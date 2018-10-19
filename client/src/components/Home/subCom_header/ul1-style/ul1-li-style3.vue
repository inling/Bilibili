<template>
    <li title="下载APP" class="ul1-li-style3 headli">
        <router-link to="#" class="heada">
            <i class="bili-icon"></i>
                下载APP
        </router-link>
    </li>
</template>

<script>
    export default({
        data(){
            return{

            }
        },
        methods:{

        },
        created() {
            
        },
        components:{

        },
        props:['liTitle','liText']
    })
</script>

<style scoped>
    .ul1-li-style3{
        padding: 0 10px;
    }
    .ul1-li-style3 a{
        padding: 0;
    }
    .ul1-li-style3 a i{
        display: inline-block;
        width: 16px;
        height:21px;
        background-position: -1371px -1175px;
        vertical-align: middle;
    }
</style>

