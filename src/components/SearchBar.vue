<template>
  <span class="search-bar">
    <span class="search-bar_l">
      <i class="fa fa-search"></i>
    </span>
    <input type="text"
           placeholder="Search" />
    <span class="search-bar_r">
      <i class="fa fa-microphone"></i>
    </span>
  </span>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;

  input {
    height: 44px;
    width: 100%;
    outline: none;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 0 32px;
  }

  span {
    position: absolute;
  }

  .search-bar_l {
    left: 30px;
  }
  .search-bar_r {
    right: 30px;
  }
}
</style>