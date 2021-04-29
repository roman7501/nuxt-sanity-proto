<template>
  <SingleImage :imageLocal="imageUrl" />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../sanityClient'
import SingleImage from '../components/SingleImage'

const builder = imageUrlBuilder(sanityClient)

export default {
  components: {
    SingleImage,
  },

  props: {
    image: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: 'Missing alternative text',
    },
    width: Number,
    height: Number,
    auto: {
      default: 'format',
      type: String,
    },
    fit: {
      default: 'max',
      type: String,
    },
  },
  data() {
    return {
      srcImage: 'images/img2.jpg',
    }
  },
  computed: {
    imageUrl() {
      return builder
        .image(this.image)
        .size(this.width, this.height)
        .auto(this.auto)
        .fit(this.fit)
    },
  },
}
</script>
