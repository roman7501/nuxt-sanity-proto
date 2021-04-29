import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'mej4ij43',
  dataset: 'production',
  apiVersion: '2021-04-25',
  useCdn: true,
})
