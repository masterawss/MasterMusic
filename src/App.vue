<template lang="pug">
  //- ManipulacionDOM
  main
    w-header
    router-view
    //- w-search
</template>

<script>
import WHeader from './components/layout/Header.vue'

// import WSearch from './components/Search'

export default {
  name: 'app',
  components: {
    WHeader,
  },
  data(){
    return {

    }
  },
  computed: {

  },
}
</script>

<style>
</style>
