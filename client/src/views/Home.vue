<template>
  <div class="home">
    <home-header></home-header>
    <home-wrapper></home-wrapper>

  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'
import HomeWrapper from '@/components/Home/HomeWrapper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeWrapper
  }
}
</script>

