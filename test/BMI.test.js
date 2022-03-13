const BMI = require('../src/1-BMI')

describe('BMI', () => {
  var BVAdata = [
    [180, 60, '18.52'],
    [0, 0, 'NaN'],
    [0, 80, 'Infinity'],
    [-80, 90, 'Please provide a valid height'],
    ['', 90, 'Please provide a valid height'],
    [80, -90, 'Please provide a valid weight'],
    [90, '', 'Please provide a valid weight'],
    [-80, -90, 'Please provide a valid height'],
  ]

  describe.each(BVAdata)('BVA: BMI(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${BMI.calculateBMI(a, b)}`, () => {
      expect(BMI.calculateBMI(a, b)).toBe(expected)
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
