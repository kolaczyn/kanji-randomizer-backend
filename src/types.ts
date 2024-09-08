export type DeckDb = {
  id: string
  title: string
  deck: QuestionAnswerListDb
}

export type QuestionAnswerListDb = [string, string][]

export type CardDto = {
  character: string
  meaning: string
  strokeImg: string | null
  isKanji: boolean
}

export type DeckDto = {
  id: string
  title: string
  deck: CardDto[]
}

export type HomeTilesDto = {
  tiles: {
    id: string
    title: string
    length: number
    strokeImg?: string
  }[]
}

export type JapaneseDictionaryWord = {
  id: string
  kanji: { common: boolean; text: string; tags: string[] }[]
  kana: { common: boolean; text: string; tags: string[]; appliesToKanji: string[] }[]
  sense: [{ gloss: { lang: 'eng'; text: string }[] }]
}

export type JapaneseDictionary = {
  version: string
  languages: string[]
  commonOnly: boolean
  dictDate: string
  words: JapaneseDictionaryWord[]
}

export type FoundWordsDto = {
  results: {
    jap: string
    eng: string
    kana: string
  }[]
  /** how long it took to crunch the numbers */
  timeMs: number
}
