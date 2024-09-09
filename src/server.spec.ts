import { describe, expect, it, test } from 'vitest'
import request from 'supertest'
import { app } from './server'

describe('server', () => {
  describe('/v2/decks/join', () => {
    it('returns joined deck', async () => {
      await request(app)
        .get('/v2/decks/join?ids=n5&ids=n4')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          expect(response.body.deck.length).toBe(247)
        })
    })
  })

  describe('/v2/decks/:id', () => {
    it('returns n5 deck', async () => {
      await request(app)
        .get('/v2/decks/n5')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          expect(response.body.deck.length).toBe(80)
        })
    })

    it('handles unknown deck', async () => {
      await request(app).get('/v2/decks/asldakjl').expect(404)
    })
  })

  describe('photos', () => {
    it('photo found', async () => {
      await request(app).get('/stroke/6c0f.png').expect(200).expect('Content-Type', /image/)
    })

    it('photo not found', async () => {
      await request(app).get('/stroke/not-found.png').expect(404)
    })
  })

  test('/v2/home/tiles', async () => {
    await request(app)
      .get('/v2/home/tiles')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.tiles.length).toBe(9)
      })
  })

  describe('/imgs/stroke/:char', () => {
    test('hiragana', async () => {
      await request(app)
        .get('/imgs/stroke/あ')
        .expect(302)
        .expect('Location', 'https://upload.wikimedia.org/wikipedia/commons/2/21/%E3%81%82-bw.png')
    })

    test('katakana', async () => {
      await request(app)
        .get('/imgs/stroke/ア')
        .expect(302)
        .expect('Location', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/%E3%82%A2-bw.png')
    })

    test('kanji', async () => {
      await request(app).get('/imgs/stroke/漢').expect(302).expect('Location', 'undefined/stroke/6f22.png')
    })
  })
})
