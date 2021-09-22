<template lang="pug">
  .container
    .row
      .col-md-12
        app-header
    .row
      .col-md-12
        transition(name="slide", mode="out-in")
          router-view
</template>

<script>
  import Header from './components/Header.vue'

  import * as types from './store/types'

  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
    created() {
      this.$store.dispatch(types.SETUP_STOCKS)
    }
  }
</script>

<style lang="sass" scoped>
  .dropdown-item
    color: rgba(255, 255, 255, .8)

    &:hover
      background-color: rgb(40, 40, 40)

  .slide-enter-active, .slide-leave-active
    transition: all .3s ease-in-out

  .slide-enter, .slide-leave-to
    opacity: 0

  .slide-enter-active
    animation: slideIn .3s

  .slide-leave-to
    animation: slideOut .3s

  @keyframes slideIn
    0%
      transform: translateY(-20px)
    100%
      transform: translateY(0)

  @keyframes slideOut
    0%
      transform: translateY(0)
    100%
      transform: translateY(20px)
</style>
