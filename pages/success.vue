<template>
  <div>
    <Background />
    <div class="container">
      <h1>Message sent with success !</h1>
      <NuxtLink to="/contact">Cliquer pour revenir en arrière</NuxtLink>
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
a {
  margin-top: 16px;
  color: #fff;
  text-decoration: none;
}
.bg {
  background-image: url('~assets/images/bg-6.jpg');
}
</style>
