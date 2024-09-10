import { z } from 'zod'

export type VocabQuery = {
  onlyKanji: boolean
  query: string
  minLen: number
  maxLen: number
}

export const vocabQuerySchema = z.object({
  onlyKanji: z
    .string()
    .transform(val => val === 'true')
    .default('true'),
  query: z.string(),
  minLen: z.coerce.number().default(-Infinity),
  maxLen: z.coerce.number().default(Infinity),
})
