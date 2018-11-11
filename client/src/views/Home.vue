<template>
  <div class="home">
    <home-header></home-header>
    <home-wrapper></home-wrapper>
    <elevator-module v-show="pageIndex==0"></elevator-module>
    <elevator-mask></elevator-mask>
    <player v-show="player.isPlayerOpen"></player>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'
import HomeWrapper from '@/components/Home/HomeWrapper.vue'
import elevatorModule from '@/components/Home/elevator-module.vue'
import elevatorMask from '@/components/Home/elevator-mask.vue'
import player from '@/components/Player/Player.vue'
export default {
  name: 'home',
  data(){
    return {
      player:{
        isPlayerOpen:true,
        url:''
      }
    }
  },
  components: {
    HomeHeader,
    HomeWrapper,
    elevatorModule,
    elevatorMask,
    player
  },
  computed:{
    pageIndex(){
      return this.$store.getters['global/pageIndex']
    }
  }
}
</script>



