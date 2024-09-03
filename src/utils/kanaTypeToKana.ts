import { KanjiList } from '../types'
import { hiraganaWithDakuten, hiraganaWithoutDakuten } from '../data/hiragana'
import { katakanaWithDakuten, katakanaWithoutDakuten } from '../data/katakana'
import { Request } from 'express'

const kanaTypeToKana = (kanaType: string): KanjiList | null => {
  switch (kanaType) {
    case 'hiragana-with-dakuten':
      return hiraganaWithDakuten
    case 'hiragana-without-dakuten':
      return hiraganaWithoutDakuten
    case 'katakana-with-dakuten':
      return katakanaWithDakuten
    case 'katakana-without-dakuten':
      return katakanaWithoutDakuten
    default:
      return null
  }
}

export const reqToKana = (req: Request<{ kanaType: string }>) => {
  const kanaType = req.params.kanaType.toLowerCase()
  return kanaTypeToKana(kanaType)
}
