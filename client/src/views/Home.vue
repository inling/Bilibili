<template>
  <div class="home">
    <home-header></home-header>
    <home-wrapper></home-wrapper>
    <elevator-module></elevator-module>
    <elevator-mask></elevator-mask>
    <div style="height:1000px;border:1px solid red;width:100%"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'
import HomeWrapper from '@/components/Home/HomeWrapper.vue'
import elevatorModule from '@/components/Home/elevator-module.vue'
import elevatorMask from '@/components/Home/elevator-mask.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeWrapper,
    elevatorModule,
    elevatorMask
  }
}
</script>



