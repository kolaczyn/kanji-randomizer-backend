import { DeckDb } from '../types'

export const extractKanjiFromDeck = (deck: DeckDb) => deck.deck.map(x => x[0])
