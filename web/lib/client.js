import {
  createClient,
} from 'next-sanity'


export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json in the studio folder
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` for mutations
  apiVersion: '2021-10-21',
  token: process.env.SANITY_API_TOKEN,
})

