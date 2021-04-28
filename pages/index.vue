<template>
  <div class="home">
    <Background />
    <div class="container">
      <h1>Home</h1>
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

<style lang="scss" scoped>
.container {
  color: #fff;
}
.bg {
  background-image: url('assets/images/bg-1.jpg');
}
</style>
