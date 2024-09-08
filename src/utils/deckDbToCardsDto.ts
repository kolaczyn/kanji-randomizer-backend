import { CardDto, QuestionAnswerListDb } from '../types'
import { characterToUnicodeId, getImgUrl, isKanaRange } from './getImgUrl'

export const deckDbToCardsDto = (questionAnswer: QuestionAnswerListDb): CardDto[] =>
  questionAnswer.map(([character, meaning]) => ({
    character,
    meaning,
    strokeImg: getImgUrl(character),
    isKanji: !isKanaRange(characterToUnicodeId(character) ?? 0),
  }))
