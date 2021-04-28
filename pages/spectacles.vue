<template>
  <div>
    <Background />
    <div class="container">
      <h1>Spectacles</h1>
      <SanityImage :image="image" :width="120" :height="80" class="img" />
      <h3>
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
import sanityClient from '../sanityClient'
import SanityImage from '../components/SanityImage'

const query = `
  *[_type=="creations"]{
    title, 
    description, 
    generique, 
    mainImage { ..., asset->},
    creationDate

}
`
export default {
  components: {
    Background,
    SanityImage,
  },
  async asyncData() {
    const creations = await sanityClient.fetch(query)
    const title = creations[0].title
    const image = await creations[0].mainImage
    return { title, image }
  },
}
</script>

<style lang="scss" scoped>
.container {
  color: #fff;
}
.bg {
  background-image: url('~assets/images/bg-2.jpg');
}
.img {
  margin-top: 100px;
}
</style>
