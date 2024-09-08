import { config } from 'dotenv-safe'
config()
import express from 'express'
import cors from 'cors'
import { allDecksGeneric } from './data/allDecks'
import { getHomeTiles } from './utils/getHomeTiles'
import { DeckDto, HomeTilesDto, JapaneseDictionary } from './types'
import { deckJoinSchema } from './schema/deckJoinSchema'
import { normalizeArray } from './utils/normalizeArray'
import { deckDbToCardsDto } from './utils/deckDbToCardsDto'
import { extractDict } from './utils/extractDict'
import { hiraganaBase, hiraganaOnlyDakuten } from './data/hiragana'
import { katakanaBase, katakanaOnlyDakuten } from './data/katakana'

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

const findWord = (kanjiSearch: string[]) => {
  const allKana: string[] = [hiraganaBase, hiraganaOnlyDakuten, katakanaBase, katakanaOnlyDakuten]
    .map(x => x.deck)
    .flat()
    .map(x => x[0])
  const toSearch = [...kanjiSearch, ...allKana]
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dictionary = require('../jmdict-eng-common-3.5.0.json') as JapaneseDictionary
  console.log(dictionary.words.length)
  // TODO this is gonna be extremely slow, but should do for now
  // TODO I should include kana in the search
  const result = dictionary.words.filter(word =>
    word.kanji.some(({ text }) => text.split('').every(letter => toSearch.includes(letter)))
  )
  const final = result.map(x => ({
    jap: x.kanji.map(x => x.text).join(', '),
    eng: x.sense[0].gloss.map(x => x.text).join(', '),
  }))

  console.log({
    results: final,
    length: final.length,
  })
}

const main = async () => {
  await extractDict()
  findWord(['麦', '子', '帽'])

  app.listen(4000, () => {
    console.log(`Running on http://localhost:4000`)
  })
}
main()
