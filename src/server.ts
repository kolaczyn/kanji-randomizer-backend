import { config } from 'dotenv-safe'
config()
import express from 'express'
import cors from 'cors'
import { extractDict } from './utils/extractDict'
import { handleDecksJoin } from './handlers/handleDecksJoin'
import { handleHomeTiles } from './handlers/handleHomeTiles'
import { handleVocab } from './handlers/handleVocab'
import { handleImgsStroke } from './handlers/handleImgsStroke'
import { handleVocabDeck } from './handlers/handleVocabDeck'
import { MikroORM } from '@mikro-orm/sqlite'

export const app = express()

app.use(
  cors({
    origin: '*',
  }),
)

app.use(express.static('src/assets'))

app.get('/v2/decks/join', handleDecksJoin)
app.get('/v2/home/tiles', handleHomeTiles)
app.get('/v2/vocab', handleVocab)
app.get('/v2/vocab-deck', handleVocabDeck)
app.get('/imgs/stroke/:char', handleImgsStroke)

const main = async () => {
  const _orm = await MikroORM.init()

  await extractDict()

  app.listen(4000, () => {
    console.log(`Running on http://localhost:4000`)
  })
}
main()
