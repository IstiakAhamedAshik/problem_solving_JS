const fibonacci = [0, 1]

for (let i = 2; i <= 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
// console.log(fibonacci)
const numbers = [
  54, 43, 5, 67, 67, 87, 45, 23, 45, 67, 89, 34, 23, 56, 34, 56, 78, 98, 76, 56,
  78,
]

function evenNumber(number) {
  if (number % 2 == 0) {
    return number
  }
}
let getEvenNumber = numbers.filter(evenNumber)
let getJorNumber = numbers.filter((number) => number % 2 == 0)

// console.log(getEvenNumber)
// console.log(getJorNumber)
let minNumber = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i]
  if (element < minNumber) {
    minNumber = element
  } else {
    // console.log('odd nember :', element)
  }
}
// console.log(minNumber)
const uniqueNumber = []
for (number of numbers) {
  if (uniqueNumber.indexOf(number) == -1) {
    uniqueNumber.push(number)
  }
}
// console.log(uniqueNumber)
function getNumber(element) {
  if (element % 5 === 0 && element % 3 === 0) {
    //console.log('progna')
  } else if (element % 5 === 0) {
    //console.log('monika')
  } else if (element % 3 === 0) {
    // console.log('ashik')
  } else {
    //console.log('this number is not divided by 3 & 5:', element)
  }
}
//numbers.filter(getNumber)
for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i]
  if (element % 5 === 0 && element % 3 === 0) {
    //console.log('ashik')
  } else if (element % 5 === 0) {
    //console.log('monika')
  } else if (element % 3 === 0) {
    // console.log('progna')
  } else {
    //console.log('this number is not divided by 3 & 5:', element)
  }
}
function seeAnimalPerMiles(miles) {
  const seeAnimalPer1st10Mile = 10
  const seeAnimalPer2nd20Mile = 50
  const lastSeeAnimalPer20_to_100mile = 40
  if (miles <= 10) {
    let firstSeeTotaol = 10 * miles
    return firstSeeTotaol
  } else if (miles <= 20) {
    let firstSeeAnimal = 10 * seeAnimalPer1st10Mile
    let restAnimals = miles - 10
    let secondAnimals = seeAnimalPer2nd20Mile * restAnimals
    totalAnimal = firstSeeAnimal + secondAnimals
    return totalAnimal
  } else {
    let firstSeeAnimals = 10 * seeAnimalPer1st10Mile
    let secondSeeAnimal = 10 * seeAnimalPer2nd20Mile
    let restAnimalss = miles - 20
    let allSeeAnimals = restAnimalss * lastSeeAnimalPer20_to_100mile

    let totalSeeAnimals = allSeeAnimals + secondSeeAnimal + firstSeeAnimals
    return totalSeeAnimals
  }
}

const howAnimals = seeAnimalPerMiles(21)
// console.log(howAnimals)

function friendsName(string) {
  let maxString = string[0].length
  //console.log(maxString)
  string.map((element) => (maxString = Math.min(maxString, element.length)))

  //console.log(maxString)
  let getbig = string.filter((element) => element.length == maxString)
  //console.log(getbig)
}

const getTheBigString = friendsName([
  'ashik',
  'sajib',
  'rotin',
  'mojahid',
  'nayem',
  'santo',
  'siam',
])
function getTotalTaka(day) {
  let perDayMilk = 1.25
  let perliterMilkCoast = 52
  let daymilkCoast = perDayMilk * perliterMilkCoast
  let daysMilkCoast = day * daymilkCoast
  return daysMilkCoast
}

const getTotal = getTotalTaka(30)
//console.log(getTotal)

function getArea(len, wide) {
  let totalArea = len * wide
  let totalRoadAreaLength = 2 * 2
  let totalRoadAreawid = 2 * 2
  let totalLenawithoutRoad = len - totalRoadAreaLength
  let totalWidawithoutRoad = wide - totalRoadAreawid
  let totalAreaWithoutRoad = totalLenawithoutRoad * totalWidawithoutRoad
  let RoadArea = totalArea - totalAreaWithoutRoad
  return RoadArea
}

const getAreaWithoutRoad = getArea(50, 40)
//console.log(getAreaWithoutRoad)
const num = 20
for (let j = 1; j <= 10; j++) {
  // console.log(`${j} * ${num} = ${num * j}`)
  /* function number(num) {
    if (j === 1) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 2) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 3) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 4) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 5) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 6) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 7) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 8) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 9) {
      return `${j} * ${num} = ${num * j}`
    } else if (j === 10) {
      return `${j} * ${num} = ${num * j}`
    }
  }
  const getnum = number(13)
  console.log(getnum) */
}

const people = true

const createperson = new Promise((resolve, reject) => {
  if (people) {
    const person = {
      name: 'Ashik',
      occupation: 'coder',
      id: 23,
    }
    resolve(person)
  } else {
    reject(new Error('create the person name'))
  }
})
createperson
  .then((res) => {
    //console.log(res)
  })
  .catch((err) => {
    //console.log(err.message)
  })
const products = [
  '1 have laptop apple',
  ' here is apple laptop',
  'here is my apple phone',
  ' laptop',
]

const searching = 'laptop'
const hi = []
for (const product of products) {
  if (product.indexOf(searching) != -1) {
    hi.push(product)
  }
}
//console.log(hi)

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

// console.log(count)
// console.log(consonent)
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
const splitSentence = 'Carbon emission is increasing day by day'
let get1 = splitSentence.split('in')
console.log(get1)
