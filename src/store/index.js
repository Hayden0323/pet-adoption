import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTabIndex: 0,
    currentAnimalIndex: 0,
    tabs: [
      {
        id: 0,
        normal: 'fa fa-map-o',
        active: 'fa fa-map',
      },
      {
        id: 1,
        normal: 'fa fa-comment-o',
        active: 'fa fa-comment',
      },
      {
        id: 2,
        normal: 'fa fa-bell-o',
        active: 'fa fa-bell',
      },
      {
        id: 3,
        normal: 'fa fa-user-o',
        active: 'fa fa-user',
      },
    ],
    animalTypes: [
      {
        id: 0,
        name: 'Cats',
      },
      {
        id: 1,
        name: 'Dogs',
      },
    ],
  },
  mutations: {
    changeTabIndex(state, index) {
      state.currentTabIndex = index
    },
    changeAnimalIndex(state, index) {
      state.currentAnimalIndex = index
    },
  },
  actions: {},
})
