export type DeckDb = {
  id: string
  title: string
  deck: QuestionAnswerList
}

export type QuestionAnswerList = [string, string][]

export type DeckDto = [string, string][]

export type DeckLengthDto = {
  length: number
}

export type HomeTilesDto = {
  tiles: {
    id: string
    title: string
    length: number
  }[]
}
