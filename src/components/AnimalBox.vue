<template>
  <div class="animal-box-scroll">
    <div class="animal-box">
      <ul>
        <li v-for="animal in animalTypes"
            :key="animal.id"
            @click="changeAnimalIndex(animal.id)"
            :style="currentColor(animal)">
          <div class="animal-box_animal">
            <i :class="['fa', `fa-${animal.icon}`]"></i>
            <div class="animal-box_name"> {{ animal.name }} </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['currentAnimalIndex', 'animalTypes'])
  },
  methods: {
    ...mapMutations(['changeAnimalIndex']),
    currentColor (animal) {
      const isCurrent = (animal.id === this.currentAnimalIndex)
      return {
        backgroundColor: isCurrent ? 'rgb(255, 255, 255)' : 'rgb(248, 248, 248)',
        color: isCurrent ? 'rgb(82, 31, 232)' : 'rgb(215, 215, 215)',
        boxShadow: isCurrent ? '0 0px 0px 3px rgba(215, 215, 215, 0.1)' : '0 0 0 0 rgba(0, 0, 0, 0)'
      }
    }
  }
}
</script>

<style lang="scss">
.animal-box-scroll {
  position: relative;
  padding-top: 8px;
  height: 95px;
  overflow: hidden;
  background-color: white;
}
.animal-box {
  padding-top: 10px;
  padding-bottom: 32px;
  overflow-x: auto;
}
.animal-box ul {
  display: flex;
}
.animal-box li {
  width: 55px;
  height: 55px;
  margin-left: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  .animal-box_animal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>