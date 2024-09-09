import { Request } from 'express'

// TODO There has to be a better way to do this
export const extractVocabQuery = (req: Request) => {
  const rawMinLen = req.query.minLength as string | undefined
  const rawMaxLen = req.query.maxLength as string | undefined
  const rawOnlyKanji = req.query.onlyKanji as string | undefined

  const minLength = rawMinLen ? parseInt(rawMinLen) : -Infinity
  const maxLength = rawMaxLen ? parseInt(rawMaxLen) : Infinity
  const onlyKanji = rawOnlyKanji === 'true'

  return { minLength, maxLength, onlyKanji }
}
