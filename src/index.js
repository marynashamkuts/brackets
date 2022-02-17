module.exports = function check(str, bracketsConfig) {
  let result = []

  for (let a of str) {
    if (a !== new Map(bracketsConfig).get(result[result.length - 1])) {
      result.push(a)
    } else result.pop(a)
  }
  return !result.length
}
