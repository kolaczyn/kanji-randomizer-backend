import { hiraganaBase, hiraganaOnlyDakuten } from '../data/hiragana'
import { katakanaBase, katakanaOnlyDakuten } from '../data/katakana'
import { JapaneseDictionary, JapaneseDictionaryWord } from '../types'

const allKana: string[] = [hiraganaBase, hiraganaOnlyDakuten, katakanaBase, katakanaOnlyDakuten]
  .map(x => x.deck)
  .flat()
  .map(x => x[0])

const loadDict = () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('../../jmdict-eng-common-3.5.0.json') as JapaneseDictionary
}

const findWordInDictionary = (dictionary: JapaneseDictionary, toSearch: string[]) =>
  dictionary.words.filter(word =>
    // the very first definition seems to have the most kanji, so this should work. Otherwise, I don't get satisfying results
    word.kanji[0]?.text
      .split('')
      //
      .every(letter => toSearch.includes(letter)),
  )

const foundWordsToDto = (result: JapaneseDictionaryWord[]) =>
  result.map(x => ({
    jap: x.kanji[0].text,
    eng: x.sense[0].gloss.map(x => x.text).join(', '),
    kana: x.kana[0].text,
  }))

type FindWordArgs = {
  search: string[]
  minLen: number
  maxLen: number
  onlyKanji: boolean
}

// TODO this is gonna be extremely slow, but should do for now
// edit - it's actually a lot faster than I thought :p
export const findWord = ({ minLen, maxLen, search, onlyKanji }: FindWordArgs) => {
  const toSearch = onlyKanji ? search : [...search, ...allKana]
  const dictionary = loadDict()
  const foundWords = findWordInDictionary(dictionary, toSearch)
  return (
    foundWordsToDto(foundWords)
      // yeah, I could optimize, but I don't really care :p
      .filter(x => x.jap.length >= minLen && x.jap.length <= maxLen)
  )
}
