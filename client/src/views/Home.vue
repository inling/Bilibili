<template>
  <div class="home">
    <home-header></home-header>
    <home-wrapper></home-wrapper>
    <elevator-module v-show="pageIndex==0"></elevator-module>
    <elevator-mask></elevator-mask>
    <player v-show="player.isPlayerOpen" :data="player.data"></player>
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
        data:{
            url:'',
            title:'',
            pic:'',
            picNum:''
        }
      }
    }
  },
  methods:{
    getVideo(){
      this.$store.dispatch('player/getVideo');
      this.player.data=this.$store.state.player.video;
    }
  },
  created(){
    this.getVideo()
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
    },
    isPlayerOpen(){
      return this.$store.getters['global/isPlayerOpen']
    }
  }
}
</script>



