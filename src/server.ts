import { config } from 'dotenv-safe'
config()
import express from 'express'
import cors from 'cors'
import { allDecksGeneric } from './data/allDecks'
import { getHomeTiles } from './utils/getHomeTiles'
import { DeckDto, FoundWordsDto, HomeTilesDto } from './types'
import { deckJoinSchema } from './schema/deckJoinSchema'
import { normalizeArray } from './utils/normalizeArray'
import { deckDbToCardsDto } from './utils/deckDbToCardsDto'
import { extractDict } from './utils/extractDict'
import { findWord } from './utils/dictionarySearch'
import { kanjiUntilLevel } from './utils/kanjiUntilLevel'
import { getImgUrl } from './utils/getImgUrl'
import { extractVocabQuery } from './utils/extractVocabQuery'

export const app = express()

app.use(
  cors({
    origin: '*',
  }),
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

app.get('/v2/home/tiles', (_req, res) => {
  const response: HomeTilesDto = { tiles: getHomeTiles() }
  res.json(response)
})

app.get('/v2/vocab/:kanjiList', async (req, res) => {
  const kanjiList = req.params.kanjiList
  const { onlyKanji, minLength, maxLength } = extractVocabQuery(req)

  const finalKanjiList: string[] = kanjiList.startsWith('level') ? kanjiUntilLevel(kanjiList) : kanjiList.split('')

  const timeBefore = performance.now()
  const foundWords = findWord({
    search: finalKanjiList,
    minLength,
    maxLength,
    onlyKanji,
  })
  const timeAfter = performance.now()
  const took = timeAfter - timeBefore

  const response: FoundWordsDto = {
    timeMs: took,
    results: foundWords,
  }
  res.json(response)
})

app.get('/imgs/stroke/:char', (req, res) => {
  const { char } = req.params
  const imgUrl = getImgUrl(char)
  if (!imgUrl) return res.status(404).send('Image not found')
  // TODO redirects are not optimal if we are have the files anyway, but whatever :p
  res.redirect(imgUrl)
})

const main = async () => {
  await extractDict()

  app.listen(4000, () => {
    console.log(`Running on http://localhost:4000`)
  })
}
main()
