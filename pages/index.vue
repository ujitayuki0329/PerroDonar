<template>
  <div>
    <Header />
    <WelcomeBar />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import WelcomeBar from '~/components/WelcomeBar.vue'
  export default {
    components: {
      Header,
      WelcomeBar,
    },
    data () {
      return {
        
      }
    },
  }
</script>