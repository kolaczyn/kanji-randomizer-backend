import { kanjiN5 } from '../data/kanjiN5'
import { kanjiN4 } from '../data/kanjiN4'
import { kanjiN3 } from '../data/kanjiN3'
import { kanjiN2 } from '../data/kanjiN2'
import { kanjiN1 } from '../data/kanjiN1'
import { extractKanjiFromDeck } from './extractKanjiFromDeck'

const levels = [kanjiN5, kanjiN4, kanjiN3, kanjiN2, kanjiN1]

export const kanjiUntilLevel = (level: string): string[] => {
  const actualLevel = parseInt(level.replace('level-n', ''))
  const levelToIndex = 5 - actualLevel + 1
  if (isNaN(actualLevel)) return []
  if (levelToIndex < 0 || levelToIndex > 5) return []

  return levels.slice(0, levelToIndex).flatMap(x => extractKanjiFromDeck(x))
}
