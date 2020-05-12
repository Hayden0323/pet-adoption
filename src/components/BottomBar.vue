<template>
  <div class="bottom-bar">
    <span v-for="tab in tabs"
          :key="tab.id"
          @click="changeTabIndex(tab.id)">
      <i :class="currentFa(tab)"
         :style="currentColor(tab)"></i>
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['currentTabIndex', 'tabs']),
  },
  methods: {
    ...mapMutations(['changeTabIndex']),
    currentFa (tab) {
      return tab.id === this.currentTabIndex ? tab.active : tab.normal
    },
    currentColor (tab) {
      return {
        color: tab.id === this.currentTabIndex ? 'rgb(82, 31, 232)' : 'rgb(217, 210, 232)'
      }
    }
  }
}
</script>

<style lang="scss">
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 88px;
  font-size: 30px;
  display: flex;
  border-radius: 40px;
  border-top: 1px solid #eee;
  background-color: white;
  z-index: 10;

  span {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>