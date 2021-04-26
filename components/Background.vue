<template>
  <div class="bg"></div>
</template>

<script>
export default {
  name: 'Background',
}
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  color: red;
  z-index: -1;
}
</style>
