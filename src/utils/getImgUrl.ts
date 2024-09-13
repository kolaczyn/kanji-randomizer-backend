import { apiBaseUrl } from '../const/env'
import { hiraganaImgsDict } from '../data/hiraganaImgsDict'
import { katakanaImgsDict } from '../data/katakanaImgsDict'

export const characterToUnicodeId = (char: string): number | null => char.codePointAt(0) ?? null

export const isHiraganaRange = (unicodeId: number): boolean => {
  const HIRAGANA_START = 0x3040
  const HIRAGANA_END = 0x309f
  return unicodeId >= HIRAGANA_START && unicodeId <= HIRAGANA_END
}

export const isKatakanaRange = (unicodeId: number): boolean => {
  const KATAKANA_START = 0x30a0
  const KATAKANA_END = 0x30ff
  return unicodeId >= KATAKANA_START && unicodeId <= KATAKANA_END
}

export const isKanaRange = (unicodeId: number): boolean => {
  return isHiraganaRange(unicodeId) || isKatakanaRange(unicodeId)
}

export const getImgUrl = (char: string): string | null => {
  const unicodeId = characterToUnicodeId(char)
  if (unicodeId === null) return null

  if (isHiraganaRange(unicodeId)) return hiraganaImgsDict[char]
  if (isKatakanaRange(unicodeId)) return katakanaImgsDict[char]
  return kanjiToStrokeImgName(char)
}

const kanjiToStrokeImgName = (kanji: string): string | null => {
  const imageCode = kanji.codePointAt(0)?.toString(16)
  if (imageCode == null) return null
  return `${apiBaseUrl}/stroke/${imageCode}.png`
}
