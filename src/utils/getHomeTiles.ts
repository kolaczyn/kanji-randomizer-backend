import { DeckDb } from '../types'
import { hiraganaBase, hiraganaOnlyDakuten } from '../data/hiragana'
import { katakanaBase, katakanaOnlyDakuten } from '../data/katakana'
import { kanjiN5 } from '../data/kanjiN5'
import { kanjiN4 } from '../data/kanjiN4'
import { kanjiN3 } from '../data/kanjiN3'
import { kanjiN2 } from '../data/kanjiN2'
import { kanjiN1 } from '../data/kanjiN1'
import { allDeck } from '../data/allDecks'

type HomeTile = {
  id: string
  title: string
  length: number
  apiUrl: string
}

const getHomeTile = (deck: DeckDb): HomeTile => ({
  id: deck.id,
  title: deck.title,
  length: deck.deck.length,
  apiUrl: `/v2/decks/${deck.id}`,
})

export const getHomeTiles = (): HomeTile[] => [
  getHomeTile(allDeck[hiraganaBase.id]),
  getHomeTile(allDeck[hiraganaOnlyDakuten.id]),
  getHomeTile(allDeck[katakanaBase.id]),
  getHomeTile(allDeck[katakanaOnlyDakuten.id]),
  getHomeTile(allDeck[kanjiN5.id]),
  getHomeTile(allDeck[kanjiN4.id]),
  getHomeTile(allDeck[kanjiN3.id]),
  getHomeTile(allDeck[kanjiN2.id]),
  getHomeTile(allDeck[kanjiN1.id]),
]
