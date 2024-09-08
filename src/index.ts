import express from 'express'
import cors from 'cors'
import { allDecksGeneric } from './data/allDecks'
import { getHomeTiles } from './utils/getHomeTiles'
import { DeckDto, DeckLengthDto, HomeTilesDto } from './types'
import { deckJoinSchema } from './schema/deckJoinSchema'
import { normalizeArray } from './utils/normalizeArray'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.get('/v2/decks/join', (req, res) => {
  // gram from query
  const { ids } = req.query
  const normalizedIds = normalizeArray(ids)
  const validation = deckJoinSchema.safeParse(normalizedIds)

  if (!validation.success) {
    return res.status(400).send(validation.error.errors)
  }

  // TODO I just ignore the case where the deck is not found, and use empty array
  const decks = validation.data.map(id => allDecksGeneric[id].deck ?? []).flat()

  const response: DeckDto = decks
  res.json(response)
})

app.get('/v2/decks/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Id not provided')

  const deck = allDecksGeneric[id]
  if (!deck) return res.status(404).send('Deck not found')

  const response: DeckDto = deck.deck
  res.json(response)
})

app.get('/v2/decks/:id/length', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Id not provided')

  const deck = allDecksGeneric[id]
  if (!deck) return res.status(404).send('Deck not found')

  const response: DeckLengthDto = { length: deck.deck.length }
  res.json(response)
})

app.get('/v2/home/tiles', (_req, res) => {
  const response: HomeTilesDto = { tiles: getHomeTiles() }
  res.json(response)
})

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:4000`)
})
