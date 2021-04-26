<template>
  <div>
    <Background />
    <div class="container">
      <h1>Contact</h1>
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
  color: rgb(16, 16, 167);
}
.bg {
  background-image: url('~assets/images/bg-6.jpg');
}
</style>
