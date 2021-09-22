<template lang="pug">
  .col-md-6
    .card.card-outline-secondary
      .card-header
        h4.card-title {{ stock.name }}
          span.price &nbsp;(Price: {{ stock.price }})
      .card-block
        form.form-inline.d-inline-flex.justify-content-between
          input(type="number", :class="{ danger: insufficientFunds }", v-model="amount", placeholder="Amount of stocks").form-control.mb-2.mr-sm-2.mb-sm-0
          button(type="submit", @click.prevent="buyStock", :disabled="insufficientFunds || amount <= 0").btn.btn-success {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types'

  export default {
    name: "Stock",
    props: ['stock'],
    data () {
      return {
        amount: 0
      }
    },
    computed: {
      ...mapGetters({
        funds: types.FUNDS
      }),
      cost() {
        return this.amount * this.stock.price
      },
      insufficientFunds() {
        return this.cost > this.funds
      }
    },
    methods: {
      buyStock() {
        const options = {
          companyId: this.stock.id,
          stockPrice: this.stock.price,
          buyAmount: this.amount
        }

        this.$store.dispatch(types.BUY_STOCK, options)
        this.amount = 0
      }
    }
  }
</script>

<style lang="sass" scoped>
  .form-inline
    width: 100%

  .card
    margin-bottom: 1.25rem

  .card-header
    background-color: rgb(217, 255, 218)

  .card-title
    margin-bottom: 0
    color: green

  .price
    font-size: 15px
    color: black
</style>
