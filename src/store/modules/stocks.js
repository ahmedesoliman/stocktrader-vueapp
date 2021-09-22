import STOCKS from '../../data/stocks'
import * as types from '../types'

const state = {
  stocks: []
}

const getters = {
  [types.STOCKS_DETAIL]: state => state.stocks
}

const mutations = {
  [types.MUTATE_SETUP_STOCKS]: (state, stocks) => state.stocks = stocks,
  [types.MUTATE_RND_STOCKS]: state => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    })
  }
}

const actions = {
  [types.BUY_STOCK]: ({commit}, payload) => commit(types.MUTATE_BUY_STOCK, payload),
  // Setup the stocks in the state with the stocks data from stocks.js, it can be used on the "End Day" button
  [types.SETUP_STOCKS]: ({commit}) => commit(types.MUTATE_SETUP_STOCKS, STOCKS),
  [types.RND_STOCKS]: ({commit}) => commit(types.MUTATE_RND_STOCKS)
}

export default {
  state,
  getters,
  mutations,
  actions
}
