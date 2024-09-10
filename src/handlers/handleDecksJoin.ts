import { Request, Response } from 'express'
import { normalizeArray } from '../utils/normalizeArray'
import { deckJoinSchema } from '../schema/deckJoinSchema'
import { allDecksGeneric } from '../data/allDecks'
import { deckDbToCardsDto } from '../utils/deckDbToCardsDto'
import { DeckDto } from '../types'

export const handleDecksJoin = (req: Request, res: Response) => {
  const normalizedIds = normalizeArray(req.query.ids)
  const validation = deckJoinSchema.safeParse(normalizedIds)

  if (!validation.success) {
    return res.status(400).send(validation.error.errors)
  }

  const ids = validation.data

  // TODO I just ignore the case where the deck is not found, and use empty array. This should probably be error 400
  const decks = ids.map(id => allDecksGeneric[id].deck ?? []).flat()
  const cardsDto = deckDbToCardsDto(decks)

  const response: DeckDto = {
    id: ids.join('-'),
    title: 'Joined deck',
    deck: cardsDto,
  }
  res.json(response)
}
