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
