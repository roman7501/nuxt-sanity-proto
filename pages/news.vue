<template>
  <div>
    <Background />
    <div class="container">
      <h1>News</h1>
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
  color: rgb(255, 196, 0);
}
.bg {
  background-image: url('~assets/images/bg-5.jpg');
}
</style>
