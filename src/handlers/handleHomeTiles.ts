import { Request, Response } from 'express'
import { HomeTilesDto } from '../types'
import { getHomeTiles } from '../utils/getHomeTiles'

export const handleHomeTiles = (_req: Request, res: Response) => {
  const response: HomeTilesDto = { tiles: getHomeTiles() }
  res.json(response)
}
