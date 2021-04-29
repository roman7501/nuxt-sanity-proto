<template>
  <div>
    <Background />
    <h1>Spectacles</h1>
    <div class="spectacle">
      <SanityImage :image="image" :width="1920" :height="1080" class="img" />
      <div class="desc">
        <h3>
          {{ title }}
        </h3>
        <SanityContent :blocks="description" />
      </div>
    </div>
  </div>
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
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
    SanityContent,
  },
  setup() {
    const blocks = this.description // Sanity block text
    return { blocks }
  },
  async asyncData() {
    const creations = await sanityClient.fetch(query)
    const title = creations[0].title
    const description = creations[0].description
    const image = await creations[0].mainImage
    return { title, image, description }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
  text-align: center;
  margin-top: 24px;
}
.spectacle {
  max-width: 90vw;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  .desc {
    margin-left: 24px;
    * {
      margin-bottom: 12px;
    }
  }
}
.bg {
  background-image: url('~assets/images/bg-2.jpg');
}
.img {
  margin-top: 100px;
}
</style>
