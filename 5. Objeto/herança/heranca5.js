console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

console.log(typeof Function)

String.prototype.reverse = function () {
  return this.split("").reverse().join("")
}

console.log("escola cod3r".reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a','b','c'].first())

