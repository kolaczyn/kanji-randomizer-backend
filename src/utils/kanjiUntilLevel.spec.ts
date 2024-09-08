import { test, expect } from 'vitest'
import { kanjiUntilLevel } from './kanjiUntilLevel'

test('kanjiUntilLevel', () => {
  expect(kanjiUntilLevel('level-n5').length).toBe(80)
  expect(kanjiUntilLevel('level-n4').length).toBe(247)
  expect(kanjiUntilLevel('level-n3').length).toBe(617)
  expect(kanjiUntilLevel('level-n2').length).toBe(991)
  expect(kanjiUntilLevel('level-n1').length).toBe(1901)
  // edge cases
  expect(kanjiUntilLevel('level-n0').length).toBe(0)
  expect(kanjiUntilLevel('sdklj').length).toBe(0)
})
