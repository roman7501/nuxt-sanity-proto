<template>
  <div class="images">
    <img @load="onImgLoad" src="~/assets/images/img1.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img2.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img3.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img4.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img5.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img6.jpg" />
    <img @load="onImgLoad" src="~/assets/images/img7.jpg" />
    <!-- <div v-else class="skeleton"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      isLoaded: false,
      imagesLoaded: 0,
    }
  },
  methods: {
    onImgLoad() {
      const totalImages = document.querySelectorAll('img').length
      this.imagesLoaded++
      console.log(this.imagesLoaded)
      if (this.imagesLoaded === totalImages) {
        console.log('all image are loaded')
        this.isLoaded = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-wrap: wrap;
  img {
    max-width: 15vw;
    height: auto;
  }
}
</style>
