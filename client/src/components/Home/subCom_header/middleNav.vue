<template>
    <div class="middleNav" :style="bgImage">
        <div class="head-content bili-wrapper">
            <div class="search">
                <form class="searchform">
                    <input type="text" class="search-keyword" :placeholder="placeholder">
                    <button type="submit" class="search-submit"></button>
                </form>
                <router-link to="#" class="link-ranking">
                    <span>排行榜</span>
                </router-link>
            </div>
            <router-link to="#" :style="bgImageIcon"></router-link>
        </div>
    </div>
</template>
<script>
    export default({
        data(){
            return {

            }
        },
        methods:{

        },
        created(){

        },
        props:['bgImage','bgImageIcon','placeholder']
    })
</script>
<style scoped>
    @media screen and (max-width:1400px){
        .middleNav .head-content.bili-wrapper {
            width: 980px;
        }
    }
    .middleNav{
        position: relative;
        height:170px;
        background: #eee;
        background-position: center -10px;
        margin-top: -42px;
    }
    .middleNav .head-content{
        position: relative;
        margin:0 auto;
        height:170px;
        width:1160px;
    }
    .middleNav .head-content .search{
        position: absolute;
        right:0;
        bottom:20px;
        width: 342px;
        height:36px;
        padding:2px 2px 2px 72px;
        border-radius: 6px;
        font-size: 12px;
        background-color: rgba(0,0,0,.12);
    } 
    .middleNav .head-content .search .searchform{
        background-color: hsla(0,0%,100%,.88);
        display: block;
        height:32px;
        border-radius:4px;
        transition: background-color .2s;
    }
    .middleNav .head-content .search .searchform:hover{
        background-color: #fff;
    }      
    .middleNav .head-content .search .searchform .search-keyword{
        float: left;
        width:224px;
        height:32px;
        line-height: 32px;
        color: #222;
        font-size:12px;
        overflow: hidden;
        padding:0 12px;
        border:0;
        box-shadow: none;
        background-color:transparent;
    }
    .middleNav .head-content .search .searchform .search-keyword:focus{
        outline: none;
    }
    .middleNav .head-content .search .searchform .search-submit{
        display: block;
        position: absolute;
        right: 0;
        width: 48px;
        min-width: 0;
        cursor: pointer;
        height: 32px;
        background: url(/img/icons.png) -653px -720px;
        border: 0;
    }
    .middleNav .head-content .search .searchform .search-submit:hover{
        background-position: -718px -720px;        
    }
    .middleNav .head-content .search .searchform .search-submit:focus{
        outline: none;  
    }
    .middleNav .head-content .search .link-ranking{
        position: absolute;
        left:2px;
        top:2px;
        height:32px;
        line-height: 32px;
            background-color: #fff;
        background-color: hsla(0,0%,100%,.88);
        border-radius: 4px;
        width: 68px;
        transition: background-color .2s;
    }
    .middleNav .head-content .search .link-ranking:hover{
        background-color: #fff
    }
    .middleNav .head-content .search .link-ranking span{
        padding-left: 26px;
        color: #f25d8e;
        display: inline-block;
        background: url(/img/icons.png) -659px -655px no-repeat;
    }
    .middleNav .head-content a{
        position: absolute;
        width:220px;
        height:105px;
        left:24px;
        top:55px;
    }
</style>

