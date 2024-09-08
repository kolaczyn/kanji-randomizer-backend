import { hiraganaBase, hiraganaOnlyDakuten } from '../data/hiragana'
import { katakanaBase, katakanaOnlyDakuten } from '../data/katakana'
import { JapaneseDictionary, JapaneseDictionaryWord } from '../types'

const allKana: string[] = [hiraganaBase, hiraganaOnlyDakuten, katakanaBase, katakanaOnlyDakuten]
  .map(x => x.deck)
  .flat()
  .map(x => x[0])

const loadDict = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require('../jmdict-eng-common-3.5.0.json') as JapaneseDictionary
}

const findWordInDictionary = (dictionary: JapaneseDictionary, toSearch: string[]) =>
  dictionary.words.filter(word =>
    word.kanji.some(({ text }) => text.split('').every(letter => toSearch.includes(letter)))
  )

const foundWordsToDto = (result: JapaneseDictionaryWord[]) =>
  result.map(x => ({
    jap: x.kanji.map(x => x.text).join(', '),
    eng: x.sense[0].gloss.map(x => x.text).join(', '),
  }))

// TODO this is gonna be extremely slow, but should do for now
export const findWord = (kanjiSearch: string[]) => {
  const toSearch = [...kanjiSearch, ...allKana]
  const dictionary = loadDict()

  const foundWords = findWordInDictionary(dictionary, toSearch)

  const result = foundWordsToDto(foundWords)

  console.log(result)
}
