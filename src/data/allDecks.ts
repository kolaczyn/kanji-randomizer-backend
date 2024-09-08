import { hiraganaWithDakuten, hiraganaWithoutDakuten } from './hiragana'
import { kanjiN1 } from './kanjiN1'
import { kanjiN2 } from './kanjiN2'
import { kanjiN3 } from './kanjiN3'
import { kanjiN4 } from './kanjiN4'
import { kanjiN5 } from './kanjiN5'
import { katakanaWithDakuten, katakanaWithoutDakuten } from './katakana'
import { KanjiList } from '../types'

export const allDecks: Record<string, KanjiList> = {
  n5: kanjiN5,
  n4: kanjiN4,
  n3: kanjiN3,
  n2: kanjiN2,
  n1: kanjiN1,

  'hiragana-with-dakuten': hiraganaWithDakuten,
  'hiragana-without-dakuten': hiraganaWithoutDakuten,
  'katakana-with-dakuten': katakanaWithDakuten,
  'katakana-without-dakuten': katakanaWithoutDakuten,
}
