<template lang="pug">
  .row
    app-stock(v-for="(stock, index) in stocks", :key="index", :stock="stock")
</template>
<script>
  import Stock from './Stock.vue'

  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../../store/types'

  export default {
    name: "Stocks",
    computed: {
      ...mapGetters({
        stocks: types.STOCKS_DETAIL
      })
    },
    components: {
      'app-stock': Stock
    }
  }
</script>
<style lang="sass">
</style>
