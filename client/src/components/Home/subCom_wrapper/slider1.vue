<template>
    <div class="slider1">
        <div class="slider1-module">
            <div class="panel">
                <ul class="pic">
                    <li class="scrollx" v-for="(item,i) in slider1" :key="i">
                        <router-link to="#">
                            <div class="lazy-img">
                                <img :src="item.src" alt="">
                            </div>
                        </router-link>
                    </li>
                </ul>
                <ul class="title">
                    <router-link to="#" class="on"><!---->
                    脑洞妆容大比拼
                    </router-link>
                    <router-link to="#" class="">
                    预售开启！神秘角色上线？
                    </router-link>
                    <router-link to="#" class=""><!---->
                    《剑网三·侠肝义胆沈剑心》究竟讲了什么？
                    </router-link>
                    <router-link to="#" class=""><!---->
                    你喜欢的上榜了嘛？
                    </router-link>
                    <router-link to="#" class=""><!---->
                    参与双十一投稿，赢清空购物车大奖！
                    </router-link>
                </ul>
                <ul class="trig">
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class="on"></span>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                slider1:[{src:'img/slider/1/s1.jpg',title:'脑洞妆容大比拼'},
                    {src:'img/slider/1/s2.jpg',title:'预售开启！神秘角色上线？'},
                    {src:'img/slider/1/s3.jpg',title:'《剑网三·侠肝义胆沈剑心》究竟讲了什么？'},
                    {src:'img/slider/1/s4.jpg',title:'你喜欢的上榜了嘛？'},
                    {src:'img/slider/1/s5.jpg',title:'参与双十一投稿，赢清空购物车大奖！'}]
            }
        }
    }
</script>

<style scoped>
    .slider1{
        width: 440px;
        height:220px;
        float:left;
    }
    .slider1 .slider1-module,.slider1-module .panel{
        position: relative;
        width: 100%;
        height:100%;
    }
    .slider1 .slider1-module .panel{
        border-radius:4px;
        overflow: hidden;
    }
    .slider1 .slider1-module .panel .pic{
        width: 500%;
        z-index:1;
        position: relative;
        transition: all .3s;
    }
    .slider1 .slider1-module .panel .pic .scrollx{
        position: relative;
        float:left;
    }
    .slider1 .slider1-module .panel .pic .scrollx a{
        display: inline-block;
    }
    .slider1 .slider1-module .panel .pic .scrollx a .lazy-img{
        background: url(/img/img_loading.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .slider1 .slider1-module .panel .pic .scrollx a .lazy-img img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>


