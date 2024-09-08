import { config } from 'dotenv-safe'
config()
import express from 'express'
import cors from 'cors'
import { allDecksGeneric } from './data/allDecks'
import { getHomeTiles } from './utils/getHomeTiles'
import { DeckDto, HomeTilesDto } from './types'
import { deckJoinSchema } from './schema/deckJoinSchema'
import { normalizeArray } from './utils/normalizeArray'
import { deckDbToCardsDto } from './utils/deckDbToCardsDto'
import { extractDict } from './utils/extractDict'
import { findWord } from './utils/dictionarySearch'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.static('src/assets'))

app.get('/v2/decks/join', (req, res) => {
  // gram from query
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
})

app.get('/v2/decks/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Id not provided')

  const deck = allDecksGeneric[id]
  if (!deck) return res.status(404).send('Deck not found')

  const cardsDto = deckDbToCardsDto(deck.deck)
  const response: DeckDto = {
    id: deck.id,
    title: deck.title,
    deck: cardsDto,
  }
  res.json(response)
})

app.get('/v2/home/tiles', (_req, res) => {
  const response: HomeTilesDto = { tiles: getHomeTiles() }
  res.json(response)
})

app.get('/v2/vocab', async (req, res) => {
  res.json({
    ok: 'done',
  })
})

const main = async () => {
  await extractDict()
  findWord(['麦', '子', '帽'])

  app.listen(4000, () => {
    console.log(`Running on http://localhost:4000`)
  })
}
main()
