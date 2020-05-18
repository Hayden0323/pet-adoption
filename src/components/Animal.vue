<template>
  <div class="animal"
       @click="handleClick"
       :class="{'animal__selected': !!selected}">
    <span class="animal_photo"
          :style="{backgroundImage: `url(${animal.photos[0]})`}"></span>
    <span class="animal_name"> {{ animal.name }}</span>
    <span class="animal_distance">
      <span><i class="fa fa-paper-plane"></i></span>
      <span class="animal_distance_text"> {{ animal.distance }} </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      type: Object
    },
    selected: {
      type: Boolean
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      if (this.isDetail) {
        return
      }
      const appRect = document.querySelector('#app').getBoundingClientRect()
      const elRect = this.$el.getBoundingClientRect()
      const animal = this.animal
      const rect = {}
      rect.top = elRect.top - appRect.top
      rect.left = elRect.left - appRect.left
      rect.width = elRect.width
      rect.height = elRect.height
      rect.appWidth = appRect.width
      rect.appHeight = appRect.height
      this.$emit('select', {
        rect,
        animal
      })
    }
  }
}
</script>

<style lang="scss">
.animal {
  position: relative;
  z-index: 2;
}
.animal_photo {
  position: relative;
  display: block;
  width: 200px;
  height: 140px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-size: cover;
  background-position: center;
}
.animal_name {
  display: block;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
}
.animal_distance {
  display: block;
  padding-top: 5px;
  font-size: 14px;
  opacity: 0.7;

  i {
    padding-right: 5px;
    color: rgb(92, 198, 81);
  }
}
</style>