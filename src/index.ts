import express from 'express'
import { reqToKana } from './utils/kanaTypeToKana'
import { reqToKanji } from './utils/kanjiLevelToKanji'
import { getHomeScreenStats } from './utils/getHomeScreenStats'

const app = express()

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

app.listen(4000)
