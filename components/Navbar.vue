<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/spectacles">Spectacles</NuxtLink>
    <NuxtLink to="/ateliers">Ateliers</NuxtLink>
    <NuxtLink to="/about">A propos</NuxtLink>
    <NuxtLink to="/news">News</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

div > a {
  margin: 0 8px;
  text-decoration: none;
  color: #999;
}

a:hover {
  color: #000;
}
</style>
