import { NextApiResponse, NextApiRequest } from 'next'
const fetch = require('node-fetch');

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  
  console.log('body:', _req.body);

  // return a 200 like every good webhook should
  return res.status(200).send(_req.body)
}
