import { CardDto, QuestionAnswerListDb } from '../types'
import { characterToUnicodeId, getImgUrl, isKanaRange } from './getImgUrl'
import { getKanjiPopularity } from '../data/kanjiPopularity'

export const deckDbToCardsDto = (questionAnswer: QuestionAnswerListDb): CardDto[] =>
  questionAnswer.map(([char, meaning]) => ({
    character: char,
    meaning,
    strokeImg: getImgUrl(char),
    isKanji: !isKanaRange(characterToUnicodeId(char) ?? 0),
    popularity: getKanjiPopularity(char),
  }))
