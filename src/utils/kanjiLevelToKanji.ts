import { KanjiList } from '../types'
import { kanjiN1 } from '../data/kanjiN1'
import { kanjiN2 } from '../data/kanjiN2'
import { kanjiN3 } from '../data/kanjiN3'
import { kanjiN4 } from '../data/kanjiN4'
import { kanjiN5 } from '../data/kanjiN5'
import { Request } from 'express'

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

export const reqToKanji = (req: Request<{ level: string }>) => {
  const level = req.params.level.toUpperCase()
  return levelToKanji(level)
}
