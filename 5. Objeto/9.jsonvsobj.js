const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  soma() {
    return a + b + c + d + e
  },
}

console.log(JSON.stringify(obj))

/* console.log(JSON.parse("{ a:1, b:2, c:3, d:4, e:5 }")) */
/* console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3, 'd':4, 'e':5 }"))*/
console.log(
  JSON.parse('{ "a":1, "b":2, "c":3, "d":4,"e":5 }')
) /* formato valido JSON */
console.log(
  JSON.parse('{ "a":1.22, "b":"string", "c":true, "d":{}, "e":[] }')
) /* formato valido JSON */
