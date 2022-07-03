<template>
  <div>
    <Header />
    <WelcomeBar />
    <carousel
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :pagination-padding="5"
        :autoplay-timeout="3000"
      >
      <slide class="carousel-wrap">
        <img class="carousel-img" src="~/assets/img/slide1.png" alt="スライド1">
      </slide>
      <slide class="carousel-wrap">
        <img class="carousel-img" src="~/assets/img/slide2.png" alt="スライド2">
      </slide>
      <slide class="carousel-wrap">
        <img class="carousel-img" src="~/assets/img/slide3.png" alt="スライド3">
      </slide>
    </carousel>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import WelcomeBar from '~/components/WelcomeBar.vue'
  import Carousel from 'vue-carousel/src/Carousel.vue'
  import Slide from 'vue-carousel/src/Slide.vue'
  export default {
    components: {
      Header,
      WelcomeBar,
      Carousel,
      Slide
    },
    data () {
      return {
        
      }
    },
  }
</script>
