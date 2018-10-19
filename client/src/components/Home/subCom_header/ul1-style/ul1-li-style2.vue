<template>
    <li :title="liTitle" class="headli">
        <router-link to="#" class="heada">{{liText}}</router-link>
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
    
</style>

