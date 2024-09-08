import express from 'express'
import { reqToKana } from './utils/kanaTypeToKana'
import { reqToKanji } from './utils/kanjiLevelToKanji'
import { getHomeScreenStats } from './utils/getHomeScreenStats'
import cors from 'cors'
import { allDecks } from './data/allDecks'
import { getHomeTiles } from './utils/getHomeTiles'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.get('/kanji/:level', (req, res) => {
  const kanji = reqToKanji(req)
  if (kanji) {
    res.json(kanji)
  } else {
    res.status(404).send('Not Found')
  }
})

app.get('/kanji/:level/length', (req, res) => {
  const kanji = reqToKanji(req)
  if (kanji) {
    res.json({ length: kanji.length })
  } else {
    res.status(404).send('Not Found')
  }
})

app.get('/kana/:kanaType', (req, res) => {
  const kana = reqToKana(req)
  if (kana) {
    res.json(kana)
  } else {
    res.status(404).send('Not Found')
  }
})

app.get('/kana/:kanaType/length', (req, res) => {
  const kana = reqToKana(req)
  if (kana) {
    res.json({ length: kana.length })
  } else {
    res.status(404).send('Not Found')
  }
})

app.get('/home-screen-stats', (req, res) => {
  res.send(getHomeScreenStats())
})

app.get('/v2/decks/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Id not provided')

  const deck = allDecks[id]
  if (!deck) return res.status(404).send('Deck not found')

  res.json(deck)
})

app.get('/v2/decks/:id/length', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Id not provided')

  const deck = allDecks[id]
  if (!deck) return res.status(404).send('Deck not found')

  res.json({ length: deck.length })
})

app.get('/v2/home/tiles', (_req, res) =>
  res.json({
    tiles: getHomeTiles(),
  })
)

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:4000`)
})
