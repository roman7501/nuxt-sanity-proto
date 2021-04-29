<template>
  <div class="wrapper">
    <div class="skeleton"></div>
    <img
      v-show="isLoaded"
      class="single-img"
      :src="require('@/assets/' + imageLocation + '')"
      @load="onImgLoad"
    />
  </div>
</template>

<script>
export default {
  name: 'SingleImage',
  props: {
    imageLocation: String,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    onImgLoad() {
      setTimeout(() => {
        this.isLoaded = true
        console.log('image is loaded')
        this.$gsap.to('.skeleton', {
          opacity: 0,
          duration: 3,
        })
        this.$gsap.fromTo(
          '.single-img',
          {
            opacity: 0,
            scale: 1,
          },
          {
            scale: 1.1,
            opacity: 1,
            duration: 1.5,
          }
        )
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 250px;
  height: 300px;
  overflow: hidden;
  position: relative;
  img {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
}
</style>
