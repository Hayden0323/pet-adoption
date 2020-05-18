<template>
  <transition name="show"
              @enter="handelEnter"
              @leave="handleLeave">
    <div class="animal-detail"
         v-if="selected">
      <animal-front :animal="selected.animal"></animal-front>
      <animal-back :animal="selected.animal"></animal-back>
    </div>
  </transition>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
import AnimalFront from '../components/AnimalFront'
import AnimalBack from '../components/AnimalBack'

export default {
  components: {
    AnimalFront,
    AnimalBack
  },
  computed: {
    ...mapState(['selected', 'unselect'])
  },
  methods: {
    ...mapMutations(['unselectAnimal']),
    handelEnter (el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        })
      }, 0)
    },
    handleLeave (el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.selected.rect.appWidth}px`,
        height: `${this.selected.rect.appHeight}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.selected.rect.top}px`,
          left: `${this.selected.rect.left}px`,
          width: `${this.selected.rect.width}px`,
          height: `${this.selected.rect.height}px`
        })
      }, 0)
    }
  }
}
</script>

<style lang="scss">
.animal-detail {
  position: fixed;
  background-color: #fff;
  z-index: 10;
  background-color: black;
  will-change: top, left, width, height;
}
</style>