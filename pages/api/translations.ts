import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios(process.env.GITHUB_TRANSLATIONS_URI)

  res.status(200).json(data)
}
