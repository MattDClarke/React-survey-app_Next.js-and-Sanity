import { sanityClient } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Destructure the pieces of our request
    const { likes } = JSON.parse(req.body)
    try {
      // Use our Client to create a new document in Sanity with an object  
      await sanityClient.create({
        _type: 'surveyResponse',
       likes
      })
    } catch (err) {
      console.error(err);
      return res.status(500).json({message: `Couldn't submit response`, err});
    }
      
    return res.status(200).json({ message: 'Response submitted' });
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}