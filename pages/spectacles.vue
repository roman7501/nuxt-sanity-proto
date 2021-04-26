<template>
  <div>
    <Background />
    <div class="container">
      <h1>Spectacles</h1>
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
export default {
  components: {
    Background,
  },
}
</script>

<style scoped>
.container {
  color: #fff;
}
.bg {
  background-image: url('~assets/images/bg-2.jpg');
}
</style>
