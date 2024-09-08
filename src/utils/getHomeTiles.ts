import { kanjiN5 } from '../data/kanjiN5'
import { kanjiN4 } from '../data/kanjiN4'
import { kanjiN3 } from '../data/kanjiN3'
import { kanjiN1 } from '../data/kanjiN1'
import { kanjiN2 } from '../data/kanjiN2'
import { hiraganaWithDakuten, hiraganaWithoutDakuten } from '../data/hiragana'
import { katakanaWithDakuten, katakanaWithoutDakuten } from '../data/katakana'

type HomeTile = {
  id: string
  title: string
  length: number
}

export const getHomeTiles = (): HomeTile[] => [
  {
    id: 'n5',
    title: 'N5 Kanji',
    length: kanjiN5.length,
  },
  {
    id: 'n4',
    title: 'N4 Kanji',
    length: kanjiN4.length,
  },
  {
    id: 'n3',
    title: 'N3 Kanji',
    length: kanjiN3.length,
  },
  {
    id: 'n2',
    title: 'N2 Kanji',
    length: kanjiN2.length,
  },
  {
    id: 'n1',
    title: 'N1 Kanji',
    length: kanjiN1.length,
  },
  {
    id: 'hiragana-with-dakuten',
    title: 'Hiragana with dakuten',
    length: hiraganaWithDakuten.length,
  },
  {
    id: 'hiragana-without-dakuten',
    title: 'Hiragana without dakuten',
    length: hiraganaWithoutDakuten.length,
  },
  {
    id: 'katakana-with-dakuten',
    title: 'Katakana with dakuten',
    length: katakanaWithDakuten.length,
  },
  {
    id: 'katakana-without-dakuten',
    title: 'Katakana without dakuten',
    length: katakanaWithoutDakuten.length,
  },
]
