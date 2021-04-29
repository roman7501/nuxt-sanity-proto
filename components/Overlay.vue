<template>
  <div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
}
</script>

<style lang="scss">
.overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: rgba(74, 95, 255, 1);
  transform: translateX(100%);
  z-index: 100;
  /* transition: transform 1.5s; */
}
</style>
