import { Request, Response } from 'express'
import { getImgUrl } from '../utils/getImgUrl'

export const handleImgsStroke = (req: Request, res: Response) => {
  const { char } = req.params
  const imgUrl = getImgUrl(char)
  if (!imgUrl) return res.status(404).send('Image not found')
  // TODO redirects are not optimal if we are have the files anyway, but whatever :p
  res.redirect(imgUrl)
}
