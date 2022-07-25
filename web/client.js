const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: '2n94pwp8', // you can find this in sanity.json in the studio folder
  dataset: 'results', // or the name you chose in step 1
  useCdn: false, // `false` for mutations
  apiVersion: '2021-10-21'
})

