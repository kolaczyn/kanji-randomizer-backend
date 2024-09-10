import { z } from 'zod'

export const vocabQuerySchema = z.object({
  onlyKanji: z
    .string()
    .transform(val => val === 'true')
    .default('true'),
  query: z.string(),
  minLen: z.coerce.number().default(-Infinity),
  maxLen: z.coerce.number().default(Infinity),
})
