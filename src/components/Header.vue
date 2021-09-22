<template lang="pug">
  nav.navbar.navbar-toggleable-md.navbar-inverse.bg-inverse
    button(type="button", data-toggle="collapse", data-target="#navbar", aria-controls="navbar", aria-expanded="false", aria-label="Toggle navigation").navbar-toggler.navbar-toggler-right
      span.navbar-toggler-icon
    router-link(:to="{name: 'home'}").navbar-brand Stock Trader
    .collapse.navbar-collapse#navbar
      ul.navbar-nav
        router-link(tag="li", :to="{ name: 'stocks' }", active-class="active", exact).nav-item
          a.nav-link Stocks
        router-link(tag="li", :to="{ name: 'portfolio' }", active-class="active", exact).nav-item
          a.nav-link Portfolio
      ul.navbar-nav.ml-auto
        li.nav-item
          a(href="#", @click="update").nav-link End Day
        li.nav-item.dropdown
          a(href="#", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false").nav-link.dropdown-toggle#dropdownMenuLink Save & Load
          div(aria-labelled-by="dropdownMenuLink").dropdown-menu.bg-inverse
            a(href="#", @click.prevent="save").dropdown-item Save Data
            a(href="#", @click.prevent="load").dropdown-item Load Data
        li.nav-item
          span.nav-funds Funds: {{ funds | currency }}
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      funds: types.FUNDS
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'loadData',
      randomizeStocks: types.RND_STOCKS
    }),
    update() {
      this.randomizeStocks()
    },
    save() {
      const data = {
        funds: this.$store.getters[types.FUNDS],
        boughtStocks: this.$store.getters[types.BOUGHT_STOCKS],
        stocks: this.$store.getters[types.STOCKS_DETAIL]
      }
      this.$http.put('data.json', data)
    },
    load() {
      this.fetchData()
    }
  }
}
</script>
<style lang="sass" scoped>
  .navbar
    margin-bottom: 20px

  .nav-funds
    display: block
    padding: .5em

  .nav-funds, .dropdown-item
    color: rgba(255, 255, 255, .8)

  .dropdown-item:hover
    background-color: rgb(83, 83, 83)
</style>
