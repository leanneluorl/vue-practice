import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 11,
    colorCode: 'Enter the color'
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      console.log("randomNumber", randomNumber)
      state.counter+=randomNumber
    },
    decreaseCounter(state, randomNumber) {
      console.log("randomNumber", randomNumber)
      state.counter+=randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter(state) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.warn("response", response)
        this.commit('increaseCounter', response.data)
      })
    },
    decreaseCounter(state) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.warn("response", response)
        this.commit('increaseCounter', response.data)
      })
    },
    setColorCode({commit}, newValue){
        commit('setColorCode', newValue)
    }
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter 
    }
  },
  modules: {
  }
})
