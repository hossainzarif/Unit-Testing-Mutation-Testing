const converter = require('../src/2-converter')

describe('Converter', () => {
  var BVAdata = [
    ['F', 32, ['0.00 C', '273.15 K']],
    ['F', 66, ['18.89 C', '292.04 K']],
    ['C', 32, ['89.60 F', '305.15 K']],
    ['K', 32, ['-402.07 F', '-241.15 C']],
    ['Z', 32, 'wrong input'],
  ]

  describe.each(BVAdata)(
    'BVA: Converter(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${converter.temperatureConverter(a, b)}`, () => {
        expect(converter.temperatureConverter(a, b)).toEqual(expected)
      })
    }
  )

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
