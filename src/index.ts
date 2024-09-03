import express from 'express'
import { kanjiN5 } from './data/kanjiN5'
import { kanjiN1 } from './data/kanjiN1'
import { kanjiN2 } from './data/kanjiN2'
import { kanjiN3 } from './data/kanjiN3'
import { kanjiN4 } from './data/kanjiN4'
import { KanjiList } from './types'

const app = express()

const levelToKanji = (level: string): KanjiList | null => {
  switch (level) {
    case 'N1':
      return kanjiN1
    case 'N2':
      return kanjiN2
    case 'N3':
      return kanjiN3
    case 'N4':
      return kanjiN4
    case 'N5':
      return kanjiN5
    default:
      return null
  }
}

app.get('/kanji/:level', (req, res) => {
  const level = req.params.level.toUpperCase()
  const kanji = levelToKanji(level)
  if (kanji) {
    res.json(kanji)
  } else {
    res.status(404).send('Not Found')
  }
})

app.get('/kanji/:level/length', (req, res) => {
  const level = req.params.level.toUpperCase()
  const kanji = levelToKanji(level)
  if (kanji) {
    res.json({ length: kanji.length })
  } else {
    res.status(404).send('Not Found')
  }
})

app.listen(3000)
