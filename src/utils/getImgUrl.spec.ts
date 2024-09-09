import { expect, test } from 'vitest'
import { getImgUrl } from './getImgUrl'

test('getImgUrl', () => {
  expect(getImgUrl('喝')).toMatchInlineSnapshot('"http://localhost:4000/stroke/559d.png"')

  expect(getImgUrl('サ')).toMatchInlineSnapshot(
    '"https://upload.wikimedia.org/wikipedia/commons/8/8f/%E3%82%B5-bw.png"',
  )

  expect(getImgUrl('ぱ')).toMatchInlineSnapshot(
    '"https://upload.wikimedia.org/wikipedia/commons/d/d0/%E3%81%B1-bw.png"',
  )

  expect(getImgUrl('ひ')).toMatchInlineSnapshot(
    '"https://upload.wikimedia.org/wikipedia/commons/c/c5/%E3%81%B2-bw.png"',
  )

  // this is how edge cases are handled, which isn't very good, but it doesn't really matter :p
  expect(getImgUrl('ばか')).toMatchInlineSnapshot('undefined')
  expect(getImgUrl('hi')).toMatchInlineSnapshot('"http://localhost:4000/stroke/68.png"')
})
