<template>
    <div class="sub-nav-m">
        <ul class="clearfix">
            <li v-for="(item,i) in subNav" :key="i" :class="{on:i==current}" @click="clickCurrent(i)">
                <router-link to="#">{{item.title}}</router-link>
            </li>
        </ul>
        <!--
        <div class="tips" style="display: block; top: 30px; left: 143.5px;">
            <i class="t-arrow" style="left: 167px;"></i>
            <p>{{subNav[current].tips}}</p>
        </div>
        -->
    </div>
</template>

<script>
    export default({
        data(){
            return{
                current:0
            }
        },
        methods:{
            clickCurrent(id){
                this.current=id;
            }
        },
        created() {
            
        },
        components:{

        },
        props:['subNav']
    })
</script>

<style scoped>
    .sub-nav-m{
        position: relative;
        margin: 10px 0 20px;
    }
    .sub-nav-m ul{

    }
    .sub-nav-m ul li{
        float: left;
        margin-left: 40px;
    }
    .sub-nav-m ul li:first-child{
        margin-left: 0;
    }

    .sub-nav-m ul li.on a{
        color: #00a1d6;
    }
    .sub-nav-m ul li a{
        height: 28px;
        font-size: 14px;
        color: #6d757a;
        line-height: 28px;
        display: block;
        position: relative;
    }

/*下拉条
    .sub-nav-m .tips {
        position: absolute;
        border-radius: 4px;
        border: 1px solid #ddd;
        line-height: 30px;
        padding: 0 10px;
        background-color: #fff;
        z-index: 10;
        display: none;
        transition: all .2s;
    }

    .sub-nav-m .tips .t-arrow {
        position: absolute;
        top: -5px;
        height: 5px;
        width: 8px;
        transition: all .2s;
        background: url(/img/s_arrow.png) 0 -49px no-repeat;
    }
    .sub-nav-m .tips p{
        font-size:12px;
    }
    */
</style>

