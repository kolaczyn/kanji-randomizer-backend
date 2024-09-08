import { expect, test } from 'vitest'
import { getImgUrl } from './getImgUrl'

test('getImgUrl', () => {
  expect(
    getImgUrl({
      character: '喝',
      meaning: 'hoarse, scold',
    })
  ).toMatchInlineSnapshot('"undefined/stroke/559d.png"')

  expect(
    getImgUrl({
      character: 'サ',
      meaning: 'sa',
    })
  ).toMatchInlineSnapshot('null')

  // TODO this should return null
  expect(
    getImgUrl({
      character: 'ぱ',
      meaning: 'pa',
    })
  ).toMatchInlineSnapshot(
    '"https://raw.githubusercontent.com/KeanuTomatoMomotaro/HirStroke/master/Resources/Alphabet/PA.png"'
  )

  expect(
    getImgUrl({
      character: 'ひ',
      meaning: 'hi',
    })
  ).toMatchInlineSnapshot(
    '"https://raw.githubusercontent.com/KeanuTomatoMomotaro/HirStroke/master/Resources/Alphabet/HI.png"'
  )
})
