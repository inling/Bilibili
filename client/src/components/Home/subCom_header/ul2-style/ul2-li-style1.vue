<template>
    <li class="ul2-li-style1 profile-info headli">
        <router-link to="#" class="heada">
            <div class="i-face">
                <img :src="iface" alt="" class="face">
            </div>
        </router-link>
    </li>
</template>
<script>
    export default({
        data(){
            return {}
        },
        methods:{

        },
        created(){

        },
        components:{
        },
        props:['iface']
    })
</script>
<style scoped>
    .profile-info{
        position: relative;
        float: left;
        height: 42px;
        width: 58px;
    }
    .profile-info a{
        height:100%;
    }
    .profile-info a .i-face {
        position: absolute;
        left:11px;
        top:0;
        width: 36px;
        height: 36px;
        z-index:20;
        line-height: 42px;
    }
    .profile-info a .i-face .face{
        width: 100%;
        border-radius:50%;
        vertical-align: middle;
    }
</style>
