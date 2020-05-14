<template>
  <div class="home">
    <app-header icon="paw" />
    <search-bar />
    <animal-box />
    <navigation />
    <animal-list />
    <bottom-bar />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import SearchBar from '../components/SearchBar'
import AnimalBox from '../components/AnimalBox'
import Navigation from '../components/Navigation'
import AnimalList from '../components/AnimalList'
import BottomBar from '../components/BottomBar'
export default {
  components: {
    AppHeader,
    SearchBar,
    AnimalBox,
    Navigation,
    AnimalList,
    BottomBar
  }
}
</script>

<style lang="scss">
.home {
  padding-top: 150px;
  padding-bottom: 88px;
  width: 100%;
  overflow: hidden;
  min-height: calc(100% - 150px - 88px);
  color: black;
  background-color: white;
}
</style>