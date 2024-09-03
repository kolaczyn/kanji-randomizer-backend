import { kanjiN1 } from '../data/kanjiN1'
import { kanjiN2 } from '../data/kanjiN2'
import { kanjiN3 } from '../data/kanjiN3'
import { kanjiN4 } from '../data/kanjiN4'
import { kanjiN5 } from '../data/kanjiN5'
import { hiraganaWithDakuten } from '../data/hiragana'
import { katakanaWithDakuten, katakanaWithoutDakuten } from '../data/katakana'
import { HomeScreenStatsDto } from '../types'

export const getHomeScreenStats = (): HomeScreenStatsDto => ({
  n1: kanjiN1.length,
  n2: kanjiN2.length,
  n3: kanjiN3.length,
  n4: kanjiN4.length,
  n5: kanjiN5.length,
  hiraganaWithDakuten: hiraganaWithDakuten.length,
  hiraganaWithoutDakuten: hiraganaWithDakuten.length,
  katakanaWithDakuten: katakanaWithDakuten.length,
  katakanaWithoutDakuten: katakanaWithoutDakuten.length,
})
