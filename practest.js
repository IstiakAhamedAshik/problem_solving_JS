// 1..word count
let a = 'helo my name is istiak ahamed ashik'
let count = 0
let consonent = 0
for (i = 0; i < a.length; i++) {
  let string = a[i]
  if (string == 'a') {
    count++
  } else if (string == 'e') {
    count++
  } else if (string == 'i') {
    count++
  } else if (string == 'o') {
    count++
  } else if (string == 'u') {
    count++
  } else {
    consonent++
  }
}

// console.log('vowel is :', count)
// console.log('consonent is :', consonent)

//2. how many sentance in this paragraph

let paragraph =
  'Winter is one of the six seasons in Bangladesh. It seems before us to get a period. Nature changes because of its arrival. It is the coldest season in the country and comes after autumn. Winter is misty and foggy. Theres dense fog anywhere. Sometimes, the suns rays may be viewed due to heavy moisture as the suns rays cannot pass. The leaves of both grass and trees are coated with dew.'
let counting = 0
for (let i = 0; i < paragraph.length; i++) {
  let word = paragraph[i]
  if (word === '.') {
    counting++
  }
}
// console.log(counting)

// 3. word count...

let words = 'Winter is one  of the   six seasons in   Bangladesh.'
let wordcount = 0
for (let i = 0; i < words.length; i++) {
  if (words[i] == ' ' && words[i - 1] !== ' ') {
    wordcount++
  }
}
wordcount++
// console.log('word is :', wordcount)

//4.  remove duplicate alphabet

const sentance1 = 'the name of my country is bangladesh'

let uniqueWord = ' '
for (let i = 0; i < sentance1.length; i++) {
  duplicate = sentance1[i]

  if (uniqueWord.indexOf(duplicate) == -1) {
    uniqueWord = uniqueWord + duplicate
  }
}
// console.log(uniqueWord)

// 2.2 don't add duplicate number....

const numbers = [2, 3, 3, 4, 5, 6, 5, 6, 8, 6, 7, 4, 3, 5]
let totalAddNum = 0
numbers.forEach((num) => {
  if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
    totalAddNum = totalAddNum + num
  }
})
// console.log(totalAddNum)

// 2.3 add odd numbers in the array only one time...and remove the duplicate number in the array

const names = [
  'ashik',
  'mojahid',
  'sajib',
  'ashik',
  'mojahid',
  'mojahid',
  'robin',
  'sajib',
  'robin',
  'istiak',
  'robin',
]
var uniqueNames = []
var output = []
var nameCount = {}

for (var i = 0; i < names.length; i++) {
  var name = names[i]
  if (uniqueNames.indexOf(name) == -1) {
    uniqueNames.push(name)
    nameCount[name] = 1
  } else {
    nameCount[name] = nameCount[name] + 1
  }
}
for (name in nameCount) {
  if (nameCount[name] % 2 != 0) {
    output.push(name)
  }
}
// console.log(output)

// revers word...

let sentance4 = 'Siam is a Good boy'
let reversSentance = ' '
for (let i = sentance4.length - 1; i >= 0; i--) {
  let element = sentance4[i]
  reversSentance = reversSentance + element
}
//console.log(reversSentance)

//3.2 reverse word....
var sentence = 'i am the good boy'
function sentsReverse(sentence) {
  var reverseWordArray = []
  var reverseWord = ''
  var toArray = sentence.split(' ')
  toArray.forEach((word) => {
    for (var i = word.length - 1; i >= 0; i--) {
      var letter = word[i]
      reverseWord = reverseWord + letter
    }
    reverseWordArray.push(reverseWord)
    reverseWord = ' '
  })
  //console.log(reverseWordArray)
  var output = reverseWordArray.join(' ')
  return output
}
//console.log(sentsReverse(sentence))
var input = 'madam'
var str = ''
/* var reverseWord = reverse(input)
if (input === reverseWord) {
  console.log(true)
} else {
  console.log(false)
} */

for (let i = input.length - 1; i >= 0; i--) {
  str = str + input[i]
}
if (str === input) {
  //console.log('the string is palindrome')
} else {
  // console.log('string is not palindrome')
}
//console.log(str)

/* Recursive function */

//get the factorial value...

const getFactorialNumber = (num) => {
  if (num === 1) {
    return 1
  }
  return getFactorialNumber(num - 1) * num
}

const getNumber = getFactorialNumber(9)

//console.log(getNumber)

//get the prime number....
function isPrime(n) {
  let divisor = 2
  if (n > divisor) {
    if (n % divisor === 0) {
      return console.log(`${n} is not a prime number`)
    } else {
      divisor++
    }
  }
  return console.log(`${n} is  a prime number`)
}

//isPrime(5)
const getMinite = (taka) => {
  const getinputTaka = 100 * taka
  const miniteTaka = 65
  const cent1 = 100
  const minite1 = 60
  const getTheSecondFor1Paisa = 60 / miniteTaka
  const getTheSecondFor1taka = getTheSecondFor1Paisa * cent1
  const getTheSecondforGiven600paisa = getTheSecondFor1taka * getinputTaka
  const getThepaisa = getTheSecondforGiven600paisa / minite1
  const getTheminite = getThepaisa / cent1
  return getTheminite
}
const minite = getMinite(6)

console.log(minite)
