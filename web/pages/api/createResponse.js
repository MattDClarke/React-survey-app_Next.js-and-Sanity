import { validationSchema } from "../../helpers/validationSchema";
import { isReqValid } from "../../utils/isReqValid";
import { sanityClient } from "../../utils/sanityClient";

 export default async function handler(req, res) {
  if (req.method === 'POST') {
    // validation
    const isValid = await isReqValid(validationSchema, req.body);
    if (!isValid) {
      return res.status(422).json({
        message: 'Method not allowed',
      });
    }
    // Destructure the pieces of our request
    const { likes } = req.body;
    try {
      // Use our Client to create a new document in Sanity with an object  
      await sanityClient.create({
        _type: 'surveyResponse',
        likes,
      }) 
    } catch (err) {
      return res.status(500).json({ message: `Couldn't submit response` });
    }
      
    return res.status(200).json({ message: 'Response submitted' });
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}