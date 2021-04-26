<template>
  <div>
    <Background />
    <div class="container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
import ContactForm from '../components/ContactForm'
export default {
  components: {
    Background,
    ContactForm,
  },
}
</script>

<style scoped>
.bg {
  background-image: url('~assets/images/bg-6.jpg');
}
</style>
