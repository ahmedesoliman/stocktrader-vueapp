import * as types from '../types'

const state = {
  funds: 10000,
  stocks: []
}

const getters = {
  [types.FUNDS]: state => state.funds,
  [types.BOUGHT_STOCKS]: (state, getters) => {
    return state.stocks.map(stock => {
      const stored = getters[types.STOCKS_DETAIL].find(element => element.id == stock.id)
      return {
        id: stock.id,
        name: stored.name,
        price: stored.price,
        amount: stock.amount
      }
    })
  },
  [types.BOUGHT_STOCKS_DETAIL]: state => state.stocks
}

const mutations = {
  [types.MUTATE_BUY_STOCK]: (state, {companyId, stockPrice, buyAmount}) => {
    const stored = state.stocks.find(element => element.id == companyId)

    if (stored) {
      stored.amount += Number(buyAmount)
    } else {
      state.stocks.push({
        id: companyId,
        amount: buyAmount
      })
    }
    state.funds -= Number(stockPrice) * Number(buyAmount)
  },
  [types.MUTATE_SELL_STOCK]: (state, {id, price, amount}) => {
    const stored = state.stocks.find(element => element.id == id)

    if (stored.amount > amount) {
      stored.amount -= Number(amount)
    } else {
      state.stocks.splice(state.stocks.indexOf(stored), 1)
    }
    state.funds += Number(price) * Number(amount)
  },
  [types.MUTATE_SETUP_PORTFOLIO]: (state, portfolio) => {
    state.funds = portfolio.funds
    state.stocks = portfolio.boughtStocks ? portfolio.boughtStocks : []
  }
}

const actions = {
  [types.SELL_STOCK]: ({commit}, payload) => commit(types.MUTATE_SELL_STOCK, payload),
  [types.SETUP_PORTFOLIO]: ({commit}, portfolio) => {
    commit(types.MUTATE_SETUP_PORTFOLIO, portfolio)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
