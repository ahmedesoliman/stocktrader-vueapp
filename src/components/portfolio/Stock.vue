<template lang="pug">
  .col-md-6
    .card.card-outline-primary
      .card-header
        h4.card-title {{ bought.name }}
          span.price &nbsp;(Price: {{ bought.price }} | Quantity: {{ bought.amount }})
      .card-block
        form.form-inline.d-inline-flex.justify-content-between
          input(type="number", :class="{ danger: outOfBounds }", v-model="amount", placeholder="Amount of stocks").form-control.mb-2.mr-sm-2.mb-sm-0
          button(type="submit", @click.prevent="sellStock", :disabled="outOfBounds || amount <= 0").btn.btn-success {{ outOfBounds ? 'Out of bounds' : 'Buy'}}
</template>

<script>
  import * as types from '../../store/types'

  export default {
    name: "PortfolioStock",
    props: ['bought'],
    data () {
      return {
        amount: 0
      }
    },
    computed: {
      outOfBounds() {
        return this.amount > this.bought.amount
      }
    },
    methods: {
      sellStock() {
        const options = {
          id: this.bought.id,
          price: this.bought.price,
          amount: this.amount
        }

        this.$store.dispatch(types.SELL_STOCK, options)
        this.amount = 0
      }
    }
  }
</script>
<style lang="sass">
  .form-inline
    width: 100%

  .card
    margin-bottom: 1.25rem

  .card-header
    background-color: rgb(130, 135, 255)

  .card-title
    margin-bottom: 0
    color: blue

  .price
    font-size: 15px
    color: black
</style>
