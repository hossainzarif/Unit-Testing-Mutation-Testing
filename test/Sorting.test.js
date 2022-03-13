const sort = require('../src/3-sorting')

describe('Sorting', () => {
  var BVAdata = [
    [
      [2, 1, 3, 4],
      [1, 2, 3, 4],
    ],
    [
      [2, 1, 3, 0],
      [0, 1, 2, 3],
    ],
    [
      [2, 1, 4, 4, 3],
      [1, 2, 3, 4, 4],
    ],
    [
      [12, 11, 4, 3, 2, 1],
      [1, 2, 3, 4, 11, 12],
    ],
    [
      [11, 11],
      [11, 11],
    ],
    [
      [12, 11],
      [11, 12],
    ],
  ]

  describe.each(BVAdata)('BVA: Sorting( %i), Expected: %i', (a, expected) => {
    test(`returns ${sort.selectionSort(a)}`, () => {
      expect(sort.selectionSort(a)).toEqual(expected)
    })
  })

  // var DTdata = [
  //   [0, 89, 89],
  //   [-17, -35, -52],
  //   [65, -12, 53],
  //   [-78, 24, -54],
  // ]
  // describe.each(DTdata)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
  //   test(`returns ${calculator.add(a, b)}`, () => {
  //     expect(calculator.add(a, b)).toBe(expected)
  //   })
  // })
})
