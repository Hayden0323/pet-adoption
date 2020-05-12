<template>
  <div class="animal-box-scroll">
    <div class="animal-box">
      <ul :style="{ width: `${(animalTypes.length + 1) * 71}px` }">
        <li v-for="animal in animalTypes"
            :key="animal.id">
          <div class="animal">
            <i class="fa fa-search"></i>
            <div class="animal_name"> {{ animal.name }} </div>
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
    ...mapMutations(['changeAnimalIndex'])
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
  width: 44px;
  height: 44px;
  margin-left: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
}
</style>