<template>
    <transition name="mask">
       <div v-show="isEleMaskShow" >
            <div class="elevator-mask" @click="setEleMask"></div>
       </div>
    </transition>
</template>
<script>
    export default({
        data(){
            return{
            }
        },
        methods:{
            setEleMask(){
                var isOpen=this.$store.state.global.elevator.isOpen;
                if(isOpen) this.$store.dispatch('global/getIsOpen',false)
                
                var isTopZIndex=this.$store.state.global.elevator.isTopZIndex;
                if(isTopZIndex) this.$store.dispatch('global/getIsTopZIndex',false)

                var isEleMaskShow=this.$store.state.global.elevator.isEleMaskShow;
                if(isEleMaskShow) this.$store.dispatch('global/getIsEleMaskShow',false);
        
            }
        },
        computed:{
            isEleMaskShow(){
                return this.$store.getters['global/isEleMaskShow'];
            }
        }
    })
</script>
<style>
    .elevator-mask{
        position: fixed;
        width: 100%;
        height:100%;
        background: rgba(0,0,0,.5);
        z-index:400;
        top:0;
        left:0;
    }
    .mask-enter-active{
        transition: all .3s linear;
    }
    .mask-leave-active{
        transition: all .3s linear;
    }
    .mask-enter{
        opacity: 0;
    }
    .mask-leave-to{
        opacity: 0;
    }
</style>

