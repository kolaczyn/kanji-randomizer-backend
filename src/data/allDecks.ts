import { hiraganaOnlyDakuten, hiraganaBase } from './hiragana'
import { kanjiN1 } from './kanjiN1'
import { kanjiN2 } from './kanjiN2'
import { kanjiN3 } from './kanjiN3'
import { kanjiN4 } from './kanjiN4'
import { kanjiN5 } from './kanjiN5'
import { katakanaBase, katakanaOnlyDakuten } from './katakana'
import { DeckDb } from '../types'

export const allDeck = {
  [kanjiN5.id]: kanjiN5,
  [kanjiN4.id]: kanjiN4,
  [kanjiN3.id]: kanjiN3,
  [kanjiN2.id]: kanjiN2,
  [kanjiN1.id]: kanjiN1,

  [hiraganaBase.id]: hiraganaBase,
  [hiraganaOnlyDakuten.id]: hiraganaOnlyDakuten,
  [katakanaBase.id]: katakanaBase,
  [katakanaOnlyDakuten.id]: katakanaOnlyDakuten,
}

export const allDecksGeneric: Record<string, DeckDb> = allDeck
