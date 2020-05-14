import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTabIndex: 0,
    currentAnimalIndex: 0,
    currentIndex: 0,
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
        icon: 'venus',
      },
      {
        id: 1,
        name: 'Dogs',
        icon: 'mars',
      },
    ],
    animals: [
      {
        id: 0,
        type: 0,
        name: 'Akira',
        distance: '0.7km away',
        weight: '4.5kg',
        sex: 'Male',
        age: '3 years',
        photos: [require('../assets/cat1.jpg'), require('../assets/cat2.jpg')],
        summary:
          'Very friendly and well-behaved male cat. He is potty trained and responds whenever he is called. And, he is neutered',
        contact: 'Farhan Farooqui',
        active: false,
      },
      {
        id: 1,
        type: 0,
        name: 'Rose',
        distance: '1.2km away',
        weight: '3.2kg',
        sex: 'Female',
        age: '1 year',
        photos: [require('../assets/cat3.jpg'), require('../assets/cat4.jpg')],
        summary:
          'Very friendly and well-behaved male cat. He is potty trained and responds whenever he is called. And, he is neutered',
        contact: 'Esti Garahfa',
        active: false,
      },
      {
        id: 2,
        type: 1,
        name: 'Grii',
        distance: '5.6km away',
        weight: '1.1kg',
        sex: 'Male',
        age: '2 years',
        photos: [require('../assets/dog1.jpg'), require('../assets/dog2.jpg')],
        summary:
          'Very friendly and well-behaved male cat. He is potty trained and responds whenever he is called. And, he is neutered',
        contact: 'Akula Estimate',
        active: false,
      },
      {
        id: 3,
        type: 1,
        name: 'Bill',
        distance: '1.6km away',
        weight: '4.1kg',
        sex: 'Female',
        age: '2 years',
        photos: [require('../assets/dog3.jpg'), require('../assets/dog4.jpg')],
        summary:
          'Very friendly and well-behaved male cat. He is potty trained and responds whenever he is called. And, he is neutered',
        contact: 'Job Yrasda',
        active: false,
      },
    ],
    selected: null,
    unselect: null,
  },
  mutations: {
    changeTabIndex(state, index) {
      state.currentTabIndex = index
    },
    changeAnimalIndex(state, index) {
      state.currentAnimalIndex = index
    },
    toggleAnimal(state, { animal }) {
      if (state.selected && state.selected.animal === animal) {
        return
      }
      animal.active = !animal.active
    },
    selectAnimal(state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectAnimal(state) {
      state.unselect = state.selected
      state.selected = null
    },
  },
  actions: {},
})
