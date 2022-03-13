function temperatureConverter(measurement, val) {
  var result1, result2

  if (measurement == 'F') {
    result1 = ((val - 32) / 1.8).toFixed(2) + ' C'
    result2 = ((val - 32) / 1.8 + 273.15).toFixed(2) + ' K'
  } else if (measurement === 'C') {
    result1 = (val * 1.8 + 32).toFixed(2) + ' F'
    result2 = (val + 273.15).toFixed(2) + ' K'
  } else if (measurement === 'K') {
    result1 = ((val - 273.15) * 1.8 + 32).toFixed(2) + ' F'
    result2 = (val - 273.15).toFixed(2) + ' C'
  } else {
    return 'wrong input'
  }
  return [result1, result2]
}
module.exports = {
  temperatureConverter,
}
