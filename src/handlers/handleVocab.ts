import { Request, Response } from 'express'
import { vocabQuerySchema } from '../schema/vocabQuerySchema'
import { kanjiUntilLevel } from '../utils/kanjiUntilLevel'
import { findWord } from '../utils/dictionarySearch'
import { FoundWordsDto } from '../types'

export const handleVocab = (req: Request, res: Response) => {
  const result = vocabQuerySchema.safeParse(req.query)
  if (!result.success) {
    return res.status(400).send(result.error.errors)
  }

  const { onlyKanji, maxLen, minLen, query } = result.data
  const finalKanjiList: string[] = query.startsWith('level') ? kanjiUntilLevel(query) : query.split('')

  const timeBefore = performance.now()
  console.log(result.data.onlyKanji)
  const foundWords = findWord({
    search: finalKanjiList,
    minLen,
    maxLen,
    onlyKanji,
  })
  const timeAfter = performance.now()
  const took = timeAfter - timeBefore

  const response: FoundWordsDto = {
    timeMs: took,
    results: foundWords,
  }
  res.json(response)
}
