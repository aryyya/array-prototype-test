// modules

const colors = require('colors')

// utility

let score = 0
let total = 10

const assert = ({ name, condition, input, output, expected, actual }) => {
  if (condition) {
    console.log(`${name} ✔`.green)
    score++
    console.log(`${score} of ${total} tasks complete\n`)
  } else {
    console.log(`${name} ✘`.red)
    if (input)    console.log(`          input: ${input}`)
    if (output)   console.log(`         output: ${output}`)
    if (expected) console.log(`expected output: ${expected}`)
    console.log(`${score} of ${total} tasks complete\n`)
    process.exit()
  }
}

Array.prototype.equals = function (array2) {
  if (this.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array2; i++) {
    if (!(this[i] === array2[i])){
      return false
    }
  }
  return true
}

// tests

const testArray = [ 1, 2, 3 ]

const testMyReverse = () => {
  console.log('Array.prototype.myReverse()')
  console.log('This method should return a new array in reverse order.')
  console.log()

  assert({
    name: 'Array.prototype.myReverse exists and returns an array',
    condition: Array.prototype.myReverse && typeof testArray.myReverse() === 'object'
  })
  
  const input = [ 'Jim', 'Pam', 'Dwight' ]
  const inputCopy = [...input]
  const output = input.myReverse()
  const expected = inputCopy.reverse()

  assert({
    name: 'Array.prototype.myReverse is correct',
    condition: expected.equals(output),
    input,
    output: JSON.stringify(output),
    expected: JSON.stringify(expected)
  })
}

const testMyJoin = () => {
  console.log('Array.prototype.myJoin(joiner)')
  console.log('This method should return a string of elements joined together with an optional joiner argument.')
  console.log()

  assert({
    name: 'Array.prototype.myJoin exists and returns a string',
    condition: Array.prototype.myJoin && typeof testArray.myJoin() === 'string'
  })

  const input = [ 'bears', 'beets', 'battlestar galactica' ]
  const output = input.myJoin(' + ')
  const expected = input.join(' + ')
  
  assert({
    name: 'Array.prototype.myJoin is correct',
    condition: expected === output,
    input: "['bears','beets','battlestar galactica'].myJoin(' + ')",
    output: JSON.stringify(output),
    expected: JSON.stringify(expected)
  })
}

const testMyForEach = () => {
  console.log('Array.prototype.myForEach((element, index) => { ... })')
  console.log('This method should take a callback function that it executes over each element of the array with the element as it\'s first argument and the index as it\'s second argument.')
  console.log()

  assert({
    name: 'Array.prototype.myForEach exists and returns nothing',
    condition: Array.prototype.myForEach && typeof testArray.myForEach(() => {}) === 'undefined'
  })

  let product = 0
  const input = [ 1, 2, 3 ]
  const fn = (n, index) => (product += n * index)
  input.myForEach(fn)
  output = product

  assert({
    name: 'Array.prototype.myForEach is correct',
    condition: product === 8,
    input: 'let product = 0; [1,2,3].myForEach((n, i) => product += n * i))',
    output,
    expected: 8
  })
}

const testMyMap = () => {
  console.log('Array.prototype.myMap((element, index) => { ... })')
  console.log('This method should take a callback function that it executes over each element of the array with the element as it\'s first argument and the index as it\'s second argument. The return value of each function execution is put in a new array that is returned.')
  console.log()

  assert({
    name: 'Array.prototype.myMap exists and returns a new array',
    condition: Array.prototype.myMap && typeof testArray.myMap(() => {}) === 'object'
  })

  const input = [ 'bears', 'beets', 'battlestar galactica' ]
  const fn = (element, index) => `${index + 1}. ${element.toUpperCase()}`
  const output = input.myMap(fn)
  const expected = input.map(fn)

  assert({
    name: 'Array.prototype.myMap is correct',
    condition: expected.equals(output),
    input: "['bears','beets','battlestar galactica'].myMap((word, index) => \`${index + 1}. ${word.toUpperCase()}\`)",
    output: JSON.stringify(output),
    expected: JSON.stringify(expected)
  })
}

const testMyFilter = () => {
  console.log('Array.prototype.myFilter((element, index) => { ... })')
  console.log('This method should take a callback function that it executes over each element of the array with the element as it\'s first argument and the index as it\'s second argument. If the return value of a function execution is True, that element is put in a new array that is returned.')
  console.log()

  assert({
    name: 'Array.prototype.myFilter exists and returns a new array',
    condition: Array.prototype.myFilter && typeof testArray.myFilter(() => {}) === 'object'
  })

  const input = [{ name: 'Jim', gender: 'm' }, { name: 'Pam', gender: 'f' }, { name: 'Karen', gender: 'f' }]
  const fn = (person) => person.gender === 'f'
  const output = input.myFilter(fn)
  const expected = input.filter(fn)

  assert({
    name: 'Array.prototype.myFilter is correct',
    condition: expected.equals(output),
    input: "[{name:'Jim',gender:'m'},{name:'Pam',gender:'f'},{name:'Karen',gender:'f'}].myFilter(person => person.gender === 'f')",
    output: JSON.stringify(output),
    expected: JSON.stringify(expected)
  })
}

const testsCompleted = () => {
  console.log('All tests passed!')
}

// ---------------------------
// YOUR CODE STARTS BELOW HERE
// ---------------------------



// -------------------------
// YOUR CODE ENDS ABOVE HERE
// -------------------------

// run tests

const tests = [
  testMyReverse,
  testMyJoin,
  testMyForEach,
  testMyMap,
  testMyFilter,
  testsCompleted
]

console.log(`Complete ${total} tasks by extending the Array object prototype.`)
console.log(`You only have to create the array methods listed, test data will be used with them automatically and the response will be checked for correctness.`)
console.log('No built-in array methods are allowed to be used!')
console.log()

tests.forEach(test => {
  console.log('---')
  test()
})

// your code:

