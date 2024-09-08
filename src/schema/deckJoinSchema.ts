import { z } from 'zod'

const uniqueCheck = (tags: string[]) => new Set(tags).size === tags.length

export const deckJoinSchema = z.array(z.string()).refine(uniqueCheck, {
  message: 'All tags must be unique',
})
