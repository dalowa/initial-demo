// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface NAR {
  name: string
}



export default function handler(req: NextApiRequest, res: NextApiResponse<NAR>) {
  res.status(200).json({ name: 'John Doe' })
}
