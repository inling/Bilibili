<template>
    <div class="appWrapper">
        <div style="width:980px;height:260px;margin:0 auto" id="chief_recommend">chief_recommend</div>
        <div style="width:980px;height:228px;margin:0 auto" id="home_popularize">推广</div>
        <div v-for="(item,i) in modules" :key="i"  :id="item.id" :sortindex="item.sortindex">{{item.id}}</div>
        <div  id="special_recommend">special_recommend</div>
    </div>
</template>
<script>
    export default({
        data(){
            return{
                modules:[]
            }
        },
        methods:{
            getModules(){
                this.$store.dispatch('elevator/getModules');
                this.modules=this.$store.state.elevator.modules;
            }
        },
        created() {
            this.getModules();
        },
        components:{
        },
        props:[]
    })    
</script>
<style>
    .appWrapper div{
        border:1px solid red;
    }
    .appWrapper #chief_recommend{
        padding-bottom: 40px;
    }
    .appWrapper #home_popularize{
        padding-bottom: 15px;
    }
    .appWrapper #bili_live{
        padding-bottom: 30px;
        width:980px;height:511px;margin:0 auto
    }
    .appWrapper #bili_audio{
        padding-bottom: 30px;
        width:980px;height:485px;margin:0 auto
    }
    .appWrapper #bili_bangumi{
        padding-bottom: 30px;
        width:980px;height:1014px;margin:0 auto
    }
    .appWrapper #bili_douga{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_guochuang{
        padding-bottom: 30px;
        width:980px;height:830px;margin:0 auto
    }
    .appWrapper #bili_music{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_dance{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_game{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_technology{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_life{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_movie{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_cinephile{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_fashion{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_kichiku{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_teleplay{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_ent{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_documentary{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #bili_ad{
        padding-bottom: 30px;
        width:980px;height:411px;margin:0 auto
    }
    .appWrapper #special_recommend{
        padding-bottom: 30px;
        width:980px;height:235px;margin:0 auto
    }
</style>
