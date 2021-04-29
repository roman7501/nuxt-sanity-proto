<template>
  <div>
    <Background />
    <div class="container">
      <h1>Ateliers</h1>
      <SingleImage :imageLocation="srcImage" />
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
import SingleImage from '../components/SingleImage'
export default {
  components: {
    Background,
    SingleImage,
  },
  data() {
    return {
      srcImage: 'images/img1.jpg',
    }
  },
}
</script>

<style scoped>
.container {
  color: #fff;
}
.bg {
  background-image: url('~assets/images/bg-3.jpg');
}
</style>
