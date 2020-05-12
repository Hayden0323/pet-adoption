<template>
  <div class="app-header">
    <span class="app-header_icon">
      <i :class="['fa', `fa-${icon}`]"></i>
    </span>
    <h1 class="app-header_title">Find your next <br> best Friend</h1>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'paw'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 10;
  background-color: white;

  span {
    font-size: 30px;
    padding: 20px 0 10px 20px;
    color: rgb(81, 31, 232);
  }

  h1 {
    font-size: 30px;
    font-weight: 900;
    padding-left: 20px;
  }
}
</style>