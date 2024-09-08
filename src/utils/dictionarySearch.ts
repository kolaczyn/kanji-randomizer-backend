import { hiraganaBase, hiraganaOnlyDakuten } from '../data/hiragana'
import { katakanaBase, katakanaOnlyDakuten } from '../data/katakana'
import { JapaneseDictionary, JapaneseDictionaryWord } from '../types'

const allKana: string[] = [hiraganaBase, hiraganaOnlyDakuten, katakanaBase, katakanaOnlyDakuten]
  .map(x => x.deck)
  .flat()
  .map(x => x[0])

const loadDict = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require('../../jmdict-eng-common-3.5.0.json') as JapaneseDictionary
}

const findWordInDictionary = (dictionary: JapaneseDictionary, toSearch: string[]) =>
  dictionary.words.filter(word =>
    // the very first definition seems to have the most kanji, so this should work. Otherwise, I don't get satisfying results
    word.kanji[0]?.text
      .split('')
      //
      .every(letter => toSearch.includes(letter))
  )

const foundWordsToDto = (result: JapaneseDictionaryWord[]) =>
  result.map(x => ({
    jap: x.kanji[0].text,
    eng: x.sense[0].gloss.map(x => x.text).join(', '),
    kana: x.kana[0].text,
  }))

// TODO this is gonna be extremely slow, but should do for now
// TODO should remove single kanji words?
export const findWord = (kanjiSearch: string) => {
  const toSearch = [...kanjiSearch.split(''), ...allKana]
  const dictionary = loadDict()
  const foundWords = findWordInDictionary(dictionary, toSearch)
  return foundWordsToDto(foundWords)
}
