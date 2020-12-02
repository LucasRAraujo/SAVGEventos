import Vue from 'vue'
import Vuex from 'vuex'
import place from './modules/place'
import firebase from './modules/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    place,
    firebase
  }
})
