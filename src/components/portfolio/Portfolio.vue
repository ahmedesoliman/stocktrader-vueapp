<template lang="pug">
  .row
    app-stock(v-for="(bought, index) in boughtStocks", :key="index", :bought="bought")
</template>
<script>
  import Stock from './Stock.vue'

  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    name: "Portfolio",
    computed: {
      ...mapGetters({
        boughtStocks: types.BOUGHT_STOCKS,
        stocks: types.BOUGHT_STOCKS_DETAIL
      })
    },
    components: {
      'app-stock': Stock
    }
  }
</script>
<style lang="sass">
</style>
