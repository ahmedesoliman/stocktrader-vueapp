<template lang="pug">
  .card.card-outline-secondary.mb-3
    .card-block
      h1 Trade or Vue your portfolio
      p You may save or load your data
      p Click on 'End Day' to begin a new day!
      hr
      h3 Your Funds: {{ funds | currency }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  export default {
    name: "Home",
    computed: {
      ...mapGetters({
        funds: types.FUNDS
      })
    }
  }
</script>

<style lang="sass" scoped>
  .card-block
    padding: 3rem 1.75rem
</style>
