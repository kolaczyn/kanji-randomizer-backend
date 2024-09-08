import { DeckDb } from '../types'
import { allDecksSafe } from '../data/allDecks'

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
  getHomeTile(allDecksSafe['hiragana-with-dakuten']),
  getHomeTile(allDecksSafe['hiragana-without-dakuten']),
  getHomeTile(allDecksSafe['katakana-with-dakuten']),
  getHomeTile(allDecksSafe['katakana-without-dakuten']),
  getHomeTile(allDecksSafe['n5']),
  getHomeTile(allDecksSafe['n4']),
  getHomeTile(allDecksSafe['n3']),
  getHomeTile(allDecksSafe['n2']),
  getHomeTile(allDecksSafe['n1']),
]
