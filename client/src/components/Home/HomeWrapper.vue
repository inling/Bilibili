<template>
    <div class="appWrapper">
        <transition name="fade">
            <component :is="components[pageIndex]"></component>
        </transition>
    </div>
</template>
<script>
    import wrapperHome from '@/components/Home/wrapper/wrapper-home.vue'
    import wrapperDouga from '@/components/Home/wrapper/wrapper-douga.vue'
    import wrapperBangumi from '@/components/Home/wrapper/wrapper-bangumi.vue'
    import wrapperGuochuang from '@/components/Home/wrapper/wrapper-guochuang.vue'
    import wrapperMusic from '@/components/Home/wrapper/wrapper-music.vue'
    import wrapperDance from '@/components/Home/wrapper/wrapper-dance.vue'
    import wrapperGame from '@/components/Home/wrapper/wrapper-game.vue'
    import wrapperTechnology from '@/components/Home/wrapper/wrapper-technology.vue'
    import wrapperLife from '@/components/Home/wrapper/wrapper-life.vue'
    import wrapperKichiku from '@/components/Home/wrapper/wrapper-kichiku.vue'
    import wrapperFashion from '@/components/Home/wrapper/wrapper-fashion.vue'
    import wrapperAd from '@/components/Home/wrapper/wrapper-ad.vue'
    import wrapperEnt from '@/components/Home/wrapper/wrapper-ent.vue'
    import wrapperCinephile from '@/components/Home/wrapper/wrapper-cinephile.vue'
    import wrapperMovie from '@/components/Home/wrapper/wrapper-movie.vue'
    export default({
        data(){
            return{
                components:['wrapper-home',
                'wrapper-douga',
                'wrapper-bangumi',
                'wrapper-guochuang',
                'wrapper-music',
                'wrapper-dance',
                'wrapper-game',
                'wrapper-technology',
                'wrapper-life',
                'wrapper-kichiku',
                'wrapper-fashion',
                'wrapper-ad',
                'wrapper-ent',
                'wrapper-cinephile',
                'wrapper-movie'],
            }
        },
        methods:{
        },
        created() {
        },
        components:{
            wrapperHome,
            wrapperDouga,
            wrapperBangumi,
            wrapperGuochuang,
            wrapperMusic,
            wrapperDance,
            wrapperGame,
            wrapperTechnology,
            wrapperLife,
            wrapperKichiku,
            wrapperFashion,
            wrapperAd,
            wrapperEnt,
            wrapperCinephile,
            wrapperMovie
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
    .recommand-module{
        height: 220px;
        position: relative;
        overflow: hidden;
    }
    .groom-module{
        width: 160px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
    }
    .lazy-img {
        background: url(/img/img_loading.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .lazy-img img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .fade-enter-active{
        transition: all 1s ease;
    }
    .fade-leave-active{
        transition: all .3s ease;
    }
    .fade-enter{
        /*transform: translateX(100%);*/
        transform: translateY(20%);
        opacity: 0;
    }
    .fade-leave-to{
        /*transform: translateX(-100%);
        transform: translateY(-20%);*/
        opacity: 0;
    }
</style>
