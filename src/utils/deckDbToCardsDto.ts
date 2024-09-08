import { CardDto, QuestionAnswerListDb } from '../types'
import { getImgUrl } from './getImgUrl'

export const deckDbToCardsDto = (questionAnswer: QuestionAnswerListDb): CardDto[] =>
  questionAnswer.map(([character, meaning]) => ({
    character,
    meaning,
    strokeImg: getImgUrl({
      meaning,
      character,
    }),
  }))
