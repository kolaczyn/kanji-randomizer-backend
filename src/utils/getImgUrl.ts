import { apiBaseUrl } from '../env/apiBaseUrl'

const characterToUnicodeId = (char: string): number | null => char.codePointAt(0) ?? null

const isHiraganaRange = (unicodeId: number): boolean => {
  const HIRAGANA_START = 0x3040
  const HIRAGANA_END = 0x309f
  return unicodeId >= HIRAGANA_START && unicodeId <= HIRAGANA_END
}

const isKatakanaRange = (unicodeId: number): boolean => {
  const KATAKANA_START = 0x30a0
  const KATAKANA_END = 0x30ff
  return unicodeId >= KATAKANA_START && unicodeId <= KATAKANA_END
}

type GetImgUrlArgs = {
  character: string
  meaning: string
}

export const getImgUrl = ({ character: char, meaning }: GetImgUrlArgs): string | null => {
  const unicodeId = characterToUnicodeId(char)
  if (unicodeId === null) return null

  if (isHiraganaRange(unicodeId)) return hiraganaPronunciationToStroke(meaning)
  if (isKatakanaRange(unicodeId)) return null
  return kanjiToStrokeImgName(char)
}

const kanjiToStrokeImgName = (kanji: string): string | null => {
  const imageCode = kanji.codePointAt(0)?.toString(16)
  if (imageCode == null) return null
  return `${apiBaseUrl}/stroke/${imageCode}.png`
}

const hiraganaPronunciationToStroke = (pronunciation: string): string =>
  `https://raw.githubusercontent.com/KeanuTomatoMomotaro/HirStroke/master/Resources/Alphabet/${pronunciation.toUpperCase()}.png`
