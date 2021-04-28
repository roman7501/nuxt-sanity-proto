<template>
  <img :src="imageUrl" alt="image" />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../sanityClient'

const builder = imageUrlBuilder(sanityClient)

export default {
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
