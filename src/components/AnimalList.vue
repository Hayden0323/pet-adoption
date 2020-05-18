<template>
  <div class="animal-list">
    <ul :style="{width: `${animalFilter.length * 65}%`}">
      <li v-for="animal in animalFilter"
          :key="animal.id"
          :style="{transform: `translate3d(-${currentIndex * 100}%, 0, 0)`}">
        <animal :animal="animal"
                :selected="selected && selected.animal === animal"
                @select="selectAnimal" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Animal from '../components/Animal'
export default {
  components: {
    Animal
  },
  computed: {
    ...mapState(['animals', 'currentIndex', 'currentAnimalIndex', 'selected']),
    animalFilter () {
      return this.animals.filter(animal => animal.type === this.currentAnimalIndex)
    }
  },
  methods: {
    ...mapMutations(['selectAnimal'])
  }
}
</script>

<style lang="scss">
.animal-list {
  margin: 20px;
  height: 200px;
  transform: scaleX(1);
  overflow-x: auto;
  transition: all 0.6s ease;

  ul {
    display: flex;
    height: 100%;
  }

  li {
    padding-left: 0px;
    padding-right: 20px;
    transition: all 0.6s ease;
  }
}
.animal-list::-webkit-scrollbar {
  display: none;
}
</style>