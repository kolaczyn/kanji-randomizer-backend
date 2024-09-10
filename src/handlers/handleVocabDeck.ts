import { Request, Response } from 'express'
import { vocabQuerySchema } from '../schema/vocabQuerySchema'
import { CardDto, DeckDto } from '../types'
import { handleVocabApp } from './handleVocab'

export const handleVocabDeck = (req: Request, res: Response) => {
  const result = vocabQuerySchema.safeParse(req.query)
  if (!result.success) return res.status(400).send(result.error.errors)
  const found = handleVocabApp(result.data)

  const cards: CardDto[] = found.results.map(word => ({
    isKanji: false,
    character: `${word.jap} (${word.kana})`,
    meaning: word.eng,
    strokeImg: null,
  }))

  const response: DeckDto = {
    id: ['vocab-deck', result.data.query, result.data.minLen, result.data.maxLen, result.data.onlyKanji].join('_'),
    title: 'Vocab deck',
    deck: cards,
  }
  return res.json(response)
}
