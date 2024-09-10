import { Request, Response } from 'express'
import { VocabQuery, vocabQuerySchema } from '../schema/vocabQuerySchema'
import { kanjiUntilLevel } from '../utils/kanjiUntilLevel'
import { findWord } from '../utils/dictionarySearch'
import { FoundWordsDto } from '../types'

export const handleVocabApp = (result: VocabQuery) => {
  const { onlyKanji, maxLen, minLen, query } = result
  const finalKanjiList: string[] = query.startsWith('level') ? kanjiUntilLevel(query) : query.split('')

  const timeBefore = performance.now()
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
  return response
}

export const handleVocab = (req: Request, res: Response) => {
  const result = vocabQuerySchema.safeParse(req.query)
  if (!result.success) {
    return res.status(400).send(result.error.errors)
  }

  const response = handleVocabApp(result.data)
  res.json(response)
}
