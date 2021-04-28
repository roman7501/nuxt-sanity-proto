<template>
  <div>
    <Background />
    <div class="container">
      <h1>Spectacles</h1>
      <SanityImage :image="image" :width="220" :height="100" class="img" />
      <h3>
        {{ title }}
      </h3>
      <p>
        {{ textDescription }}
      </p>
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
import sanityClient from '../sanityClient'
import SanityImage from '../components/SanityImage'
import blocksToText from '../lib/blocksToText'

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
    const description = creations[0].description
    const textDescription = blocksToText(description)
    const image = await creations[0].mainImage
    return { title, image, textDescription }
  },
  // data() {
  //   return {
  //     serializers: {
  //       types: {
  //         custom: CustomComponent,
  //       },
  //     },
  //   }
  // },
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
