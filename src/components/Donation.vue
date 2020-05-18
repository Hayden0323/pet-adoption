<template>
  <div class="donation">
    <div class="donation-title">
      <h1>
        Donate us!
      </h1>
    </div>
    <div class="donation-text">
      <p>
        Your donation helps us to <br> run this great service.
      </p>
    </div>
    <div class="donation-img">
      <span :style="{backgroundImage: `url(${animals[3].photos[1]})`}"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['animals'])
  }
}
</script>

<style lang="scss">
.donation {
  margin: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: 130px;
  background-color: rgb(242, 240, 252);
  border-radius: 20px;
}
.donation-title {
  padding-left: 10px;
  font-size: 23px;
  font-weight: bold;
  color: rgb(85, 33, 232);
}
.donation-text {
  padding-left: 10px;
  font-size: 8px;
  font-weight: bold;
  color: rgb(169, 164, 183);
}
.donation-img span {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50%;
  border-radius: 20px;
  border-top-left-radius: 70px;
  border-bottom-left-radius: 70px;
  background-position: center;
  background-size: cover;
}
</style>