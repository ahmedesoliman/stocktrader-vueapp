import Vue from 'vue'
import * as types from './types'

export const loadData = ({commit}) => {
  Vue.http.get('data.json').then(response => response.json()).then(data => {
    if (data) {
      const stocks = data.stocks
      const funds = data.funds
      const boughtStocks = data.boughtStocks

      const portfolio = {
        boughtStocks,
        funds
      }

      commit(types.MUTATE_SETUP_STOCKS, stocks)
      commit(types.MUTATE_SETUP_PORTFOLIO, portfolio)
    }
  })
}
